import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {
  adminLogin,
  createUser,
  findUserByEmail,
  userLogin,
} from "./authActions";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_ID!,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      id: "Credentials-Login",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing credentials");
          }

          const user = await userLogin(credentials.email, credentials.password);

          if (!user) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (error) {
          console.error("Login error:", error);
          throw new Error("Invalid credentials");
        }
      },
    }),
    CredentialsProvider({
      id: "Credentials-Admin-Login",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing credentials");
          }

          const user = await adminLogin(
            credentials.email,
            credentials.password
          );

          if (!user) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (error) {
          console.error("Login error:", error);
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }: any) {
      // Handle Google sign-in and database check
      if (account && account.provider === "google" && profile) {
        try {
          const existingUser = await findUserByEmail(profile.email);

          if (existingUser) {
            user.id = existingUser.id;
            user.role = existingUser.role;
            return true;
          } else {
            const newUser = await createUser({
              email: profile.email,
              name: profile.name,
              role: "user",
            });

            user.id = newUser.id;
            user.role = newUser.role;
            return true;
          }
        } catch (error) {
          console.error("Error during Google sign-in:", error);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },

    // async redirect() {
    //   return "/";
    // },
  },
};

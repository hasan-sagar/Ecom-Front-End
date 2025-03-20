"use server";

import prisma from "./prisma";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export const userLogin = async (email: string, password: string) => {
  try {
    const checkUser = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!checkUser) {
      return null;
    }
    return {
      ...checkUser,
      id: checkUser.id.toString(),
    } as User;
  } catch (error) {
    throw new Error("Wrong Credentials");
  }
};

export const adminLogin = async (email: string, password: string) => {
  try {
    //Check is user exists
    //Check if user is admin
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    const checkRole = user?.role === "admin";
    if (!user || !checkRole) {
      return null;
    } else {
      return {
        ...user,
        id: user.id.toString(),
      } as User;
    }
  } catch (error) {
    throw new Error("Wrong Credentials");
  }
};

// Find a user by email for google login
export async function findUserByEmail(email: string) {
  if (!email) return null;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Error finding user by email:", error);
    return null;
  }
}

// Create a new user in your database for google login
export async function createUser(userData: {
  email: string;
  name?: string;
  image?: string;
  role: string;
}) {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: userData.email,
        name: userData.name || "",
        role: userData.role,
      },
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

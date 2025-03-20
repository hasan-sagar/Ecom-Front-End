import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

export default function UserAccount() {
  const { data: session, status } = useSession();

  //get user name from session
  const userName = session?.user?.name;
  //get autehntication status
  const isAuthenticated = status === "authenticated";

  //handle logout logic
  const handleLogout = () => {
    if (isAuthenticated) {
      signOut({
        redirect: true,
        callbackUrl: "/",
      });
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2.5">
        {isAuthenticated && session.user?.image ? (
          <Image
            src={session?.user?.image || "/images/user.png"}
            width={40}
            height={40}
            alt={userName || "User"}
            className="rounded-full"
            priority
          />
        ) : (
          <LuUser size={25} className="text-primary" />
        )}

        <div className="group">
          <span className="block font-medium text-xs text-textdark uppercase">
            {userName || "Account"}
          </span>
          <Link href={isAuthenticated ? "#" : "/login"}>
            <p
              onClick={handleLogout}
              className="font-medium mt-1 text-[14px]  text-textdark2"
            >
              {isAuthenticated ? "Sign Out" : "Sign in"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

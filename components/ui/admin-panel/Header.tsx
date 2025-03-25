import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";

export default function Header() {
  const { data: session } = useSession();
  const adminName = session?.user?.name;
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4 ml-auto">
        <Image
          width={30}
          height={30}
          src="/avatar.jpg"
          alt="Profile"
          className="rounded-full"
        />
        <span className="text-secondary font-medium">{adminName}</span>
        <span
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: "/admin/login",
            })
          }
          className="text-gray-600"
        >
          <TbLogout className="text-red-600 cursor-pointer" size={25} />
        </span>
      </div>
    </header>
  );
}

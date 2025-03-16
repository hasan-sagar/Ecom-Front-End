import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="hidden md:block">Welcome Admin</h1>
      <div className="flex items-center space-x-4 ml-auto">
        <span className="text-gray-600">John Doe</span>
        <span onClick={() => signOut()} className="text-gray-600">
          LogOut
        </span>
        <Image
          width={30}
          height={30}
          src="/avatar.jpg"
          alt="Profile"
          className="rounded-full"
        />
      </div>
    </header>
  );
}

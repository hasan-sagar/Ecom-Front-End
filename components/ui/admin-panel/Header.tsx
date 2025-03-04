import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1>Welcome Admin</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">John Doe</span>
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

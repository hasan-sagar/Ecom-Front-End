"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavbarMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      {openMenu ? (
        <AiOutlineClose size={25} onClick={() => setOpenMenu(false)} />
      ) : (
        <AiOutlineMenu size={25} onClick={() => setOpenMenu(true)} />
      )}

      {/* Responsive menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-3xl"
          onClick={() => setOpenMenu(false)}
        >
          <AiOutlineClose />
        </button>

        {/* Navigation Links */}
        <ul
          onClick={() => setOpenMenu(false)}
          className="flex flex-col items-center gap-6 text-xl text-dark"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#aboutSection">About Me</Link>
          </li>
          <li>
            <Link href="#skillSetion">Skills</Link>
          </li>
          <li>
            <Link href="#projectSection">Projects</Link>
          </li>
          <li>
            <Link href="#contactSection">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarMenu;

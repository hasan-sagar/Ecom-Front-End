"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavbarMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      {openMenu ? (
        <AiOutlineClose size={30} onClick={() => setOpenMenu(false)} />
      ) : (
        <AiOutlineMenu size={30} onClick={() => setOpenMenu(true)} />
      )}

      {/* responsive menu click */}
      <div
        className={`fixed top-20 inset-0 bg-backdrop bg-opacity-90 flex flex-col items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul
          onClick={() => setOpenMenu(!openMenu)}
          className="flex flex-col justify-between items-center gap-8 font-medium text-2xl text-dark"
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

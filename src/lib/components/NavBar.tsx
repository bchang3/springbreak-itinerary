"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = (state: boolean) => {
    setMenuOpen(state);
  };
  return (
    <div>
      <div className="md:flex hidden flex-row font-cinzel sticky z-50 select-none w-full px-4 justify-between font-semibold border-b-[0.5px] border-gray-400">
        <Link href="/" className="text-2xl py-4">
          Spring Break 2026
        </Link>
        <nav className="flex flex-row min-w-fit items-center justify-between">
          <NavLink href="/map">Map</NavLink>
          <NavLink href="/food">Food</NavLink>
          <NavLink href="/night-life">Night Life</NavLink>
          <NavLink href="/nature">Nature</NavLink>
          <NavLink href="/sightseeing">Sight-Seeing</NavLink>
          <NavLink href="/activities">Activities</NavLink>
        </nav>
      </div>
      <div className="flex md:hidden h-12">
        <div className="flex flex-row gap-2 items-center py-4 px-0 justify-between">
          <div className="flex flex-row gap-2 items-center">
            <button
              className="w-fit p-4 cursor-pointer "
              onClick={() => toggleMenu(true)}
            >
              <svg
                viewBox="0 0 18 13"
                fill="none"
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.5249H18V10.5249H0V12.5249ZM0 7.5249H18V5.5249H0V7.5249ZM0 0.524902V2.5249H18V0.524902H0Z"
                  fill="black"
                />
              </svg>
            </button>
            <Link href="/" className="text-2xl py-4 font-cinzel">
              Spring Break 2026
            </Link>
          </div>
        </div>
        <Drawer anchor="left" open={menuOpen} onClose={() => toggleMenu(false)}>
          <nav className="flex flex-col items-center justify-between w-50">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/map">Map</NavLink>
            <NavLink href="/food">Food</NavLink>
            <NavLink href="/night-life">Night Life</NavLink>
            <NavLink href="/nature">Nature</NavLink>
            <NavLink href="/sightseeing">Sightseeing</NavLink>
            <NavLink href="/activities">Activities</NavLink>
          </nav>
        </Drawer>
      </div>
    </div>
  );
}

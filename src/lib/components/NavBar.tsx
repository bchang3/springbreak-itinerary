import Link from "next/link";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <div className="flex flex-row font-cinzel sticky z-50 select-none w-full px-4 justify-between font-semibold border-b-[0.5px] border-gray-400">
      <Link href="/" className="text-2xl py-4">
        Spring Break 2026
      </Link>
      <nav className="flex flex-row w-1/3 items-center justify-between">
        <NavLink href="/map">Map</NavLink>
        <NavLink href="/">Food</NavLink>
        <NavLink href="/">Night Life</NavLink>
        <NavLink href="/">Nature</NavLink>
        <NavLink href="/">Activities</NavLink>
      </nav>
    </div>
  );
}

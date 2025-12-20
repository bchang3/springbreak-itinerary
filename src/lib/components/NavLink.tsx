import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}
export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      className="flex flex-row items-center justify-center hover:bg-gray-50 w-full h-full transition-all"
      href={href}
    >
      <div className="hover:scale-103">{children}</div>
    </Link>
  );
}

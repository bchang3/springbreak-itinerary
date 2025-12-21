"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "../utils/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        "flex flex-row items-center justify-center min-w-32 p-2 w-full h-full transition-all hover:bg-gray-50",
        isActive && "bg-gray-200 hover:bg-gray-200",
      )}
      href={href}
    >
      <div className="hover:scale-103">{children}</div>
    </Link>
  );
}

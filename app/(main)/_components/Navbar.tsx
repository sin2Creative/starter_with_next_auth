"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "./UserButton";

export const MainNavbar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-secondary flex fixed top-0  justify-between items-center p-3 w-full shadow-sm z-10">
      <div className="flex gap-x-2">
        <Link
          href="/settings"
          className={
            pathName === "/settings"
              ? "text-blue-400"
              : "text-black hover:underline"
          }
        >
          Settings
        </Link>
        <Link
          href="/invoice"
          className={
            pathName === "/invoice"
              ? "text-blue-400"
              : "text-black hover:underline"
          }
        >
          Invoice
        </Link>
        <Link
          href="/dashboard"
          className={
            pathName === "/dashboard"
              ? "text-blue-400"
              : "text-black hover:underline"
          }
        >
          Dashboard
        </Link>
      </div>
      <UserButton />
    </nav>
  );
};

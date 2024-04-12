"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "./UserButton";

export const MainNavbar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-secondary flex fixed top-0  justify-between items-center p-3 w-full shadow-sm">
      <div className="flex gap-x-2">
        <Link
          href="/settings"
          className={
            pathName === "/settings"
              ? "text-teal-800"
              : "text-black hover:underline"
          }
        >
          Settings
        </Link>
      </div>
      <UserButton />
    </nav>
  );
};

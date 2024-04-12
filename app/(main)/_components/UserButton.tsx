"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import React from "react";
import { FaUser } from "react-icons/fa";
import { LogoutButton } from "./LogoutButton";
import { LogOutIcon, Settings } from "lucide-react";
import Link from "next/link";

export const UserButton = () => {
  const user = useCurrentUser();
  return (
    <div className="flex items-center justify-center">
      <span className="mr-3 text-center font-medium text-sky-500">
        {user?.name}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="w-8 h-8">
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="bg-sky-500">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <LogoutButton>
            <DropdownMenuItem>
              <LogOutIcon className="h-4 w-4 mr-2" />
              Log Out
            </DropdownMenuItem>
          </LogoutButton>

          <DropdownMenuItem>
            <Settings className="h-4 w-4 mr-2" />
            <Link href="/settings" className="">
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

import { SignOut } from "@/actions/signout";

import { ReactNode } from "react";

interface LogoutButtonProps {
  children?: ReactNode;
}
export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    SignOut();
  };
  return (
    <span onClick={() => onClick()} className="cursor-pointer">
      {children}
    </span>
  );
};

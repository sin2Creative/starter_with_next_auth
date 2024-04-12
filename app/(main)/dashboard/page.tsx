"use client";
import { SignOut } from "@/actions/signout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const DashboardPage = () => {
  const user = useCurrentUser();
  const onclick = () => {
    SignOut();
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      DashBoard
    </div>
  );
};

export default DashboardPage;

"use client";
import { SignOut } from "@/actions/signout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Dashboard } from "../_components/Dashboard";

const DashboardPage = () => {
  const user = useCurrentUser();
  const onclick = () => {
    SignOut();
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Dashboard />
    </div>
  );
};

export default DashboardPage;

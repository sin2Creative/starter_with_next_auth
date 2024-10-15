import React from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { MainNavbar } from "./_components/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="h-full w-full">
        <MainNavbar />
        <div className="mt-14">{children}</div>
      </div>
    </SessionProvider>
  );
}

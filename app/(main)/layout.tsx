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
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-400">
        <MainNavbar />
        {children}
      </div>
    </SessionProvider>
  );
}

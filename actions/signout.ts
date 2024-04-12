"use server";

import { signOut } from "@/auth";
import React from "react";

export const SignOut = async () => {
  await signOut();
};

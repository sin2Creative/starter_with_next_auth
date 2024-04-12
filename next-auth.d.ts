import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  isOauth: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

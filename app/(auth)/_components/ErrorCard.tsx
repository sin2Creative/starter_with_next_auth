import React from "react";
import { CardWrapper } from "./CardWrapper";
import { TriangleAlertIcon } from "lucide-react";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong."
      backButtonHref="/sign-in"
      backButtonLabel="Back to sign in"
    >
      <div className="w-full items-center flex justify-center">
        <TriangleAlertIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

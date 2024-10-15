import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InvoiceSchema } from "@/schemas";
import React from "react";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

interface CustomInputWithoutLabelProps {
  control: Control<z.infer<typeof InvoiceSchema>>;
  name: FieldPath<z.infer<typeof InvoiceSchema>>;
  placeholder: string;
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "datetime-local"
    | "month"
    | "week"
    | "time";
}

export const CustomInputWithoutLabel = ({
  control,
  name,
  placeholder,
  type,
}: CustomInputWithoutLabelProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                className="text-[16px] leading-[24px] placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500"
              />
            </FormControl>
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

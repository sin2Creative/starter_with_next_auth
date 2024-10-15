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

interface CustomInputProps {
  control: Control<z.infer<typeof InvoiceSchema>>;
  name: FieldPath<z.infer<typeof InvoiceSchema>>;
  label: string;
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

export const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="w-full max-w-[280px] font-medium text-gray-700">
            {label}
          </FormLabel>
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

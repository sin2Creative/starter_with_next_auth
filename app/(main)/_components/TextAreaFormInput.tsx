import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { InvoiceSchema } from "@/schemas";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

interface TextAreaFormInputProps {
  name: FieldPath<z.infer<typeof InvoiceSchema>>;
  label: string;
  placeholder: string;
  control: Control<z.infer<typeof InvoiceSchema>>;
}

export const TextAreaFormInput = ({
  name,
  control,
  label,
  placeholder,
}: TextAreaFormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

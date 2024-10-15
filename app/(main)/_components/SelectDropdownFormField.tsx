import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { z } from "zod";
import { InvoiceSchema } from "@/schemas";

interface SelectDropdownFormFieldProps {
  control: Control<z.infer<typeof InvoiceSchema>>;
  types: string[];
}

export const SelectDropdownFormField = ({
  control,
  types,
}: SelectDropdownFormFieldProps) => {
  return (
    <FormField
      control={control}
      name="receiptType"
      render={({ field }) => (
        <div className="">
          <FormItem>
            <FormLabel>Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={types[0]} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        </div>
      )}
    />
  );
};

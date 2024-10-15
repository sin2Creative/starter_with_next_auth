import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { CustomInputWithoutLabel } from "./CustomInputWithoutLabel";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Control, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { InvoiceSchema } from "@/schemas";

interface ProductDetailsInputProps {
  control: Control<z.infer<typeof InvoiceSchema>>;
}

export const ProductDetailsInput = ({ control }: ProductDetailsInputProps) => {
  const { fields, append, remove } = useFieldArray({
    name: "products",
    control: control,
  });
  return (
    <>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Product/Service</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field, index) => (
            <TableRow key={field.id}>
              <TableCell className="w-2/3">
                <CustomInputWithoutLabel
                  control={control}
                  type="text"
                  name={`products.${index}.name`}
                  placeholder="Product/Service"
                />
              </TableCell>
              <TableCell className="w-1/6">
                <CustomInputWithoutLabel
                  control={control}
                  type="number"
                  name={`products.${index}.price`}
                  placeholder="Price"
                />
              </TableCell>
              <TableCell className="w-1/6">
                <CustomInputWithoutLabel
                  control={control}
                  type="number"
                  name={`products.${index}.quantity`}
                  placeholder="Qty"
                />
              </TableCell>
              <TableCell>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => remove(index)}
                >
                  <Trash2 size={"20"} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        className="mt-2 w-full justify-center items-center"
        type="button"
        onClick={() => {
          append({ name: "New service", price: 20, quantity: 1 });
        }}
      >
        Add Product
      </Button>
    </>
  );
};

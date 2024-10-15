import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InvoiceSchema } from "@/schemas";
import { z } from "zod";

export type InvoiceFields = z.infer<typeof InvoiceSchema>;

interface InvoicePreviewProps {
  watchedFields: InvoiceFields;
  clientDate: string;
  subTotal: () => number;
  addDiscount: () => number;
  addTax: () => number;
  total: () => number;
}

export const InvoicePreview = ({
  watchedFields,
  clientDate,
  subTotal,
  addDiscount,
  addTax,
  total,
}: InvoicePreviewProps) => {
  return (
    <div className="relative w-full h-full max-h-[100vh] max-w-[calc(100vh/1.414)] bg-white border-2 border-gray-400 overflow-hidden flex flex-col p-4">
      <div className="p-4 border-b border-gray-400">
        <div className="text-4xl mb-3">{watchedFields.receiptType}</div>
        <div className="text-xl text-black font-semibold">
          {watchedFields.name}
        </div>
        <div className="text-sm text-gray-600">{watchedFields.address}</div>
      </div>

      <div className="flex justify-between text-gray-500 px-4">
        <h2>{clientDate}</h2>
        <h2>#{watchedFields.number}</h2>
      </div>

      <div className="flex gap-3 p-4">
        <h3 className="font-semibold">Bill to:</h3>
        <div className="text-gray-500">
          <p>{watchedFields.customerName}</p>
          <p>{watchedFields.customerAddress}</p>
        </div>
      </div>

      <div className="flex-grow overflow-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Product/Service</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {watchedFields.products?.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="w-2/3">{product.name}</TableCell>
                <TableCell className="w-1/6">{product.quantity}</TableCell>
                <TableCell className="w-1/6">{product.price}</TableCell>
              </TableRow>
            ))}
            <TableRow className="border-none font-semibold">
              <TableCell className="w-2/3"></TableCell>
              <TableCell className="w-1/6 border-b">Subtotal:</TableCell>
              <TableCell className="w-1/6 border-b">{subTotal()}</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell className="w-2/3"></TableCell>
              <TableCell className="w-1/6 border-b">Discount:</TableCell>
              <TableCell className="w-1/6 border-b">{addDiscount()}</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell className="w-2/3"></TableCell>
              <TableCell className="w-1/6 border-b">Tax:</TableCell>
              <TableCell className="w-1/6 border-b">{addTax()}</TableCell>
            </TableRow>
            <TableRow className="border-none font-bold">
              <TableCell className="w-2/3"></TableCell>
              <TableCell className="w-1/6 border-b">Total:</TableCell>
              <TableCell className="w-1/6 border-b">{total()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mb-0 justify-center flex">
        <p>{watchedFields.note}</p>
      </div>
    </div>
  );
};

"use client";

import { InvoiceSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { CustomInput } from "./CustomInput";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { InvoicePreview } from "./InvoicePreview";
import { ProductDetailsInput } from "./ProductDetailsInput";
import { DatePickerField } from "./DatePickerField";
import { SelectDropdownFormField } from "./SelectDropdownFormField";
import { TextAreaFormInput } from "./TextAreaFormInput";

export const InvoiceForm = () => {
  const form = useForm<z.infer<typeof InvoiceSchema>>({
    resolver: zodResolver(InvoiceSchema),
    defaultValues: {
      name: "David",
      address: "",
      customerName: "Miller",
      customerAddress: "",
      date: new Date(),
      number: 1,
      receiptType: "invoice",
      discount: 0,
      tax: 0,
      products: [
        {
          name: "Service #1",
          price: 20,
          quantity: 1,
        },
      ],
    },
  });

  const types = ["Invoice", "Estimate", "Quote"];

  const { fields, append, remove } = useFieldArray({
    name: "products",
    control: form.control,
  });

  // Watch the entire form data
  const watchedFields = form.watch();

  const [clientDate, setClientDate] = useState("");

  useEffect(() => {
    setClientDate(format(watchedFields.date, "PPP"));
  }, [watchedFields.date]);

  const subTotal = () => {
    return watchedFields.products.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0
    );
  };

  const addDiscount = () => {
    const discount = watchedFields.discount / 100;
    return subTotal() * discount;
  };

  const addTax = () => {
    const tax = watchedFields.tax / 100;
    return (subTotal() - addDiscount()) * tax;
  };

  const total = () => {
    return subTotal() - addDiscount() + addTax();
  };

  return (
    <div className="flex w-full h-screen p-5 gap-5">
      <div className="flex-1 overflow-y-auto p-4">
        <Form {...form}>
          <form className="space-y-8">
            <div className="flex gap-2 w-full items-start">
              <div className="flex-1">
                <DatePickerField control={form.control} />
              </div>
              <div className="flex-1">
                <CustomInput
                  control={form.control}
                  type="number"
                  name="number"
                  label="Invoice #"
                  placeholder="Invoice #"
                />
              </div>
              <div className="flex-1">
                <SelectDropdownFormField control={form.control} types={types} />
              </div>
            </div>

            <CustomInput
              control={form.control}
              type="text"
              name="name"
              label="Name"
              placeholder="Your name or Company name Here"
            />
            <TextAreaFormInput
              control={form.control}
              name="address"
              label="Address"
              placeholder="Leave your Address here"
            />
            <CustomInput
              control={form.control}
              type="text"
              name="customerName"
              label="Bill to: Name"
              placeholder="Bill to: Enter name here"
            />
            <TextAreaFormInput
              control={form.control}
              name="customerAddress"
              label="Bill to: Address"
              placeholder="Bill to: Enter customer Address here"
            />

            <ProductDetailsInput control={form.control} />
            <div className="flex gap-2">
              <CustomInput
                control={form.control}
                type="number"
                name="discount"
                label="Discount (%)"
                placeholder="10"
              />
              <CustomInput
                control={form.control}
                type="number"
                name="tax"
                label="Tax (%)"
                placeholder="10"
              />
            </div>
            <TextAreaFormInput
              control={form.control}
              name="note"
              label="Note"
              placeholder="Levave your additional notes here"
            />
          </form>
        </Form>
      </div>
      <div className="relative w-full h-full max-h-[100vh] max-w-[calc(100vh/1.414)] bg-white border-1 border-gray-400 overflow-hidden">
        <InvoicePreview
          watchedFields={watchedFields}
          clientDate={clientDate}
          subTotal={subTotal}
          addDiscount={addDiscount}
          addTax={addTax}
          total={total}
        />
      </div>
    </div>
  );
};

"use client";
import Title from "../title";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput } from "../form/form-input";
import { FormSelect } from "../form/form-select";
import { FormModal } from "../form/form-modal";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { MouseEvent } from "react";

const locations = [
  {
    name: "dhaka - 80TK",
    value: "8000",
  },
  {
    name: "outside dhaka - 100TK",
    value: "10000",
  },
];

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  phone: z.string().min(9, {
    message: "Phone number must be at least 9 characters.",
  }),
  city: z.string({
    required_error: "Please select city.",
  }),
  paymentMethod: z.enum(["BKASH", "COD"], {
    required_error: "You need to select a payment method.",
  }),
});

export function CheckoutForm() {
  const [isLoading] = useState(false);
  const [discount] = useState(null);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const total = 3000;

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const charge = form.watch("city");
    if (charge) {
      setDeliveryCharge(charge);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("city")]);

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  const handleCoupon = async (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <div>
      <FormModal
        formLabel="place order"
        onSubmit={handleSubmit}
        form={form}
        loading={isLoading}
        disabled={isLoading}
      >
        <div>
          <Title title="shipping information" />
          <div className="flex flex-col gap-4 mt-4">
            <FormInput
              form={form}
              label="full name / পুরো নাম"
              placeholder="John Doe"
              name="name"
              required
              description=""
            />
            <FormInput
              form={form}
              label="address / ঠিকানা"
              placeholder="21/3, Mariana Drive, AC"
              name="address"
              required
              description=""
            />

            <div className="grid md:grid-cols-2 gap-2 md:gap-4">
              <FormSelect
                form={form}
                name="city"
                placeholder="select city"
                options={locations}
                label="city / শহর"
                required
              />
              <FormInput
                form={form}
                placeholder="01..."
                name="phone"
                label="phone number / মোবাইল নম্বর"
                required
                description=""
              />
            </div>
          </div>
        </div>

        {/* Coupon code */}
        <div className="grid gap-4 border border-shade border-dashed p-4 rounded-md">
          <div className="space-y-2">
            <Label className="capitalize">coupon code / কুপন</Label>
            <Input className="uppercase" placeholder="example2024" />
          </div>

          <Button
            icon="percent"
            onClick={handleCoupon}
            loading={isLoading}
            disabled={isLoading}
          >
            apply coupon
          </Button>
        </div>

        {/* Payment method */}
        <div className="mt-4">
          <Title title="payment method" />
          <div className="grid gap-2 md:gap-4 mt-4">
            {/* <FormRadio form={form} /> */}
          </div>
        </div>

        {/* Order summary */}
        <div className="p-2 bg-accent">
          <table className="w-full rounded-md">
            <tbody>
              <tr>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">Sub Total</td>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  ৳{(3000 / 100).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  Delivery Charge
                </td>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  ৳{(deliveryCharge / 100).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">Discount</td>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  ৳{(((3000 / 100) * 10) / 100).toFixed(2)}{" "}
                  {discount && (
                    <span className="text-primary font-bold">
                      ({discount}%)
                    </span>
                  )}
                </td>
              </tr>
              <tr className="text-3xl">
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">Order total</td>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  ৳
                  {discount
                    ? (
                        (Number(total) -
                          Number(total * discount) / 100 +
                          Number(deliveryCharge)) /
                        100
                      ).toFixed(2)
                    : ((Number(total) + Number(deliveryCharge)) / 100).toFixed(
                        2
                      )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FormModal>
    </div>
  );
}

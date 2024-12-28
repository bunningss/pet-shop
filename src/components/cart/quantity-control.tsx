"use client";
import { Button } from "../ui/button";

interface QuantityControlProps {
  id: string;
  title: string;
  quantity: number;
}

export function QuantityControl({ id, title, quantity }: QuantityControlProps) {
  return (
    <div className="w-fit rounded-md flex items-center gap-4">
      <Button
        icon="plus"
        onClick={() => {
          alert(id + title);
        }}
      />
      <span className="font-bold text-base">{quantity}</span>
      <Button icon="minus" onClick={() => {}} />
    </div>
  );
}

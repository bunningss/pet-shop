"use client";
import { CartItem } from "./cart/cart-item";
import { Title } from "./title";

export function CheckoutSummary() {
  return (
    <section>
      <Title title="order summary" />
      <div className="mt-4 max-h-[800px] overflow-auto grid gap-2 mb-2 md:sticky">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </section>
  );
}

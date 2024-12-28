"use client";
import { Button } from "../ui/button";
import { CartItem } from "../cart/cart-item";
import { useRouter } from "next/navigation";
import { useCartSidebar } from "@/hooks/controllers";
import { SidebarModal } from "./sidebar-modal";

export function CartSidebar() {
  const { isOpen, onClose } = useCartSidebar();
  const router = useRouter();

  const footer = (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-lg">Total:</span>
        <span className="text-lg font-bold">{(3000 / 100).toFixed(2)} TK</span>
      </div>
      <Button
        className="w-full"
        icon="move-right"
        disabled={false}
        onClick={() => {
          router.push("/checkout");
          onClose();
        }}
      >
        proceed to Checkout
      </Button>
    </div>
  );

  return (
    <SidebarModal
      isOpen={isOpen}
      onClose={onClose}
      title="Your Shopping Cart"
      subtitle="Review your selected items before checkout."
      footer={footer}
    >
      <div className="grid gap-2">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </SidebarModal>
  );
}

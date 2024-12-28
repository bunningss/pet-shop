"use client";
import { useCartSidebar } from "@/hooks/controllers";
import { Icon } from "../icon";

export function Cart() {
  const { onOpen } = useCartSidebar();

  return (
    <div
      onClick={onOpen}
      role="button"
      className="hidden md:block fixed top-0 bottom-0 right-0 m-auto h-fit z-10 bg-card border rounded-md cursor-pointer overflow-hidden shadow-active"
    >
      <div className="px-2 py-1 flex flex-col items-center justify-center gap-1">
        <Icon name="shopping-basket" className="text-primary" size={32} />
        <span className="text-xs uppercase font-bold">6 items</span>
      </div>
      <div className="bg-primary px-2 py-1">
        <span className="text-xs uppercase text-accent font-bold">
          {(3000 / 100).toFixed(2)} TK
        </span>
      </div>
    </div>
  );
}

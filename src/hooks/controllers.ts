import { CartSidebarStoreProps } from "@/lib/types";
import { create } from "zustand";

export const useCartSidebar = create<CartSidebarStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

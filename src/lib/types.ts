import dynamicIconImports from "lucide-react/dynamicIconImports";
import React from "react";

export interface UserDataProps {
  error: boolean;
  payload: {
    name: string;
    role: string;
    email: string;
  };
}

export interface PriceProps {
  discountedPrice: number;
  price: number;
  className?: string;
}

export interface ProductViewProps {
  title: string;
  children: React.ReactNode;
  link: string;
}

export interface SliderItemProps {
  image: string;
  subtitle: string;
  text: string;
  buttonLabel: string;
  buttonIcon: keyof typeof dynamicIconImports;
}

export interface CartSidebarStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

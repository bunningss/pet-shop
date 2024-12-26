import React from "react";

export interface UserDataProps {
  error: boolean;
  payload: {
    name: string;
    role: string;
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

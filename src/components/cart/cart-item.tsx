"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { QuantityControl } from "./quantity-control";

export function CartItem() {
  return (
    <Card className="shadow-transparent hover:shadow-transparent">
      <CardContent className="p-1 grid grid-cols-[1.5fr_3fr] gap-2">
        <div className="relative">
          <Image src="" alt="" className="object-contain" fill sizes="100px" />
        </div>
        <div className="relative flex flex-col gap-2">
          <h3 className="capitalize text-base font-bold line-clamp-1">
            Cat food
          </h3>
          <p className="capitalize text-base font-bold line-clamp-1">
            ৳{(3000 / 100).toFixed(2)} x 9
          </p>
          <QuantityControl id="" title="" quantity={4} />

          <Button
            onClick={() => {}}
            className="rounded-full absolute top-0 bottom-0 right-0 m-auto"
            icon="trash-2"
            variant="destructive"
            size="icon"
          >
            <span className="sr-only">remove item from cart</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

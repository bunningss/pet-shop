"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Price } from "../price";
import { Rating } from "../rating";

export const Product = () => {
  return (
    <Link href={`/product/product.slug}`} passHref prefetch={true}>
      <Card className="group cursor-pointer shadow-md border">
        <CardContent className="relative p-2">
          <div className="absolute top-2 left-0 flex items-center justify-between w-full px-2 z-[1]">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              icon="heart"
            >
              <span className="sr-only">add to wishlist</span>
            </Button>

            <Badge>Sale</Badge>
          </div>

          <figure className="relative h-[160px] md:h-[200px] w-full group-hover:scale-105 transition-transform overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1676193866128-03a926df76ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dog food"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 140px, 180px"
            />
          </figure>
        </CardContent>
        <CardHeader className="p-2">
          <CardTitle className="text-base line-clamp-2">Dog food</CardTitle>
        </CardHeader>
        <div className="p-2">
          <Rating />
          <span className="text-sm capitalize">
            <span>by </span>
            <span role="button" className="text-primary font-bold underline">
              foreign
            </span>
          </span>
        </div>

        <CardFooter className="flex items-center justify-between p-2">
          <Price
            discountedPrice={120}
            price={200}
            className="text-primary flex-col md:flex-row items-start md:items-center"
          />
          <Button icon="shopping-bag">
            <span>add</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

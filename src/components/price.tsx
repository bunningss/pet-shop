import { cn } from "@/lib/utils";

interface PriceProps {
  discountedPrice: number;
  price: number;
  className?: string;
}

export function Price({ discountedPrice, price, className }: PriceProps) {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      {discountedPrice < price && (
        <span className="font-bold text-sm md:text-base text-inherit">
          ৳{(Number(discountedPrice) / 100).toFixed(2)}
        </span>
      )}
      <span
        className={`text-xs md:text-sm text-muted-foreground font-bold line-through ${
          (discountedPrice >= price || !discountedPrice) &&
          "!text-sm !text-inherit !no-underline"
        }`}
      >
        ৳{(Number(price) / 100).toFixed(2)}
      </span>
    </div>
  );
}

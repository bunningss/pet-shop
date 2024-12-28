import Link from "next/link";
import Title from "./title";
import { Product } from "./cards/product";

export function ProductView() {
  return (
    <section>
      <div className="flex justify-between mb-4 border-b">
        <Title title="featured products" />
        <Link
          href=""
          className="underline decoration-wavy decoration-primary capitalize text-primary"
        >
          view all
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}

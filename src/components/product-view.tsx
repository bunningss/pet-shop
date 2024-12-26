import { Product } from "./cards/product";

export function ProductView() {
  return (
    <section>
      <div>{/* Title & View all indicator */}</div>
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
      </div>
    </section>
  );
}

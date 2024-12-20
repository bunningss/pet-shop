import { Product } from "./cards/product";
import { Section } from "./section";

export async function Featured() {
  return (
    <Section title="featured items">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4">
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
    </Section>
  );
}

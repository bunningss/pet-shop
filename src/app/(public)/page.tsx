import { ProductView } from "@/components/product-view";
import { Slider } from "@/components/slider";

export default function Page() {
  return (
    <div className="space-y-4">
      <Slider />
      <ProductView />
    </div>
  );
}

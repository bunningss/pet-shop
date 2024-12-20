import { Featured } from "@/components/featured";
import { Hero } from "@/components/hero";
import { PopularCategories } from "@/components/popular-categories";

export default function Page() {
  return (
    <div className="space-y-6">
      <Hero />
      <Featured />
      <PopularCategories />
    </div>
  );
}

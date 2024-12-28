import { CheckoutSummary } from "@/components/checkout-summary";
import { CheckoutForm } from "@/components/forms/checkout-form";

export default function Page() {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:gap-8 lg:px-20 xl:px-32">
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  );
}

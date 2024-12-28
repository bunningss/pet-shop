import { Cart } from "@/components/cart/cart";
import { Container } from "@/components/container";
import { Navbar } from "@/components/navbars/navbar";
import { CartSidebar } from "@/components/sidebar/cart-sidebar";
import { UserDataProps } from "@/lib/types";

const userData: UserDataProps = {
  error: false,
  payload: {
    name: "my name",
    role: "user",
  },
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar userData={userData} />
      <Cart />
      <CartSidebar />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}

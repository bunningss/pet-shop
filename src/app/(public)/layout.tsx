import { Container } from "@/components/container";
import { Navbar } from "@/components/navbars/navbar";
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
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}

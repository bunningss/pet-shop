import { Navbar } from "@/components/navbars/navbar";

const userData = {
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
      <main>{children}</main>
    </>
  );
}

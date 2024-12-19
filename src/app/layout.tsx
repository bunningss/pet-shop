import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { font } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Shop",
  description: "Best pet shop in the country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

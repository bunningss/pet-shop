import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { font } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

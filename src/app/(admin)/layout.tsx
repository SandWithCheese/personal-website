import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";

import BodyLayout from "./body-layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <BodyLayout>{children}</BodyLayout>
      </ThemeProvider>
    </html>
  );
}

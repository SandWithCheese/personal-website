import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import BodyLayout from "./body-layout";

const inter = Inter({ subsets: ["latin"] });

// Shared viewport config
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#271971",
};

// Shared metadata config
export const metadata: Metadata = {
  description:
    "Hi! I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
  generator: "Next.js",
  applicationName: "Sandwicheese",
  keywords: [
    "Ahmad Naufal Ramadan",
    "Sandwicheese",
    "Ahmad",
    "Naufal",
    "Ramadan",
    "Personal Website",
    "Teknik Informatika",
    "Institut Teknologi Bandung",
    "ITB",
  ],
  verification: {
    google: "fv_CNbFwrtMZ1V0Z2RV4p3t48ULjscLJ97A_P08DT8E",
  },
  category: "website",
  metadataBase: new URL("https://sandwicheese.vercel.app/"),
  manifest: "https://sandwicheese.vercel.app/manifest.webmanifest",
};

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

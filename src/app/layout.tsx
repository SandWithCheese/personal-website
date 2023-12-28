import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sandwicheese",
  description: "Sandwicheese's personal website",
  verification: {
    google: "fv_CNbFwrtMZ1V0Z2RV4p3t48ULjscLJ97A_P08DT8E",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body className={inter.className}>
          <div className="flex flex-col gap-20 pt-8">
            <Navbar />
            <main className="wrapper">{children}</main>
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body className={inter.className}>
          <Navbar />
          <main className="wrapper">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}

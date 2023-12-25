import Link from "next/link"
import ThemeToggler from "./ThemeToggler"
import { Bars3Icon } from "@heroicons/react/24/outline"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
  return (
    <header className="wrapper">
      <nav className="flex justify-between items-center">
        <h3>
          <Link href="/">Sandwicheese</Link>
        </h3>
        <div className="flex gap-8 sm:gap-12 items-center">
          <Link href="#" className="hover:underline hidden lg:block">
            Get The Flag!
          </Link>
          <Link href="#" className="hover:underline hidden lg:block">
            Projects
          </Link>
          <Link href="#" className="hover:underline hidden lg:block">
            Archives
          </Link>
          <ThemeToggler />

          <Sheet className="lg:hidden">
            <SheetTrigger className="lg:hidden">
              <Bars3Icon className="w-6 h-6 lg:hidden" />
            </SheetTrigger>
            <SheetContent>
              <h2 className="mb-4">Explore</h2>
              <div className="flex flex-col gap-4 text-xl">
                <Link href="#">Get The Flag!</Link>
                <Link href="#">Projects</Link>
                <Link href="#">Archives</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

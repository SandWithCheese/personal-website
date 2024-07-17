import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Navbar() {
  return (
    <header className="wrapper">
      <nav className="flex items-center justify-between py-8">
        <h3>
          <Link href="/">Sandwicheese</Link>
        </h3>
        <div className="flex items-center gap-8 sm:gap-12">
          <Link
            href="https://sandwicheese-terminal-website.vercel.app/"
            className="hidden hover:underline lg:block"
            target="_blank"
          >
            Get The Flag!
          </Link>
          <Link href="/projects" className="hidden hover:underline lg:block">
            Projects
          </Link>
          <Link href="/archives" className="hidden hover:underline lg:block">
            Archives
          </Link>
          <ThemeToggler />

          <Sheet>
            <SheetTrigger aria-label="Bars icon" className="lg:hidden">
              <Bars3Icon className="h-6 w-6 lg:hidden" />
            </SheetTrigger>
            <SheetContent>
              <h2 className="mb-4">Explore</h2>
              <div className="flex flex-col gap-4 text-xl">
                <Link
                  href="https://sandwicheese-terminal-website.vercel.app/"
                  target="_blank"
                >
                  Get The Flag!
                </Link>
                <Link href="/projects">Projects</Link>
                <Link href="/archives">Archives</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

"use client"

import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="w-6 h-6"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default ThemeToggler

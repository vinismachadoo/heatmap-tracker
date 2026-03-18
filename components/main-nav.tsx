"use client"

import ModeToggle from "@/components/mode-toggle"
import { Grip } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useHotkeys } from "react-hotkeys-hook"

const MainNav = () => {
  const { setTheme, resolvedTheme } = useTheme()
  useHotkeys("d", () => setTheme(resolvedTheme === "dark" ? "light" : "dark"))

  return (
    <nav className="flex h-full w-full items-center justify-between gap-x-2 border-b px-20 **:data-active:bg-muted">
      <div className="flex items-center gap-x-2">
        <Link href="/">
          <div className="hit-area-2 extend-touch-target mr-2 flex size-6 items-center justify-center rounded-sm bg-emerald-300 dark:bg-emerald-800">
            <Grip className="size-4" />
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-x-2">
        <ModeToggle shortcut="d" />
      </div>
    </nav>
  )
}

export default MainNav

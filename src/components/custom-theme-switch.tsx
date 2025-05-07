"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"
import { cn } from "@/lib/utils"

interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function CustomThemeSwitch({ className, ...props }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div 
      className={cn(
        "flex items-center justify-between w-full px-2 py-1", 
        className
      )}
      {...props}
    >
      <Sun className="size-4 text-sidebar-foreground/70" />
      
      <button
        onClick={() => {
          console.log("Button clicked, toggling theme from:", theme)
          toggleTheme()
        }}
        className={cn(
          "relative inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none",
          theme === "dark" ? "bg-primary" : "bg-input dark:bg-input/80"
        )}
        aria-pressed={theme === "dark"}
      >
        <span 
          className={cn(
            "pointer-events-none block size-4 rounded-full ring-0 transition-transform",
            theme === "dark" 
              ? "bg-background dark:bg-primary-foreground translate-x-[calc(100%-2px)]" 
              : "bg-background dark:bg-foreground translate-x-0"
          )}
        />
      </button>
      
      <Moon className="size-4 text-sidebar-foreground/70" />
    </div>
  )
}
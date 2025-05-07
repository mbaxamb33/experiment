"use client"

import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { useTheme } from "@/lib/theme-provider"
import * as React from "react"

interface ThemeSwitcherProps {
  className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme()
  const isDarkMode = theme === "dark"
  
  // Add a ref to the switch element
  const switchRef = React.useRef<HTMLButtonElement>(null)
  
  // Add an effect to log when the component renders
  React.useEffect(() => {
    console.log("ThemeSwitcher rendered, current theme:", theme)
    
    // Add a direct DOM event listener to the switch
    const switchElement = switchRef.current
    if (switchElement) {
      const clickHandler = () => {
        console.log("Switch clicked directly via DOM")
      }
      
      switchElement.addEventListener("click", clickHandler)
      
      return () => {
        switchElement.removeEventListener("click", clickHandler)
      }
    }
  }, [theme])

  const handleThemeToggle = () => {
    console.log("Switch onCheckedChange triggered, current theme:", theme)
    toggleTheme()
  }

  return (
    <div className={cn("flex items-center justify-between w-full px-2 py-1", className)}>
      <Sun className="size-4 text-sidebar-foreground/70" />
      <Switch 
        ref={switchRef}
        checked={isDarkMode}
        onCheckedChange={handleThemeToggle}
        className="data-[state=checked]:bg-sidebar-primary"
        onClick={() => console.log("Switch onClick triggered")}
      />
      <Moon className="size-4 text-sidebar-foreground/70" />
    </div>
  )
}
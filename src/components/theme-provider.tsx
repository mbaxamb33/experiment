"use client"

import React, { createContext, useState, useEffect, useContext } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "pantopia-theme",
}: {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  
  // Initialize theme from localStorage on component mount
  useEffect(() => {
    try {
      const savedTheme = localStorage?.getItem(storageKey) as Theme
      if (savedTheme) {
        setTheme(savedTheme)
      } else {
        // Check system preference
        const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        setTheme(systemPreference)
      }
    } catch (error) {
      console.error("Error reading theme from localStorage:", error)
    }
  }, [storageKey])

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement
    
    // First, remove both theme classes
    root.classList.remove("light", "dark")
    
    // Then add the current theme class
    root.classList.add(theme)
    
    // Try to save to localStorage
    try {
      localStorage.setItem(storageKey, theme)
    } catch (error) {
      console.error("Error saving theme to localStorage:", error)
    }
    
    console.log("Theme changed to:", theme) // Debug log
  }, [theme, storageKey])

  const toggleTheme = () => {
    console.log("Toggle theme called, current theme:", theme) // Debug log
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const value = {
    theme,
    setTheme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
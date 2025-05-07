import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Ensure the styles are imported in the component
import "../styles/fonts.css"

export function PantopiaLogo() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="dark:bg-black bg-black data-[state=open]:bg-black data-[state=open]:text-white"
        >
          <div className="flex items-center justify-center">
            <span className="pantopia-logo text-2xl font-medium text-white" style={{
              fontWeight: 500,
              lineHeight: "33.6px",
              cursor: "pointer",
            }}>
              Pantopia
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
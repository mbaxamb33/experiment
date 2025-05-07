"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { NavUser } from "@/components/nav-user"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

export function SidebarFooter({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="px-2 pt-0 pb-2">
        <ThemeSwitcher />
      </div>
      <NavUser user={user} />
    </div>
  )
}
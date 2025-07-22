import { useState } from "react"
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Calendar, 
  Activity, 
  FileText, 
  Settings, 
  DollarSign,
  Phone,
  Mail,
  PieChart,
  UserPlus,
  Building2,
  Clock,
  Zap
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/", icon: BarChart3 },
      { title: "Analytics", url: "/analytics", icon: PieChart },
    ]
  },
  {
    title: "Sales Management",
    items: [
      { title: "Customers", url: "/customers", icon: Users },
      { title: "Leads", url: "/leads", icon: UserPlus },
      { title: "Deals", url: "/deals", icon: DollarSign },
      { title: "Pipeline", url: "/pipeline", icon: TrendingUp },
      { title: "Opportunities", url: "/opportunities", icon: Target },
    ]
  },
  {
    title: "Activities",
    items: [
      { title: "Tasks", url: "/tasks", icon: Clock },
      { title: "Activities", url: "/activities", icon: Activity },
      { title: "Calendar", url: "/calendar", icon: Calendar },
      { title: "Calls", url: "/calls", icon: Phone },
      { title: "Emails", url: "/emails", icon: Mail },
    ]
  },
  {
    title: "Analytics & Reports",
    items: [
      { title: "Reports", url: "/reports", icon: FileText },
      { title: "Performance", url: "/performance", icon: Zap },
      { title: "Forecasting", url: "/forecasting", icon: TrendingUp },
    ]
  },
  {
    title: "Company",
    items: [
      { title: "Accounts", url: "/accounts", icon: Building2 },
      { title: "Settings", url: "/settings", icon: Settings },
    ]
  }
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="px-2 py-4">
        {/* Logo */}
        <div className="px-4 py-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-sidebar-foreground">Spark CRM</h1>
                <p className="text-xs text-sidebar-foreground/60">Pro Edition</p>
              </div>
            )}
          </div>
        </div>

        {menuItems.map((section) => (
          <SidebarGroup key={section.title} className="mb-4">
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        end
                        className={getNavCls}
                      >
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
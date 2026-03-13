"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, MessageSquare, ImageIcon, LogOut, ChevronLeft, Menu,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { logout } from "@/lib/actions/auth";

interface AdminSidebarProps {
  email?: string;
}

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/nachrichten", label: "Nachrichten", icon: MessageSquare },
  { href: "/admin/galerie", label: "Galerie", icon: ImageIcon },
];

/**
 * Admin sidebar navigation component
 */
export function AdminSidebar({ email }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleLogout() {
    await logout();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-surface shadow-md border border-border md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static z-40 h-screen bg-surface border-r border-border transition-all duration-300 flex flex-col",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <div className="min-w-0">
              <h2 className="font-bold text-sm truncate">Wagner Admin</h2>
              {email && (
                <p className="text-xs text-muted truncate">{email}</p>
              )}
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-accent/10 transition-colors hidden md:flex"
            aria-label={collapsed ? "Sidebar aufklappen" : "Sidebar zuklappen"}
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                collapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {navItems.map((item) => {
            const isActive = item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-accent/5 hover:text-primary"
                )}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-2 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted hover:bg-accent/5 hover:text-primary transition-colors mb-1"
            title={collapsed ? "Zur Website" : undefined}
          >
            <ChevronLeft className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Zur Website</span>}
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted hover:bg-error/5 hover:text-error transition-colors w-full"
            title={collapsed ? "Abmelden" : undefined}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Abmelden</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

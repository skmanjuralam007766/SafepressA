import React from 'react';
import { NavLink } from 'react-router';
import { cn } from '../ui/Card';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface SidebarProps {
  items: NavItem[];
  title: string;
}

export function Sidebar({ items, title }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-screen lg:w-64 border-r border-slate-200 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 lg:bg-white/80 lg:dark:bg-slate-900/80 shadow-2xl lg:shadow-none lg:border-r transition-transform duration-300 ease-in-out">
      <div className="flex h-16 items-center border-b border-slate-200 px-4 sm:px-6 dark:border-slate-800">
        <div className="flex items-center gap-2 font-bold text-lg sm:text-xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent truncate">
            {title}
        </div>
      </div>
      <nav className="space-y-1 p-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
        {items.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                isActive
                  ? "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 dark:from-amber-900/20 dark:to-orange-900/20 dark:text-amber-300 shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            <span className="truncate">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="absolute bottom-4 left-0 w-full px-4">
          <div className="rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white shadow-lg">
              <p className="text-xs font-medium opacity-90">System Status</p>
              <div className="flex items-center gap-2 mt-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold">Operational</span>
              </div>
          </div>
      </div>
    </aside>
  );
}

import React from 'react';
import { Sidebar, NavItem } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  sidebarTitle: string;
  pageTitle: string;
  userRole: string;
}

export function DashboardLayout({ children, navItems, sidebarTitle, pageTitle, userRole }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 antialiased flex flex-col lg:flex-row">
      <Sidebar items={navItems} title={sidebarTitle} />
      <div className="flex-1 lg:pl-64 min-w-0">
        <Header title={pageTitle} userRole={userRole} />
        <main className="p-4 sm:p-6 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

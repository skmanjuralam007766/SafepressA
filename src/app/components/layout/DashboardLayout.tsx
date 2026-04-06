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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 antialiased">
      <Sidebar items={navItems} title={sidebarTitle} />
      <div className="pl-64">
        <Header title={pageTitle} userRole={userRole} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

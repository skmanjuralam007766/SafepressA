import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface HeaderProps {
    title: string;
    userRole: string;
}

export function Header({ title, userRole }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100 hidden md:block">
          {title}
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
            <Input className="pl-9 bg-slate-100/50 border-transparent focus:bg-white dark:bg-slate-800/50 dark:focus:bg-slate-800 dark:text-slate-100" placeholder="Search..." />
        </div>
        
        <Button variant="ghost" size="icon" className="relative text-slate-600 dark:text-slate-300">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />
        </Button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
            <div className="text-right hidden sm:block">
                <p className="text-sm font-medium leading-none text-slate-900 dark:text-slate-100">Commander X</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{userRole}</p>
            </div>
            <Button variant="secondary" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
            </Button>
        </div>
      </div>
    </header>
  );
}
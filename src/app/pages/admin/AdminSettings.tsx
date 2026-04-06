import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Moon, Sun, Globe, User, LogOut, Bell } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useTheme } from 'next-themes';

export function AdminSettings() {
  const navigate = useNavigate();
  const { setTheme, theme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">System Settings</h2>

      <Card className="dark:bg-slate-800">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white"><User className="w-5 h-5" /> Account Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <Input defaultValue="Commander Alexander X" className="dark:bg-slate-700 dark:text-white" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Authority ID</label>
                    <Input defaultValue="AUTH-8821-X" disabled className="bg-slate-50 dark:bg-slate-600 dark:text-slate-300" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <Input defaultValue="alex.x@safepress.gov" className="dark:bg-slate-700 dark:text-white" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                    <Input defaultValue="+1 (555) 000-0000" className="dark:bg-slate-700 dark:text-white" />
                </div>
            </div>
            <Button>Update Profile</Button>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white"><Globe className="w-5 h-5" /> Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-medium text-slate-900 dark:text-white">Appearance</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Customize the dashboard theme</p>
                </div>
                <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className={theme === 'light' ? "bg-white shadow-sm text-black" : "text-slate-500 dark:text-slate-400"}
                        onClick={() => setTheme('light')}
                    >
                        <Sun className="w-4 h-4 mr-2" /> Light
                    </Button>
                    <Button 
                        variant="ghost" 
                        size="sm"
                        className={theme === 'dark' ? "bg-white shadow-sm text-black" : "text-slate-500 dark:text-slate-400"}
                        onClick={() => setTheme('dark')}
                    >
                        <Moon className="w-4 h-4 mr-2" /> Dark
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-medium text-slate-900 dark:text-white">Language</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Select system language</p>
                </div>
                <select className="bg-slate-100 dark:bg-slate-700 border-none rounded-md px-3 py-2 text-sm text-slate-900 dark:text-white">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                </select>
            </div>
             <div className="flex items-center justify-between">
                <div>
                    <p className="font-medium text-slate-900 dark:text-white">Notifications</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email and push alerts</p>
                </div>
                <Button variant="outline" size="sm"><Bell className="w-4 h-4 mr-2" /> Configure</Button>
            </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button variant="destructive" onClick={() => navigate('/')}>
            <LogOut className="w-4 h-4 mr-2" /> Logout System
        </Button>
      </div>
    </div>
  );
}
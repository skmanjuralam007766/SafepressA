import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useNavigate } from 'react-router';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function SuperAdminSettings() {
    const navigate = useNavigate();
    const { setTheme, theme } = useTheme();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Super Admin Configuration</h2>
      <Card className="dark:bg-slate-800">
          <CardHeader><CardTitle className="text-slate-900 dark:text-white">System Parameters</CardTitle></CardHeader>
          <CardContent className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                       <label className="text-sm font-medium text-slate-700 dark:text-slate-300">System Name</label>
                       <Input defaultValue="SafePress Authority Control Center" className="dark:bg-slate-700 dark:text-white" />
                   </div>
                   <div className="space-y-2">
                       <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Version</label>
                       <Input defaultValue="v4.2.0 (Stable)" disabled className="bg-slate-50 dark:bg-slate-600 dark:text-slate-300" />
                   </div>
               </div>
               
               <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900 dark:text-white">Appearance</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Toggle light/dark mode</p>
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
               </div>

               <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4">Save Configuration</Button>
          </CardContent>
      </Card>
      
      <div className="flex justify-center">
         <Button variant="destructive" onClick={() => navigate('/')}>Logout Session</Button>
      </div>
    </div>
  );
}
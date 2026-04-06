import React from 'react';
import { useNavigate } from 'react-router';
import { Shield, UserCog, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 shadow-lg mb-4">
            <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          SafePress Authority Access Portal
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Login as your designated role to access the control center
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card 
            className="group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-l-amber-500"
            onClick={() => navigate('/login/admin')}
        >
          <div className="p-8 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-600 dark:group-hover:bg-amber-600 transition-colors">
              <Shield className="w-10 h-10 text-amber-600 dark:text-amber-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Admin Login</h2>
              <p className="text-slate-500 dark:text-slate-400">Access for operational commanders and unit heads.</p>
            </div>
            <div className="flex items-center text-amber-600 dark:text-amber-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Proceed to Login <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </Card>

        <Card 
            className="group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-l-orange-600"
            onClick={() => navigate('/login/super-admin')}
        >
          <div className="p-8 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-600 dark:group-hover:bg-orange-600 transition-colors">
              <UserCog className="w-10 h-10 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Super Admin Login</h2>
              <p className="text-slate-500 dark:text-slate-400">Restricted access for high-level authority oversight.</p>
            </div>
            <div className="flex items-center text-orange-600 dark:text-orange-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Proceed to Login <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </Card>
      </div>

      <footer className="mt-16 text-slate-400 text-sm">
        © {new Date().getFullYear()} SafePress Command Center. Authorized Personnel Only.
      </footer>
    </div>
  );
}
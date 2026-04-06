import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Shield, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export function Login() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const isSuperAdmin = role === 'super-admin';
  const roleName = isSuperAdmin ? 'Super Admin' : 'Admin';
  const themeColor = isSuperAdmin ? 'text-orange-600 dark:text-orange-400' : 'text-amber-600 dark:text-amber-400';
  const bgGradient = isSuperAdmin 
    ? 'bg-gradient-to-br from-orange-50 via-slate-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900' 
    : 'bg-gradient-to-br from-amber-50 via-slate-50 to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
        setLoading(false);
        if (isSuperAdmin) {
            navigate('/super-admin');
        } else {
            navigate('/admin');
        }
    }, 1000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${bgGradient}`}>
      <Button 
        variant="ghost" 
        className="absolute top-8 left-8"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portal
      </Button>

      <Card className="w-full max-w-md p-1 shadow-2xl border-t-4 border-t-current" style={{ color: isSuperAdmin ? '#ea580c' : '#f59e0b' }}>
        <div className="bg-white p-8 rounded-xl dark:bg-slate-900">
            <div className="text-center mb-8">
                <div className={`mx-auto w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 ${themeColor}`}>
                    <Shield className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {roleName} Login
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Enter your authorized ID and password to access the secure terminal.
                </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Authority ID
                    </label>
                    <div className="relative">
                        <Shield className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 dark:text-slate-500" />
                        <Input 
                            placeholder="8-digit ID" 
                            className="pl-10" 
                            maxLength={8}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 dark:text-slate-500" />
                        <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10"
                            required 
                        />
                    </div>
                </div>

                <Button 
                    type="submit" 
                    className={`w-full ${isSuperAdmin ? 'bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700' : 'bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700'}`}
                    disabled={loading}
                >
                    {loading ? 'Authenticating...' : 'Secure Login'}
                </Button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-xs text-slate-400 uppercase tracking-widest">
                    Authorized Personnel Only
                </p>
            </div>
        </div>
      </Card>
    </div>
  );
}
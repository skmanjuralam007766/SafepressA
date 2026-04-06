import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', incidents: 65, resolved: 40, resources: 24 },
  { name: 'Feb', incidents: 59, resolved: 30, resources: 13 },
  { name: 'Mar', incidents: 80, resolved: 60, resources: 48 },
  { name: 'Apr', incidents: 81, resolved: 70, resources: 30 },
  { name: 'May', incidents: 56, resolved: 50, resources: 20 },
  { name: 'Jun', incidents: 95, resolved: 80, resources: 45 },
  { name: 'Jul', incidents: 88, resolved: 75, resources: 40 },
];

const zoneData = [
    { zone: 'Zone A', value: 120 },
    { zone: 'Zone B', value: 98 },
    { zone: 'Zone C', value: 86 },
    { zone: 'Zone D', value: 54 },
];

export function AdminAnalysis() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Analytical Overview</h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
            <CardHeader>
                <CardTitle>Incident vs Resolution Trend</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorRes" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" fontSize={12} axisLine={false} tickLine={false} />
                        <YAxis fontSize={12} axisLine={false} tickLine={false} />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                        <Legend />
                        <Area type="monotone" dataKey="incidents" stroke="#ef4444" fillOpacity={1} fill="url(#colorInc)" />
                        <Area type="monotone" dataKey="resolved" stroke="#10b981" fillOpacity={1} fill="url(#colorRes)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Highest Risk Zone</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-6">
                        <div className="text-5xl font-bold text-red-600 mb-2">ZONE A</div>
                        <p className="text-slate-500 dark:text-slate-400">120 Incidents this month</p>
                        <div className="mt-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                            <div className="bg-red-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-xs text-right mt-1 text-red-600 dark:text-red-400">85% Critical Load</p>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Avg Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-6">
                         <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">4m 12s</div>
                         <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">↓ 12% faster than last month</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Resource Utilization by Month</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" fontSize={12} axisLine={false} tickLine={false} />
                    <YAxis fontSize={12} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                    <Bar dataKey="resources" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Activity, Users, ShieldAlert, CheckCircle, Clock, MapPin, Building, MessageSquare, TrendingUp, Bell } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { Button } from '../../components/ui/Button';

const uttarakhandMap = '/uttarakhandMap.png';

const data = [
  { name: 'Mon', active: 40, resolved: 24, total: 64 },
  { name: 'Tue', active: 30, resolved: 13, total: 43 },
  { name: 'Wed', active: 20, resolved: 48, total: 68 },
  { name: 'Thu', active: 27, resolved: 39, total: 66 },
  { name: 'Fri', active: 18, resolved: 48, total: 66 },
  { name: 'Sat', active: 23, resolved: 38, total: 61 },
  { name: 'Sun', active: 34, resolved: 43, total: 77 },
];

export function SuperAdminDashboard() {
  const navigate = useNavigate();

  const handleCardClick = (page: string) => {
    navigate(`/super-admin/${page}`);
    toast.success(`Opening ${page}...`);
  };

  const handleNotification = () => {
    toast.info('System Notifications', {
      description: '5 new incidents and 3 resolved complaints',
      action: {
        label: 'View All',
        onClick: () => navigate('/super-admin/complaints'),
      },
    });
  };

  const handleViewMap = () => {
    navigate('/super-admin/heatmap');
    toast.success('Opening Heat Map View...');
  };

  return (
    <div className="space-y-6">
      {/* Header with Notification Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Super Admin Dashboard</h2>
        <Button variant="outline" size="sm" onClick={handleNotification}>
          <Bell className="h-4 w-4 mr-2" /> Notifications
        </Button>
      </div>

      {/* Top Stats Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-xl cursor-pointer hover:shadow-2xl transition-shadow" onClick={() => toast.info('Total Incidents: 1,284', { description: 'Click for detailed breakdown' })}>
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-slate-400 text-sm font-medium">Total Incidents</p>
                        <h3 className="text-3xl font-bold mt-2">1,284</h3>
                        <Badge variant="outline" className="mt-2 text-emerald-400 border-emerald-400/30 bg-emerald-400/10">+12.5%</Badge>
                    </div>
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                        <ShieldAlert className="w-6 h-6 text-emerald-400" />
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg Response Time</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">3m 45s</h3>
                         <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-2">Best in Zone A</p>
                    </div>
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400">
                        <Clock className="w-6 h-6" />
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
             <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Resolved Incidents</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">942</h3>
                         <p className="text-xs text-slate-400 dark:text-slate-300 mt-2">73% Clearance Rate</p>
                    </div>
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
             <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Users</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">156</h3>
                         <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">142 Active Now</p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                        <Users className="w-6 h-6" />
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>

      {/* Middle Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Chart */}
        <Card className="lg:col-span-2">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Incident Trends</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Weekly breakdown of resolution efficiency</p>
                    </div>
                    <Badge variant="outline"><TrendingUp className="w-3 h-3 mr-1" /> Live Updates</Badge>
                </div>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <CartesianGrid vertical={false} stroke="#f1f5f9" />
                            <Tooltip />
                            <Area type="monotone" dataKey="total" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorTotal)" />
                            <Area type="monotone" dataKey="resolved" stroke="#10b981" fillOpacity={0.3} fill="#10b981" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        {/* Status Cards */}
        <div className="space-y-4">
            <Card className="bg-indigo-600 text-white">
                <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2 opacity-80">
                        <Building className="w-5 h-5" />
                        <span className="text-sm font-medium">Control Rooms</span>
                    </div>
                    <div className="text-4xl font-bold mb-4">12</div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm opacity-90">
                            <span>Vehicles</span>
                            <span>48</span>
                        </div>
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-3/4" />
                        </div>
                         <div className="flex justify-between text-sm opacity-90">
                            <span>Drones</span>
                            <span>24</span>
                        </div>
                         <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-1/2" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="dark:bg-slate-800">
                <CardContent className="p-6">
                     <div className="flex items-center gap-3 mb-4 text-slate-500 dark:text-slate-400">
                        <MessageSquare className="w-5 h-5" />
                        <span className="text-sm font-medium">Complaints</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                            <div className="text-2xl font-bold text-red-600 dark:text-red-400">8</div>
                            <div className="text-xs text-red-600/80 dark:text-red-400/80">Active</div>
                        </div>
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                             <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">42</div>
                             <div className="text-xs text-emerald-600/80 dark:text-emerald-400/80">Resolved</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>

      {/* Bottom Heatmap Preview Row */}
      <div className="grid gap-6 lg:grid-cols-2">
         <Card className="overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow" onClick={handleViewMap}>
            <div className="relative h-64 bg-white dark:bg-slate-900">
                <img 
                  src={uttarakhandMap} 
                  alt="Uttarakhand Map" 
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 z-10">
                     <h3 className="text-white font-bold text-lg flex items-center gap-2 drop-shadow-lg"><MapPin className="w-5 h-5 text-emerald-400" /> Uttarakhand Heat Map</h3>
                     <p className="text-white/90 text-sm mt-1 drop-shadow-md">Click to view detailed analytics</p>
                </div>
                 {/* Mock Heat Points */}
                 <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-red-500/40 blur-3xl rounded-full" />
                 <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-amber-500/40 blur-3xl rounded-full" />
            </div>
         </Card>
         <Card className="dark:bg-slate-800">
            <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Region Predictions</h3>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                             <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
                             <Tooltip cursor={{fill: 'transparent'}} />
                             <Bar dataKey="total" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Activity, Users, Clock, AlertTriangle, Map, Navigation, BrainCircuit, FileText, Bell } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

// Mock Data
const analyticsData = [
  { name: '10:00', incidents: 4 },
  { name: '11:00', incidents: 7 },
  { name: '12:00', incidents: 5 },
  { name: '13:00', incidents: 12 },
  { name: '14:00', incidents: 8 },
  { name: '15:00', incidents: 15 },
];

const pieData = [
  { name: 'Resolved', value: 400 },
  { name: 'Active', value: 300 },
  { name: 'Pending', value: 300 },
];
const COLORS = ['#10b981', '#ef4444', '#f59e0b'];

const incidents = [
    { id: 'INC-2024-001', type: 'Fire Outbreak', user: 'Officer John', time: '2 mins ago', loc: 'Zone A - Sector 4', status: 'Critical' },
    { id: 'INC-2024-002', type: 'Medical Emergency', user: 'Civilian Report', time: '5 mins ago', loc: 'Zone B - Main St', status: 'High' },
    { id: 'INC-2024-003', type: 'Traffic Accident', user: 'Camera AI', time: '12 mins ago', loc: 'Zone C - Highway', status: 'Moderate' },
    { id: 'INC-2024-004', type: 'Suspicious Activity', user: 'Drone Patrol', time: '15 mins ago', loc: 'Zone A - Park', status: 'Low' },
];

export function AdminDashboard() {
  const navigate = useNavigate();
  const [selectedIncident, setSelectedIncident] = React.useState<typeof incidents[0] | null>(null);
  const [showIncidentDialog, setShowIncidentDialog] = React.useState(false);

  const handleIncidentView = (incident: typeof incidents[0]) => {
    setSelectedIncident(incident);
    setShowIncidentDialog(true);
  };

  const handleQuickAction = (action: string, path: string) => {
    navigate(path);
    toast.success(`Opening ${action}...`);
  };

  const handleNotification = () => {
    toast.info('You have 3 new notifications', {
      description: '2 critical alerts and 1 resource update',
      action: {
        label: 'View All',
        onClick: () => navigate('/admin/incidents'),
      },
    });
  };

  const handleGenerateReport = () => {
    toast.success('Generating report...', {
      description: 'Your PDF report will be downloaded shortly',
    });
    setTimeout(() => {
      toast.success('Report downloaded successfully!');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* 1) AUTHORITY CONTROL CENTER (KPI Cards) */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Authority Control Center</h2>
          <Button variant="outline" size="sm" onClick={handleNotification}>
            <Bell className="h-4 w-4 mr-2" /> Notifications
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-slate-900/50 border-l-4 border-l-red-500">
                <CardContent className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Incidents</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">24</h3>
                        <p className="text-xs text-red-600 dark:text-red-400 font-medium mt-1">+12% from yesterday</p>
                    </div>
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
                        <AlertTriangle className="h-6 w-6" />
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-900/50 border-l-4 border-l-amber-500">
                <CardContent className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Available Resources</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">85%</h3>
                        <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mt-1">42 Units Ready</p>
                    </div>
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400">
                        <Users className="h-6 w-6" />
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-900/50 border-l-4 border-l-emerald-500">
                <CardContent className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Est. Response Time</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">4m 12s</h3>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">-30s improvement</p>
                    </div>
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400">
                        <Clock className="h-6 w-6" />
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-slate-900/50 border-l-4 border-l-purple-500">
                <CardContent className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">User Assist</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">12</h3>
                        <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1">Active Calls</p>
                    </div>
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                        <Activity className="h-6 w-6" />
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* 2) QUICK ACTIONS */}
      <section>
        <h2 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-4">
            <Card className="hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group" onClick={() => handleQuickAction('Live Map View', '/admin/map')}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-amber-500 transition-colors">
                        <Map className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Live Map View</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Track all units</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group" onClick={() => handleQuickAction('Resources', '/admin/resources')}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white dark:group-hover:bg-orange-500 transition-colors">
                        <Navigation className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Dispatch Units</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">12 Dispatched • 8 Hold</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group" onClick={() => handleQuickAction('AI Detection', '/admin/ai')}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white dark:group-hover:bg-pink-500 transition-colors">
                        <BrainCircuit className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">AI Detection</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">5 New Alerts</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group" onClick={handleGenerateReport}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500 transition-colors">
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Generate Report</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Download PDF</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* 3) ACTIVE INCIDENTS LIST */}
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Recent Incidents</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/50 dark:bg-slate-800/50">
                            <tr>
                                <th className="px-4 py-3">Incident ID</th>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3">Location</th>
                                <th className="px-4 py-3">Time</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incidents.map((inc) => (
                                <tr key={inc.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{inc.id}</td>
                                    <td className="px-4 py-3 text-slate-900 dark:text-slate-100">{inc.type}</td>
                                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{inc.loc}</td>
                                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{inc.time}</td>
                                    <td className="px-4 py-3">
                                        <Badge variant={inc.status === 'Critical' ? 'destructive' : inc.status === 'High' ? 'warning' : 'default'} className="bg-opacity-20 text-opacity-100 border-none">
                                            {inc.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Button variant="link" size="sm" className="h-auto p-0 text-amber-600 dark:text-amber-400" onClick={() => handleIncidentView(inc)}>View</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>

        {/* 4) RESPONSE ANALYTICS */}
        <Card className="lg:col-span-1">
            <CardHeader>
                <CardTitle>Response Analytics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[200px] w-full mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={analyticsData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" className="dark:stroke-slate-700" />
                            <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} className="dark:text-slate-400" />
                            <YAxis fontSize={10} tickLine={false} axisLine={false} className="dark:text-slate-400" />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Line type="monotone" dataKey="incidents" stroke="#f59e0b" strokeWidth={3} dot={{r: 4, fill: '#f59e0b'}} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-[150px] w-full flex justify-center">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={60}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                     </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 text-xs mt-2 text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Resolved</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /> Active</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-500" /> Pending</div>
                </div>
            </CardContent>
        </Card>
      </div>

      {/* Incident Dialog */}
      <Dialog open={showIncidentDialog} onOpenChange={setShowIncidentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Incident Details</DialogTitle>
            <DialogDescription>
              View detailed information about the selected incident.
            </DialogDescription>
          </DialogHeader>
          {selectedIncident && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="bg-opacity-20 text-opacity-100 border-none">
                  {selectedIncident.status}
                </Badge>
                <p className="text-sm text-slate-500 dark:text-slate-400">Incident ID: {selectedIncident.id}</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Type: {selectedIncident.type}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Location: {selectedIncident.loc}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Time: {selectedIncident.time}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Reported By: {selectedIncident.user}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Truck, Video, Zap, Plus } from 'lucide-react';

const resources = [
    { id: 'RES-001', type: 'Patrol Van', location: 'Zone A', status: 'Available', usage: '12%' },
    { id: 'RES-002', type: 'Ambulance', location: 'Zone B', status: 'Dispatched', usage: '85%' },
    { id: 'RES-003', type: 'Fire Rescue', location: 'Zone C', status: 'Available', usage: '0%' },
    { id: 'RES-004', type: 'Drone Unit', location: 'Zone A', status: 'Maintenance', usage: 'N/A' },
];

export function AdminResources() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Resource Management</h2>
        <Button><Plus className="w-4 h-4 mr-2" /> Add Resource</Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-amber-600 dark:text-amber-400">Patrol Vans</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">12</h3>
                    </div>
                    <Truck className="w-8 h-8 text-amber-500 dark:text-amber-400 opacity-50" />
                </div>
            </CardContent>
        </Card>
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Ambulances</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">5</h3>
                    </div>
                    <ActivityIcon className="w-8 h-8 text-emerald-500 dark:text-emerald-400 opacity-50" />
                </div>
            </CardContent>
        </Card>
        <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Fire Rescue</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">3</h3>
                    </div>
                    <Zap className="w-8 h-8 text-orange-500 dark:text-orange-400 opacity-50" />
                </div>
            </CardContent>
        </Card>
        <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Drones</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">8</h3>
                    </div>
                    <Video className="w-8 h-8 text-purple-500 dark:text-purple-400 opacity-50" />
                </div>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Fleet Status</CardTitle>
        </CardHeader>
        <CardContent>
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                        <th className="px-6 py-3">Resource ID</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Location</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Usage</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map((res) => (
                        <tr key={res.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">{res.id}</td>
                            <td className="px-6 py-4 text-slate-900 dark:text-slate-100">{res.type}</td>
                            <td className="px-6 py-4 text-slate-900 dark:text-slate-100">{res.location}</td>
                            <td className="px-6 py-4">
                                <Badge variant={res.status === 'Available' ? 'success' : res.status === 'Dispatched' ? 'warning' : 'destructive'}>
                                    {res.status}
                                </Badge>
                            </td>
                            <td className="px-6 py-4 text-slate-900 dark:text-slate-100">{res.usage}</td>
                            <td className="px-6 py-4 flex gap-2">
                                <Button size="sm" variant="outline" disabled={res.status !== 'Available'}>Dispatch</Button>
                                <Button size="sm" variant="ghost">Hold</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </CardContent>
      </Card>
    </div>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
    )
}
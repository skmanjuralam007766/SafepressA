import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Building, Truck, Video, Camera } from 'lucide-react';

export function SuperAdminControlRooms() {
  const [zone, setZone] = useState('Zone A');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Control Rooms & Resources</h2>
        <div className="flex gap-2 bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
            {['Zone A', 'Zone B', 'Zone C'].map((z) => (
                <button
                    key={z}
                    onClick={() => setZone(z)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        zone === z ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                >
                    {z}
                </button>
            ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dark:bg-slate-800">
            <CardContent className="p-6 flex items-center gap-4">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                    <Building className="w-8 h-8" />
                </div>
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Control Rooms</p>
                    <h3 className="text-2xl font-bold dark:text-white">4</h3>
                </div>
            </CardContent>
        </Card>
        <Card className="dark:bg-slate-800">
            <CardContent className="p-6 flex items-center gap-4">
                <div className="p-4 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">
                    <Truck className="w-8 h-8" />
                </div>
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Vehicles</p>
                    <h3 className="text-2xl font-bold dark:text-white">28</h3>
                </div>
            </CardContent>
        </Card>
         <Card className="dark:bg-slate-800">
            <CardContent className="p-6 flex items-center gap-4">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                    <Video className="w-8 h-8" />
                </div>
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Drones</p>
                    <h3 className="text-2xl font-bold dark:text-white">12</h3>
                </div>
            </CardContent>
        </Card>
         <Card className="dark:bg-slate-800">
            <CardContent className="p-6 flex items-center gap-4">
                <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                    <Camera className="w-8 h-8" />
                </div>
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Cameras</p>
                    <h3 className="text-2xl font-bold dark:text-white">1,402</h3>
                </div>
            </CardContent>
        </Card>
      </div>

      <Card className="dark:bg-slate-800">
        <CardHeader>
            <CardTitle className="dark:text-white">Operational Logs - {zone}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/30">
                        <div className="flex items-center gap-4">
                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                            <div>
                                <p className="font-medium text-slate-900 dark:text-white">Unit dispatched to Sector {i}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Operation #{4000+i} • Authorized by Cmdr. X</p>
                            </div>
                        </div>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">{10+i}:00 AM</span>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
const uttarakhandMap = '/uttarakhandMap.png';
export function SuperAdminHeatMap() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col gap-4">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Uttarakhand Heat Map</h2>
            <div className="flex gap-2">
                <Button variant="outline" size="sm">Day</Button>
                <Button variant="default" size="sm">Week</Button>
                <Button variant="outline" size="sm">Month</Button>
            </div>
        </div>
        <Card className="flex-1 overflow-hidden relative border-0 shadow-lg bg-white dark:bg-slate-900">
             <img 
               src={uttarakhandMap} 
               alt="Uttarakhand Map" 
               className="absolute inset-0 w-full h-full object-contain p-8"
             />
             <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30" />
             
             {/* Heat Zones */}
             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/40 rounded-full blur-[80px] animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/30 rounded-full blur-[100px]" />
             <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-amber-500/30 rounded-full blur-[60px]" />

             <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md p-4 rounded-xl text-white">
                <h4 className="font-bold mb-2">Intensity Index</h4>
                <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" /> High Risk
                </div>
                <div className="flex items-center gap-2 text-xs mt-1">
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" /> Moderate
                </div>
                <div className="flex items-center gap-2 text-xs mt-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" /> Low Activity
                </div>
             </div>
        </Card>
    </div>
  );
}
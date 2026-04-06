import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
const uttarakhandMap = '/uttarakhandMap.png';
export function SuperAdminHeatMap() {
  return (
    <div className="flex flex-col gap-4 min-h-[70vh]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Uttarakhand Heat Map</h2>
            <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">Day</Button>
                <Button variant="default" size="sm">Week</Button>
                <Button variant="outline" size="sm">Month</Button>
            </div>
        </div>
        <Card className="flex-1 min-h-[400px] overflow-hidden relative border-0 shadow-lg bg-white dark:bg-slate-900">
             <img 
               src={uttarakhandMap} 
               alt="Uttarakhand Map" 
               className="absolute inset-0 w-full h-full object-contain p-4 sm:p-8"
             />
             <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30" />
             
             {/* Responsive Heat Zones */}
             <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-red-600/40 rounded-full blur-[40px] sm:blur-[60px] lg:blur-[80px] animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-amber-600/30 rounded-full blur-[50px] sm:blur-[80px] lg:blur-[100px]" />
             <div className="absolute top-1/2 left-1/2 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-amber-500/30 rounded-full blur-[30px] sm:blur-[50px] lg:blur-[60px]" />

             <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/60 backdrop-blur-md p-3 sm:p-4 rounded-xl text-white max-w-[200px]">
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Intensity Index</h4>
                <div className="flex items-center gap-2 text-xs flex-wrap">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] flex-shrink-0" /> High Risk
                </div>
                <div className="flex items-center gap-2 text-xs mt-1 flex-wrap">
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] flex-shrink-0" /> Moderate
                </div>
                <div className="flex items-center gap-2 text-xs mt-1 flex-wrap">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] flex-shrink-0" /> Low Activity
                </div>
             </div>
        </Card>
    </div>
  );
}

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Thermometer, History, Activity, Clock, MapPin } from 'lucide-react';
const uttarakhandMap = '/uttarakhandMap.png';

export function AdminMap() {
  const [viewMode, setViewMode] = useState('live');

  return (
    <div className="flex flex-col lg:flex-row gap-4 min-h-[70vh] lg:h-[calc(100vh-12rem)]">
      {/* Right Panel - Top on mobile */}
      <Card className="w-full lg:w-80 flex flex-col flex-1 lg:flex-none h-80 lg:h-full lg:max-h-[calc(100vh-12rem)] dark:bg-slate-800 order-2 lg:order-1">
        <div className="p-4 border-b border-slate-100 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Live Updates</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex gap-3 items-start border-b border-slate-50 dark:border-slate-700 pb-3 last:border-0">
                    <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                    <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Incident #{2020+i}</p>
                        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" /> Sector {i}
                        </div>
                        <div className="flex items-center text-xs text-slate-400 mt-0.5">
                            <Clock className="w-3 h-3 mr-1 flex-shrink-0" /> {i*5}m ago
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-b-2xl border-t border-slate-100 dark:border-slate-700 flex-shrink-0">
             <div className="grid grid-cols-2 gap-2">
                <div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-600 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Active</p>
                    <p className="text-lg font-bold text-red-600">12</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-600 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Resolved</p>
                    <p className="text-lg font-bold text-emerald-600">45</p>
                </div>
             </div>
        </div>
      </Card>

      {/* Map Area */}
      <div className="flex-1 relative rounded-2xl overflow-hidden bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 order-1 lg:order-2 min-h-[300px] lg:min-h-0">
         {/* Uttarakhand Map */}
         <img 
           src={uttarakhandMap} 
           alt="Uttarakhand Map" 
           className="absolute inset-0 w-full h-full object-contain p-4 sm:p-8"
         />
         <div className="absolute inset-0 bg-slate-900/5 dark:bg-slate-900/30" />
         
         {/* Overlay Controls */}
         <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 bg-white/95 dark:bg-slate-900/95 p-2 rounded-xl shadow-lg backdrop-blur-sm">
            <Button 
                variant={viewMode === 'live' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setViewMode('live')}
                className="justify-start"
            >
                <Activity className="w-4 h-4 mr-2" /> Live View
            </Button>
            <Button 
                variant={viewMode === 'heat' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setViewMode('heat')}
                className="justify-start"
            >
                <Thermometer className="w-4 h-4 mr-2" /> Heat Map
            </Button>
            <Button 
                variant={viewMode === 'history' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setViewMode('history')}
                className="justify-start"
            >
                <History className="w-4 h-4 mr-2" /> Historical
            </Button>
         </div>

         {/* Mock Markers */}
         <div className="absolute top-1/2 left-1/3 animate-bounce">
            <div className="relative">
                <div className="w-4 h-4 bg-red-500 rounded-full ring-4 ring-white dark:ring-slate-700 shadow-lg" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 dark:text-white px-2 py-1 rounded shadow text-xs font-bold whitespace-nowrap">
                    Fire Alert (Sector 4)
                </div>
            </div>
         </div>
         <div className="absolute bottom-1/4 right-1/4">
            <div className="relative">
                <div className="w-4 h-4 bg-amber-500 rounded-full ring-4 ring-white dark:ring-slate-700 shadow-lg" />
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 dark:text-white px-2 py-1 rounded shadow text-xs font-bold whitespace-nowrap">
                    Patrol Unit 4
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}

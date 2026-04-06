import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Play, Pause, ZoomIn, ZoomOut, Compass, Battery, Wifi } from 'lucide-react';

export function AdminDrone() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)]">
      {/* Main Video Feed */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="relative flex-1 bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
                {!isPlaying && (
                    <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm">
                        <Play className="w-12 h-12 text-white fill-white" />
                    </div>
                )}
            </div>
            
            {/* HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="bg-red-600 text-white text-xs px-2 py-0.5 rounded animate-pulse">LIVE</div>
                            <span className="text-white font-mono text-shadow-sm">CAM-DRONE-04</span>
                        </div>
                        <p className="text-white/80 text-xs font-mono">ALT: 124m • SPD: 42km/h</p>
                    </div>
                    <div className="flex gap-4 text-white">
                        <div className="flex items-center gap-1"><Battery className="w-4 h-4" /> 74%</div>
                        <div className="flex items-center gap-1"><Wifi className="w-4 h-4" /> Strong</div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-white/50 mx-auto" />
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="bg-black/40 backdrop-blur-md p-2 rounded-lg text-white/90 text-xs font-mono">
                        LAT: 40.7128 N<br/>LON: 74.0060 W
                    </div>
                    <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                         <Compass className="w-12 h-12 text-white rotate-45" />
                    </div>
                </div>
            </div>
        </div>

        {/* Controls */}
        <Card className="p-4 flex justify-between items-center bg-slate-900 text-white border-slate-800">
            <div className="flex gap-2">
                <Button variant="secondary" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button variant="secondary" size="icon"><ZoomIn className="w-4 h-4" /></Button>
                <Button variant="secondary" size="icon"><ZoomOut className="w-4 h-4" /></Button>
            </div>
            <div className="flex gap-4">
                 <select className="bg-slate-800 border-none rounded px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500">
                    <option>Drone Unit 1 (Active)</option>
                    <option>Drone Unit 2 (Charging)</option>
                    <option>Drone Unit 3 (Standby)</option>
                 </select>
            </div>
        </Card>
      </div>

      {/* Side Map */}
      <Card className="w-80 h-full hidden lg:flex flex-col dark:bg-slate-800">
        <div className="p-4 border-b border-slate-100 dark:border-slate-700">
            <h3 className="font-semibold dark:text-white">Drone Path</h3>
        </div>
        <div className="flex-1 bg-slate-100 dark:bg-slate-800 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400')] bg-cover opacity-50 grayscale" />
             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M 50 250 Q 150 150 250 200 T 350 100" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="5 5" />
                <circle cx="50" cy="250" r="4" fill="#3b82f6" />
                <circle cx="350" cy="100" r="6" fill="#ef4444" className="animate-ping" />
                <circle cx="350" cy="100" r="6" fill="#ef4444" />
             </svg>
        </div>
        <div className="p-4 space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Flight Time</span>
                <span className="font-medium dark:text-slate-200">18m 42s</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Distance</span>
                <span className="font-medium dark:text-slate-200">4.2 km</span>
            </div>
        </div>
      </Card>
    </div>
  );
}
import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Check, X, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

export function AdminAI() {
  const { detections, removeDetection, addIncident } = useApp();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleVerify = (item: any) => {
      // Add to incidents
      addIncident({
          id: `INC-AI-${item.id}`,
          type: item.type,
          location: 'Detected via Camera Feed', // Placeholder
          time: new Date().toLocaleTimeString(),
          severity: parseInt(item.conf) > 90 ? 'High' : 'Medium',
          user: 'AI System',
          status: 'Pending',
          responseLog: []
      });
      // Remove from detections
      removeDetection(item.id);
  };

  const handleFalse = (id: number) => {
      removeDetection(id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">AI Detection Feed</h2>
            <p className="text-slate-500 dark:text-slate-400">Real-time anomaly detection stream</p>
        </div>
        <div className="flex gap-2">
            <Badge variant="success" className="h-8 px-3 text-sm bg-green-100 text-green-800">System Active</Badge>
            <Badge variant="secondary" className="h-8 px-3 text-sm">Latency: 24ms</Badge>
        </div>
      </div>

      {detections.length === 0 ? (
          <div className="text-center py-20 text-slate-500 dark:text-slate-400">
              No anomalies detected at this moment.
          </div>
      ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detections.map((item) => (
                <Card key={item.id} className="overflow-hidden group dark:bg-slate-800">
                    <div className="relative h-48 bg-slate-100 dark:bg-slate-900 overflow-hidden">
                        <img 
                            src={item.img} 
                            alt={item.type} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                            onClick={() => setSelectedImage(item.img)}
                        />
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-mono">
                            {item.time}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <div className="flex justify-between items-end">
                                <span className="text-white font-medium">{item.type}</span>
                                <span className="text-emerald-400 font-bold text-sm">{item.conf} Match</span>
                            </div>
                        </div>
                    </div>
                    <CardContent className="p-4 flex gap-2">
                        <Button 
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white" 
                            size="sm"
                            onClick={() => handleVerify(item)}
                        >
                            <Check className="w-4 h-4 mr-2" /> Verify
                        </Button>
                        <Button 
                            className="flex-1" 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleFalse(item.id)}
                        >
                            <X className="w-4 h-4 mr-2" /> False
                        </Button>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-9 w-9"
                            onClick={() => setSelectedImage(item.img)}
                        >
                            <Eye className="w-4 h-4" />
                        </Button>
                    </CardContent>
                </Card>
            ))}
          </div>
      )}

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden bg-slate-900 dark:bg-slate-900 border-slate-700">
          <DialogHeader className="sr-only">
            <DialogTitle>Detection Image View</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative w-full">
              <img 
                src={selectedImage} 
                alt="Full view" 
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
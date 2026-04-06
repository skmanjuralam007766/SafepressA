import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Search, Filter, AlertCircle, CheckCircle2, Truck, Clock } from 'lucide-react';
import { useApp, Incident } from '../../context/AppContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Label } from "../../components/ui/label";

export function AdminIncidents() {
  const { incidents, updateIncidentStatus, assignResource } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('All');
  
  // Respond Modal State
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [respondModalOpen, setRespondModalOpen] = useState(false);

  // Assign Resource Modal State
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState('');

  const filteredIncidents = incidents.filter(inc => {
      const matchesSearch = inc.type.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            inc.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'All' || inc.severity === filterType || inc.status === filterType;
      return matchesSearch && matchesFilter;
  });

  const handleRespondClick = (inc: Incident) => {
      setSelectedIncident(inc);
      setRespondModalOpen(true);
  };

  const handleAssignClick = (inc: Incident) => {
      setSelectedIncident(inc);
      setAssignModalOpen(true);
  };

  const updateStatus = (status: Incident['status']) => {
      if (selectedIncident) {
          updateIncidentStatus(selectedIncident.id, status);
          setSelectedIncident(prev => prev ? { ...prev, status } : null);
      }
  };

  const confirmAssignment = () => {
      if (selectedIncident && selectedResource) {
          assignResource(selectedIncident.id, selectedResource);
          setAssignModalOpen(false);
          setSelectedResource('');
      }
  };

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Live Incidents</h2>
            <div className="flex gap-2">
                 <div className="relative w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                    <Input 
                        placeholder="Search ID, type..." 
                        className="pl-9" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
                 <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[180px]">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Incidents</SelectItem>
                        <SelectItem value="Critical">Critical Severity</SelectItem>
                        <SelectItem value="High">High Severity</SelectItem>
                        <SelectItem value="Pending">Pending Status</SelectItem>
                        <SelectItem value="Resolved">Resolved Status</SelectItem>
                    </SelectContent>
                 </Select>
            </div>
        </div>

        <div className="grid gap-4">
            {filteredIncidents.map((inc) => (
                <Card key={inc.id} className="hover:shadow-md transition-shadow dark:bg-slate-800">
                    <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-start gap-4 w-full md:w-auto">
                            <div className={`p-3 rounded-full ${inc.severity === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                    {inc.type} 
                                    <Badge variant={inc.severity === 'Critical' ? 'destructive' : inc.severity === 'High' ? 'warning' : 'secondary'}>
                                        {inc.severity}
                                    </Badge>
                                    <Badge variant="outline" className={inc.status === 'Resolved' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-700' : 'dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600'}>
                                        {inc.status}
                                    </Badge>
                                </h3>
                                <div className="text-sm text-slate-600 dark:text-slate-300 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                                    <span>ID: {inc.id}</span>
                                    <span>•</span>
                                    <span>{inc.location}</span>
                                    <span>•</span>
                                    <span>{inc.time}</span>
                                    <span>•</span>
                                    <span>Reported by {inc.user}</span>
                                </div>
                                {inc.resources && inc.resources.length > 0 && (
                                    <div className="mt-2 flex gap-2">
                                        {inc.resources.map((res, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-xs">
                                                <Truck className="w-3 h-3 mr-1" /> {res}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <Button variant="outline" onClick={() => handleAssignClick(inc)}>Assign Resources</Button>
                            <Button 
                                className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white" 
                                onClick={() => handleRespondClick(inc)}
                            >
                                Respond
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

        {/* Respond Modal */}
        <Dialog open={respondModalOpen} onOpenChange={setRespondModalOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Response Status: {selectedIncident?.id}</DialogTitle>
                    <DialogDescription>
                        Update the response stage for this incident.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-4">
                        <Button 
                            variant={selectedIncident?.status === 'Dispatched' ? 'default' : 'outline'}
                            onClick={() => updateStatus('Dispatched')}
                            className="justify-start"
                        >
                            <Truck className="mr-2 h-4 w-4" /> Unit Dispatched
                        </Button>
                        <Button 
                            variant={selectedIncident?.status === 'On Scene' ? 'default' : 'outline'}
                            onClick={() => updateStatus('On Scene')}
                            className="justify-start"
                        >
                            <Clock className="mr-2 h-4 w-4" /> Arrived On Scene
                        </Button>
                        <Button 
                            variant={selectedIncident?.status === 'Resolved' ? 'default' : 'outline'}
                            onClick={() => updateStatus('Resolved')}
                            className="justify-start bg-green-600 hover:bg-green-700 text-white"
                        >
                            <CheckCircle2 className="mr-2 h-4 w-4" /> Mark Resolved
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

        {/* Assign Resource Modal */}
        <Dialog open={assignModalOpen} onOpenChange={setAssignModalOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Assign Resource</DialogTitle>
                    <DialogDescription>
                        Select a resource to dispatch to {selectedIncident?.location}.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="resource" className="text-right">
                            Resource
                        </Label>
                        <Select value={selectedResource} onValueChange={setSelectedResource}>
                            <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder="Select unit..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Patrol Unit A-12">Patrol Unit A-12 (2km away)</SelectItem>
                                <SelectItem value="Fire Engine F-04">Fire Engine F-04 (5km away)</SelectItem>
                                <SelectItem value="Ambulance M-01">Ambulance M-01 (3km away)</SelectItem>
                                <SelectItem value="Drone Squad D-09">Drone Squad D-09 (Ready)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={confirmAssignment}>Assign</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  );
}
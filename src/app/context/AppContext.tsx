import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
export interface Incident {
  id: string;
  type: string;
  location: string;
  time: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  user: string;
  status: 'Pending' | 'Dispatched' | 'On Scene' | 'Resolved';
  resources?: string[];
  responseLog?: { stage: string; time: string }[];
}

export interface Detection {
  id: number;
  type: string;
  time: string;
  conf: string;
  img: string;
}

export interface Complaint {
  id: string;
  subject: string;
  user: string;
  date: string;
  status: 'Pending' | 'Resolved' | 'In Progress';
  priority: 'High' | 'Medium' | 'Low';
}

interface AppContextType {
  incidents: Incident[];
  detections: Detection[];
  complaints: Complaint[];
  addIncident: (incident: Incident) => void;
  updateIncidentStatus: (id: string, status: Incident['status']) => void;
  assignResource: (id: string, resource: string) => void;
  removeDetection: (id: number) => void;
  markComplaintResolved: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialIncidents: Incident[] = [
  { id: 'INC-001', type: 'Fire', location: 'Downtown', time: '10:42 AM', severity: 'Critical', user: 'Officer A', status: 'Pending', responseLog: [] },
  { id: 'INC-002', type: 'Accident', location: 'Highway 4', time: '10:30 AM', severity: 'High', user: 'Camera 2', status: 'Pending', responseLog: [] },
  { id: 'INC-003', type: 'Theft', location: 'Mall Plaza', time: '10:15 AM', severity: 'Medium', user: 'Guard B', status: 'Pending', responseLog: [] },
  { id: 'INC-004', type: 'Vandalism', location: 'Central Park', time: '09:50 AM', severity: 'Low', user: 'Civilian', status: 'Pending', responseLog: [] },
  { id: 'INC-005', type: 'Medical', location: 'Station 1', time: '09:40 AM', severity: 'High', user: 'Medic Team', status: 'Pending', responseLog: [] },
];

const initialDetections: Detection[] = [
  { id: 1, type: 'Crowd Gathering', time: '10:45:12', conf: '92%', img: 'https://images.unsplash.com/photo-1574359611197-21727c62a0c4?auto=format&fit=crop&q=80&w=600' },
  { id: 2, type: 'Fire Detected', time: '10:44:30', conf: '88%', img: 'https://images.unsplash.com/photo-1602148740250-0a4750e238e9?auto=format&fit=crop&q=80&w=600' },
  { id: 3, type: 'Traffic Violation', time: '10:42:05', conf: '95%', img: 'https://images.unsplash.com/photo-1566415750242-8356247c458e?auto=format&fit=crop&q=80&w=600' },
  { id: 4, type: 'Abandoned Object', time: '10:40:11', conf: '76%', img: 'https://images.unsplash.com/photo-1596796245041-09419b168531?auto=format&fit=crop&q=80&w=600' },
  { id: 5, type: 'Suspicious Motion', time: '10:38:55', conf: '65%', img: 'https://images.unsplash.com/photo-1550949984-cd3d40bc43f5?auto=format&fit=crop&q=80&w=600' },
  { id: 6, type: 'Perimeter Breach', time: '10:35:22', conf: '99%', img: 'https://images.unsplash.com/photo-1563205764-6e0b721e427f?auto=format&fit=crop&q=80&w=600' },
];

const initialComplaints: Complaint[] = [
    { id: 'CMP-2024-001', subject: 'Noise Complaint', user: 'Alice Johnson', date: '2024-03-10', status: 'Pending', priority: 'Low' },
    { id: 'CMP-2024-002', subject: 'Illegal Parking', user: 'Bob Smith', date: '2024-03-09', status: 'In Progress', priority: 'Medium' },
    { id: 'CMP-2024-003', subject: 'Garbage Dumping', user: 'Charlie Brown', date: '2024-03-08', status: 'Pending', priority: 'High' },
    { id: 'CMP-2024-004', subject: 'Street Light Broken', user: 'David Lee', date: '2024-03-07', status: 'Resolved', priority: 'Low' },
];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [detections, setDetections] = useState<Detection[]>(initialDetections);
  const [complaints, setComplaints] = useState<Complaint[]>(initialComplaints);

  const addIncident = (incident: Incident) => {
    setIncidents(prev => [incident, ...prev]);
  };

  const updateIncidentStatus = (id: string, status: Incident['status']) => {
    setIncidents(prev => prev.map(inc => {
        if (inc.id === id) {
            const newLog = [...(inc.responseLog || [])];
            newLog.push({ stage: status, time: new Date().toLocaleTimeString() });
            return { ...inc, status, responseLog: newLog };
        }
        return inc;
    }));
  };

  const assignResource = (id: string, resource: string) => {
      setIncidents(prev => prev.map(inc => 
        inc.id === id ? { ...inc, resources: [...(inc.resources || []), resource] } : inc
      ));
  };

  const removeDetection = (id: number) => {
    setDetections(prev => prev.filter(d => d.id !== id));
  };

  const markComplaintResolved = (id: string) => {
      setComplaints(prev => prev.map(c => c.id === id ? { ...c, status: 'Resolved' } : c));
  };

  return (
    <AppContext.Provider value={{ 
        incidents, detections, complaints, 
        addIncident, updateIncidentStatus, assignResource, 
        removeDetection, markComplaintResolved 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminMap } from './pages/admin/AdminMap';
import { AdminIncidents } from './pages/admin/AdminIncidents';
import { AdminResources } from './pages/admin/AdminResources';
import { AdminAI } from './pages/admin/AdminAI';
import { AdminDrone } from './pages/admin/AdminDrone';
import { AdminAnalysis } from './pages/admin/AdminAnalysis';
import { AdminSettings } from './pages/admin/AdminSettings';
import { LayoutDashboard, Map, Radio, Truck, BrainCircuit, Plane, PieChart, Settings } from 'lucide-react';

const adminNavItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Live Map', href: '/admin/map', icon: Map },
  { label: 'Live Incidents', href: '/admin/incidents', icon: Radio },
  { label: 'Resources', href: '/admin/resources', icon: Truck },
  { label: 'AI Detection', href: '/admin/ai', icon: BrainCircuit },
  { label: 'Auto Drone View', href: '/admin/drone', icon: Plane },
  { label: 'Analysis', href: '/admin/analysis', icon: PieChart },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminRouter() {
  const location = useLocation();
  const currentPath = location.pathname;
  let title = 'Dashboard';
  
  if(currentPath.includes('map')) title = 'Live Map';
  else if(currentPath.includes('incidents')) title = 'Live Incidents';
  else if(currentPath.includes('resources')) title = 'Resources';
  else if(currentPath.includes('ai')) title = 'AI Detection';
  else if(currentPath.includes('drone')) title = 'Auto Drone View';
  else if(currentPath.includes('analysis')) title = 'Analysis';
  else if(currentPath.includes('settings')) title = 'Settings';

  return (
    <DashboardLayout 
        navItems={adminNavItems} 
        sidebarTitle="SafePress Admin" 
        pageTitle={title}
        userRole="Admin Commander"
    >
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/map" element={<AdminMap />} />
        <Route path="/incidents" element={<AdminIncidents />} />
        <Route path="/resources" element={<AdminResources />} />
        <Route path="/ai" element={<AdminAI />} />
        <Route path="/drone" element={<AdminDrone />} />
        <Route path="/analysis" element={<AdminAnalysis />} />
        <Route path="/settings" element={<AdminSettings />} />
      </Routes>
    </DashboardLayout>
  );
}
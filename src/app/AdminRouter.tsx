import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { DashboardLayout } from './components/layout/DashboardLayout';
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const AdminMap = React.lazy(() => import('./pages/admin/AdminMap').then(module => ({ default: module.AdminMap })));
const AdminIncidents = React.lazy(() => import('./pages/admin/AdminIncidents').then(module => ({ default: module.AdminIncidents })));
const AdminResources = React.lazy(() => import('./pages/admin/AdminResources').then(module => ({ default: module.AdminResources })));
const AdminAI = React.lazy(() => import('./pages/admin/AdminAI').then(module => ({ default: module.AdminAI })));
const AdminDrone = React.lazy(() => import('./pages/admin/AdminDrone').then(module => ({ default: module.AdminDrone })));
const AdminAnalysis = React.lazy(() => import('./pages/admin/AdminAnalysis').then(module => ({ default: module.AdminAnalysis })));
const AdminSettings = React.lazy(() => import('./pages/admin/AdminSettings').then(module => ({ default: module.AdminSettings })));
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
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background text-muted-foreground">Loading page...</div>}>
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
      </Suspense>
    </DashboardLayout>
  );
}
import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { DashboardLayout } from './components/layout/DashboardLayout';
const SuperAdminDashboard = React.lazy(() => import('./pages/superadmin/SuperAdminDashboard').then(m => ({ default: m.SuperAdminDashboard })));
const SuperAdminHeatMap = React.lazy(() => import('./pages/superadmin/SuperAdminHeatMap').then(m => ({ default: m.SuperAdminHeatMap })));
const SuperAdminUsers = React.lazy(() => import('./pages/superadmin/SuperAdminUsers').then(m => ({ default: m.SuperAdminUsers })));
const SuperAdminComplaints = React.lazy(() => import('./pages/superadmin/SuperAdminComplaints').then(m => ({ default: m.SuperAdminComplaints })));
const SuperAdminControlRooms = React.lazy(() => import('./pages/superadmin/SuperAdminControlRooms').then(m => ({ default: m.SuperAdminControlRooms })));
const SuperAdminAnalytics = React.lazy(() => import('./pages/superadmin/SuperAdminAnalytics').then(m => ({ default: m.SuperAdminAnalytics })));
const SuperAdminSettings = React.lazy(() => import('./pages/superadmin/SuperAdminSettings').then(m => ({ default: m.SuperAdminSettings })));
import { LayoutDashboard, MapPin, Users, MessageSquare, Building2, BarChart3, Settings } from 'lucide-react';

const superAdminNavItems = [
  { label: 'Dashboard', href: '/super-admin', icon: LayoutDashboard },
  { label: 'Heat Map', href: '/super-admin/heatmap', icon: MapPin },
  { label: 'Users', href: '/super-admin/users', icon: Users },
  { label: 'Complaints', href: '/super-admin/complaints', icon: MessageSquare },
  { label: 'Control Rooms', href: '/super-admin/control-rooms', icon: Building2 },
  { label: 'Analytics', href: '/super-admin/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/super-admin/settings', icon: Settings },
];

export function SuperAdminRouter() {
  const location = useLocation();
  const currentPath = location.pathname;
  let title = 'Dashboard';
  
  if(currentPath.includes('heatmap')) title = 'Geographic Heat Map';
  else if(currentPath.includes('users')) title = 'User Management';
  else if(currentPath.includes('complaints')) title = 'Complaints System';
  else if(currentPath.includes('control-rooms')) title = 'Control Rooms & Resources';
  else if(currentPath.includes('analytics')) title = 'Advanced Analytics';
  else if(currentPath.includes('settings')) title = 'System Settings';

  return (
    <DashboardLayout 
        navItems={superAdminNavItems} 
        sidebarTitle="SafePress Super Admin" 
        pageTitle={title}
        userRole="System Overseer"
    >
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background text-muted-foreground">Loading page...</div>}>
        <Routes>
          <Route path="/" element={<SuperAdminDashboard />} />
          <Route path="/heatmap" element={<SuperAdminHeatMap />} />
          <Route path="/users" element={<SuperAdminUsers />} />
          <Route path="/complaints" element={<SuperAdminComplaints />} />
          <Route path="/control-rooms" element={<SuperAdminControlRooms />} />
          <Route path="/analytics" element={<SuperAdminAnalytics />} />
          <Route path="/settings" element={<SuperAdminSettings />} />
        </Routes>
      </Suspense>
    </DashboardLayout>
  );
}
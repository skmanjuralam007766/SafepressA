import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { ThemeProvider } from 'next-themes';
import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';
import { AdminRouter } from './AdminRouter';
import { SuperAdminRouter } from './SuperAdminRouter';
import { AppProvider } from './context/AppContext';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login/:role" element={<Login />} />
            
            {/* Protected Routes Mock */}
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/super-admin/*" element={<SuperAdminRouter />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
}
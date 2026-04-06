import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Week 1', incidents: 400, response: 240, predicted: 380 },
  { name: 'Week 2', incidents: 300, response: 139, predicted: 320 },
  { name: 'Week 3', incidents: 200, response: 980, predicted: 250 },
  { name: 'Week 4', incidents: 278, response: 390, predicted: 290 },
  { name: 'Week 5', incidents: 189, response: 480, predicted: 200 },
];

export function SuperAdminAnalytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Predictive Analytics Suite</h2>
      
      <Card>
        <CardHeader>
            <CardTitle>Incident Trends vs AI Predictions</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="incidents" stroke="#8884d8" strokeWidth={3} />
                    <Line type="monotone" dataKey="predicted" stroke="#82ca9d" strokeWidth={3} strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

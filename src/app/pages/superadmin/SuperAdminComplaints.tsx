import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Check, MessageCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export function SuperAdminComplaints() {
  const { complaints, markComplaintResolved } = useApp();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Complaints & Feedback</h2>
      <div className="grid gap-4">
        {complaints.map((c) => (
            <Card key={c.id} className="dark:bg-slate-800">
                <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant={c.status === 'Resolved' ? 'success' : c.status === 'In Progress' ? 'warning' : 'destructive'}>{c.status}</Badge>
                            <span className="text-xs text-slate-500 dark:text-slate-400">{c.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{c.subject}</h3>
                        <p className="text-slate-600 dark:text-slate-300 my-2">Priority: {c.priority} - Reported by {c.user}</p>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                            <MessageCircle className="w-4 h-4" /> Ticket ID: {c.id}
                        </div>
                    </div>
                    <div className="flex items-center">
                        {c.status !== 'Resolved' ? (
                            <Button 
                                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                onClick={() => markComplaintResolved(c.id)}
                            >
                                <Check className="w-4 h-4 mr-2" /> Mark Resolved
                            </Button>
                        ) : (
                            <Button variant="outline" disabled className="dark:text-slate-400">
                                <Check className="w-4 h-4 mr-2" /> Resolved
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}

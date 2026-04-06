import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Search, MoreVertical, UserCheck, UserX } from 'lucide-react';

const users = [
    { id: 1, name: 'Commander Alexander', role: 'Admin', status: 'Active', phone: '+1 555-0101' },
    { id: 2, name: 'Officer Sarah J.', role: 'Moderator', status: 'Active', phone: '+1 555-0102' },
    { id: 3, name: 'Analyst Mike R.', role: 'Analyst', status: 'Inactive', phone: '+1 555-0103' },
    { id: 4, name: 'Logistics Team A', role: 'Resource Mgr', status: 'Active', phone: '+1 555-0104' },
    { id: 5, name: 'Patrol Leader Z', role: 'Field Lead', status: 'Suspended', phone: '+1 555-0105' },
];

export function SuperAdminUsers() {
  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">User Management</h2>
            <Button className="bg-purple-600 hover:bg-purple-700">Add New User</Button>
        </div>

        <Card className="dark:bg-slate-800">
            <CardHeader className="flex flex-row items-center justify-between dark:border-slate-700">
                <CardTitle className="dark:text-white">System Users</CardTitle>
                <div className="relative w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                    <input className="w-full bg-slate-100 dark:bg-slate-700 dark:text-white rounded-md py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Search users..." />
                </div>
            </CardHeader>
            <CardContent>
                <table className="w-full text-left text-sm">
                    <thead className="text-xs uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50">
                        <tr>
                            <th className="px-6 py-3">User Name</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Phone</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">{user.name}</td>
                                <td className="px-6 py-4 text-slate-900 dark:text-slate-300">{user.role}</td>
                                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.phone}</td>
                                <td className="px-6 py-4">
                                    <Badge variant={user.status === 'Active' ? 'success' : user.status === 'Inactive' ? 'secondary' : 'destructive'}>
                                        {user.status}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                                            <UserCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                        </Button>
                                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                                            <UserX className="h-4 w-4 text-red-600 dark:text-red-400" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardContent>
        </Card>
    </div>
  );
}
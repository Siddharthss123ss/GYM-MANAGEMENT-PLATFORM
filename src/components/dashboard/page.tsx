'use client';

import Link from 'next/link';
import StatCard from '@/components/common/StatCard';
import Card from '@/components/common/Card';
import { Users, CreditCard, Activity, TrendingUp } from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/* -------------------- DATA -------------------- */

const revenueData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 57000 },
  { month: 'Jun', revenue: 69000 },
];

const memberData = [
  { month: 'Jan', members: 120 },
  { month: 'Feb', members: 145 },
  { month: 'Mar', members: 165 },
  { month: 'Apr', members: 180 },
  { month: 'May', members: 210 },
  { month: 'Jun', members: 235 },
];

/* -------------------- PAGE -------------------- */

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your gym.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Members" value="235" icon={Users} trend={12} color="blue" />
        <StatCard title="Active Members" value="218" icon={Activity} trend={8} color="green" />
        <StatCard title="Pending Fees" value="₹45,600" icon={CreditCard} trend={-5} color="orange" />
        <StatCard title="Monthly Revenue" value="₹69,000" icon={TrendingUp} trend={15} color="purple" />
      </div>

      {/* QUICK ACTIONS */}
      <Card>
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <Link href="/dashboard/members">
            <button className="w-full px-4 py-3 border rounded-lg hover:bg-blue-50 hover:border-blue-500 text-left font-medium">
              ➕ Add New Member
            </button>
          </Link>

          <Link href="/dashboard/payments">
            <button className="w-full px-4 py-3 border rounded-lg hover:bg-green-50 hover:border-green-500 text-left font-medium">
              💳 Record Payment
            </button>
          </Link>

          <Link href="/dashboard/payments">
            <button className="w-full px-4 py-3 border rounded-lg hover:bg-yellow-50 hover:border-yellow-500 text-left font-medium">
              ⏰ View Pending Dues
            </button>
          </Link>

          <Link href="/dashboard/members">
            <button className="w-full px-4 py-3 border rounded-lg hover:bg-gray-50 hover:border-gray-500 text-left font-medium">
              👥 View All Members
            </button>
          </Link>

        </div>
      </Card>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-lg font-semibold mb-4">Revenue Growth</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4">Member Growth</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={memberData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="members" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* RECENT ACTIVITY */}
      <Card>
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { time: '10:30 AM', text: 'John Doe joined as new member', color: 'green' },
            { time: 'Yesterday', text: 'Monthly revenue collected: ₹69,000', color: 'blue' },
            { time: '2 days ago', text: 'AI workout plan generated for 5 members', color: 'yellow' },
            { time: '1 week ago', text: '3 membership renewals pending', color: 'red' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
                <span className="text-gray-700">{item.text}</span>
              </div>
              <span className="text-sm text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}

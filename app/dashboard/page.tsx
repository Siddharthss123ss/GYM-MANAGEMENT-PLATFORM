"use client";

import React from "react";
import {
    Users,
    TrendingUp,
    Clock,
    AlertCircle,
    DollarSign,
    ArrowUpRight,
    UserPlus,
    Download,
    ChevronRight
} from "lucide-react";
import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';

const data = [
    { day: "Mon", revenue: 4200 },
    { day: "Tue", revenue: 3800 },
    { day: "Wed", revenue: 5400 },
    { day: "Thu", revenue: 4900 },
    { day: "Fri", revenue: 7200 },
    { day: "Sat", revenue: 8500 },
    { day: "Sun", revenue: 6100 },
];

export default function DashboardPage() {
    const stats = [
        { label: "Total Active Members", value: "854", icon: <Users size={18} />, color: "purple", growth: "+12% this month" },
        { label: "Total Revenue", value: "₹1,24,000", icon: <DollarSign size={18} />, color: "maroon", growth: "+8.4% vs last month" },
        { label: "Daily Attendance", value: "42", icon: <Clock size={18} />, color: "purple", growth: "Current status" },
        { label: "Pending Renewals", value: "15", icon: <AlertCircle size={18} />, color: "maroon", growth: "Action required" },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* 1. Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                            Business <span className="text-purple-600">Dashboard</span>
                        </h1>
                        <p className="text-gray-400 mt-2 font-medium">
                            Welcome back. Here is what's happening with your gym today.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-[#111] border border-[#222] text-gray-300 px-5 py-3 rounded-none text-xs font-bold uppercase tracking-wider hover:bg-[#1a1a1a] transition-all cursor-pointer">
                            <Download size={16} /> Download Report
                        </button>
                        <button className="flex items-center gap-2 bg-purple-700 text-white px-5 py-3 rounded-none text-xs font-bold uppercase tracking-wider hover:bg-purple-600 transition-all border-b-4 border-purple-900 cursor-pointer">
                            <UserPlus size={16} /> Add New Member
                        </button>
                    </div>
                </div>

                {/* 2. Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-[#1A1A1A] border border-[#1A1A1A] mb-1">
                    {stats.map((item, i) => (
                        <div key={i} className="bg-[#0A0A0A] p-6 hover:bg-[#0E0E0E] transition-colors group cursor-default">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 bg-[#050505] border border-[#1A1A1A] ${item.color === 'maroon' ? 'text-red-500' : 'text-purple-500'}`}>
                                    {item.icon}
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 border ${item.color === 'maroon'
                                        ? 'border-red-900/50 bg-red-950/30 text-red-500'
                                        : 'border-purple-900/50 bg-purple-950/30 text-purple-500'
                                    }`}>
                                    {item.growth}
                                </span>
                            </div>
                            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">{item.label}</h3>
                            <p className="text-3xl font-black text-white mt-1 tracking-tight">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-1">

                    {/* 3. Revenue Chart */}
                    <div className="lg:col-span-2 bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp className="text-purple-500" size={18} /> Revenue Overview
                            </h2>
                            <select className="bg-[#050505] border border-[#1A1A1A] text-xs font-bold text-gray-400 rounded-none px-4 py-2 outline-none focus:border-purple-500 cursor-pointer">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                            </select>
                        </div>

                        <div className="h-80 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#7e22ce" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#7e22ce" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="0" stroke="#1A1A1A" vertical={false} />
                                    <XAxis 
                                        dataKey="day" 
                                        stroke="#444" 
                                        fontSize={12} 
                                        tickLine={false} 
                                        axisLine={false}
                                        tick={{ fontWeight: '600' }}
                                        dy={10}
                                    />
                                    <YAxis 
                                        stroke="#444" 
                                        fontSize={11} 
                                        tickLine={false} 
                                        axisLine={false}
                                        tick={{ fontWeight: '600' }}
                                        tickFormatter={(value) => `₹${value}`}
                                    />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid #333', borderRadius: '0px' }}
                                        itemStyle={{ color: '#a855f7', fontSize: '12px', fontWeight: 'bold' }}
                                    />
                                    <Area 
                                        type="monotone" 
                                        dataKey="revenue" 
                                        stroke="#a855f7" 
                                        strokeWidth={3}
                                        fillOpacity={1} 
                                        fill="url(#colorRev)" 
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 4. Recent Payments */}
                    <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
                        <h2 className="text-sm font-black text-white uppercase tracking-widest mb-8">Recent Payments</h2>
                        <div className="space-y-5">
                            {[
                                { name: "Amit Sharma", plan: "Yearly Elite", amount: "₹12,000", date: "2 hours ago" },
                                { name: "Sonal Verma", plan: "Monthly Standard", amount: "₹1,500", date: "5 hours ago" },
                                { name: "Karan Patel", plan: "Quarterly Pro", amount: "₹4,500", date: "Yesterday" },
                                { name: "Priya Mehta", plan: "Monthly Standard", amount: "₹1,500", date: "Yesterday" },
                                { name: "Rahul Singh", plan: "Monthly Standard", amount: "₹1,500", date: "2 days ago" },
                            ].map((payment, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-transparent hover:border-purple-900/30 pb-2 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-gradient-to-br from-purple-900 to-black border border-[#222] flex items-center justify-center text-white font-black text-sm">
                                            {payment.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{payment.name}</p>
                                            <p className="text-[11px] text-gray-500 font-medium">{payment.plan}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-white">{payment.amount}</p>
                                        <p className="text-[10px] text-red-700 font-bold uppercase">{payment.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-10 py-4 bg-transparent border border-red-900/40 text-red-500 text-xs font-black uppercase tracking-widest hover:bg-red-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                            View All Transactions <ChevronRight size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
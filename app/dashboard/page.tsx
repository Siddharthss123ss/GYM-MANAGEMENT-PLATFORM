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
    BarChart3
} from "lucide-react";

export default function DashboardPage() {
    const stats = [
        { label: "Total Infrastructure Members", value: "854", icon: <Users size={18} />, color: "orange", growth: "+12% YTD" },
        { label: "Monthly Gross Revenue", value: "₹1.2L", icon: <DollarSign size={18} />, color: "orange", growth: "+8.4% Δ" },
        { label: "Real-time Occupancy", value: "42", icon: <Clock size={18} />, color: "orange", growth: "PEAK_STATUS" },
        { label: "Credential Expirations", value: "15", icon: <AlertCircle size={18} />, color: "red", growth: "CRITICAL_ACTION" },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* 1. Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                            System <span className="text-orange-500">Overview</span>
                        </h1>
                        <p className="text-gray-500 mt-2 font-mono text-xs uppercase tracking-[0.2em]">
                            Operator: Admin_01 // Node: Pune_HQ // Status: Online
                        </p>
                    </div>
                    <div className="flex gap-1">
                        <button className="flex items-center gap-2 bg-[#0A0A0A] border border-[#1A1A1A] text-gray-400 px-4 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest hover:text-white hover:bg-[#111] transition-all">
                            <Download size={14} /> Export Logs
                        </button>
                        <button className="flex items-center gap-2 bg-orange-500 text-black px-4 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-orange-400 transition-all">
                            <UserPlus size={14} strokeWidth={3} /> New Admission
                        </button>
                    </div>
                </div>

                {/* 2. Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-[#1A1A1A] border border-[#1A1A1A] mb-1">
                    {stats.map((item, i) => (
                        <div key={i} className="bg-[#0A0A0A] p-6 group hover:bg-[#0d0d0d] transition-colors">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2.5 bg-[#050505] border border-[#1A1A1A] text-orange-500 rounded-sm">
                                    {item.icon}
                                </div>
                                <span className={`font-mono text-[9px] font-black px-2 py-1 border rounded-sm ${item.color === 'red'
                                        ? 'border-red-900/50 bg-red-900/10 text-red-500'
                                        : 'border-orange-900/50 bg-orange-900/10 text-orange-500'
                                    }`}>
                                    {item.growth}
                                </span>
                            </div>
                            <h3 className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</h3>
                            <p className="text-3xl font-black text-white mt-2 tracking-tighter">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-1">

                    {/* 3. Revenue Analytics - Oscilloscope Style */}
                    <div className="lg:col-span-2 bg-[#0A0A0A] p-6 border border-[#1A1A1A]">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                                <TrendingUp className="text-orange-500" size={16} /> Financial Analytics
                            </h2>
                            <select className="bg-[#050505] border border-[#1A1A1A] text-[10px] font-black uppercase tracking-widest text-gray-400 rounded-sm px-3 py-1.5 outline-none focus:border-orange-500 transition-colors">
                                <option>Interval: 7 Days</option>
                                <option>Interval: 30 Days</option>
                            </select>
                        </div>

                        <div className="h-72 w-full bg-[#050505] border border-[#1A1A1A] rounded-sm flex items-center justify-center relative overflow-hidden group">
                            {/* Technical Grid Background */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none"
                                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', size: '20px 20px', backgroundSize: '30px 30px' }}>
                            </div>

                            <div className="text-gray-700 flex flex-col items-center z-10">
                                <BarChart3 className="w-10 h-10 mb-3 opacity-20 group-hover:text-orange-500 transition-colors" />
                                <p className="text-[10px] font-mono uppercase tracking-[0.3em]">Telemetry_Loading...</p>
                            </div>

                            {/* Stylized Data Bars */}
                            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-10 h-40 opacity-20">
                                {[40, 70, 55, 90, 65, 80, 45].map((h, i) => (
                                    <div key={i} className="w-6 bg-orange-500 rounded-t-sm transition-all duration-700 hover:opacity-100" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 4. Recent Transactions Log */}
                    <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A]">
                        <h2 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8">Transaction Logs</h2>
                        <div className="space-y-4">
                            {[
                                { user: "Amit R.", plan: "Yearly_Elite", amount: "₹12,000", time: "02H_AGO" },
                                { user: "Sonal V.", plan: "Monthly_Std", amount: "₹1,500", time: "05H_AGO" },
                                { user: "Karan P.", plan: "Quart_Pro", amount: "₹4,500", time: "1D_AGO" },
                                { user: "Priya M.", plan: "Monthly_Std", amount: "₹1,500", time: "1D_AGO" },
                                { user: "Rahul S.", plan: "Monthly_Std", amount: "₹1,500", time: "2D_AGO" },
                            ].map((sale, i) => (
                                <div key={i} className="flex items-center justify-between group p-2 hover:bg-[#050505] border border-transparent hover:border-[#1A1A1A] transition-all rounded-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 bg-[#111] border border-[#1A1A1A] flex items-center justify-center text-orange-500 font-black text-[10px]">
                                            {sale.user.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-white uppercase tracking-tight group-hover:text-orange-500 transition-colors">{sale.user}</p>
                                            <p className="text-[9px] text-gray-600 font-mono tracking-tighter uppercase">{sale.plan}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-black text-white tracking-tighter">{sale.amount}</p>
                                        <p className="text-[9px] text-orange-500/50 font-mono font-bold">{sale.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-3 bg-[#050505] border border-[#1A1A1A] text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                            Full Ledger Access <ArrowUpRight size={14} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
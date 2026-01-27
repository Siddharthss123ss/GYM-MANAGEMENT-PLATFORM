"use client";

import React, { useState } from "react";
import { Search, UserCheck, UserX, Clock, Calendar as CalendarIcon, ChevronRight } from "lucide-react";

const initialMembers = [
    { id: "1", name: "Rahul Sharma", plan: "Monthly", status: "Active", lastCheckIn: "Yesterday" },
    { id: "2", name: "Amit Verma", plan: "Yearly", status: "Active", lastCheckIn: "2 days ago" },
    { id: "3", name: "Priya Singh", plan: "Quarterly", status: "Expired", lastCheckIn: "1 week ago" },
];

const todayAttendance = [
    { id: "1", name: "Rahul Sharma", time: "07:30 AM", type: "Morning Slot" },
    { id: "2", name: "Suresh Raina", time: "08:15 AM", type: "Personal Training" },
];

export default function AttendancePage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                            Attendance <span className="text-orange-500">Control</span>
                        </h1>
                        <p className="text-gray-500 flex items-center gap-2 mt-2 font-mono text-xs uppercase tracking-widest">
                            <CalendarIcon size={14} className="text-orange-500" />
                            {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-[#0A0A0A] border border-[#1A1A1A] p-4 rounded-sm shadow-2xl">
                        <div className="text-right">
                            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Live Count</p>
                            <p className="text-3xl font-black text-white leading-none mt-1">{todayAttendance.length.toString().padStart(2, '0')}</p>
                        </div>
                        <div className="h-10 w-[1px] bg-[#1A1A1A] mx-2"></div>
                        <UserCheck className="text-orange-500" size={28} />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-1">

                    {/* Left Column: Mark Attendance */}
                    <div className="lg:col-span-2 space-y-1">
                        <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A]">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-white">
                                    <Search size={16} className="text-orange-500" /> Member Authentication
                                </h2>
                                <span className="text-[10px] text-gray-600 font-mono">SECURE_GATEWAY_V1</span>
                            </div>

                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="SEARCH NAME OR MEMBER ID..."
                                    className="w-full pl-12 pr-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-sm text-sm focus:border-orange-500 focus:outline-none transition-all font-mono placeholder:text-gray-700"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-500 transition-colors" size={18} />
                            </div>

                            {/* Search Results List */}
                            <div className="mt-8 space-y-1">
                                {initialMembers.map((member) => (
                                    <div key={member.id} className="p-3 bg-[#050505] border border-[#1A1A1A] flex items-center justify-between group hover:border-gray-700 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 bg-[#0A0A0A] border border-[#1A1A1A] flex items-center justify-center text-orange-500 font-black text-sm rounded-sm">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white uppercase tracking-tight">{member.name}</p>
                                                <p className="text-[10px] text-gray-500 font-mono mt-0.5 uppercase">
                                                    Plan: <span className="text-gray-300">{member.plan}</span> | Last: <span className="text-gray-300">{member.lastCheckIn}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            disabled={member.status !== 'Active'}
                                            className={`px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${member.status === 'Active'
                                                    ? 'bg-orange-500 text-black hover:bg-orange-400'
                                                    : 'bg-[#111] text-gray-700 border border-[#1A1A1A] cursor-not-allowed'
                                                }`}
                                        >
                                            <UserCheck size={14} /> Check-in
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: System Logs */}
                    <div className="space-y-1">
                        <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A]">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2 text-white">
                                <Clock size={16} className="text-orange-500" /> Entry Logs
                            </h2>
                            <div className="space-y-3">
                                {todayAttendance.map((log) => (
                                    <div key={log.id} className="flex items-center gap-4 p-3 bg-[#050505] border border-[#1A1A1A] rounded-sm relative overflow-hidden group">
                                        <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500 opacity-50"></div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold text-white uppercase">{log.name}</p>
                                            <p className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-tighter">{log.type}</p>
                                        </div>
                                        <p className="text-[10px] font-mono text-orange-500/80">{log.time}</p>
                                    </div>
                                ))}
                                <button className="w-full py-3 mt-4 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] border border-[#1A1A1A] hover:bg-white hover:text-black transition-all">
                                    Access Full Archives
                                </button>
                            </div>
                        </div>

                        {/* Expired Membership Alert - Critical System Alert Style */}
                        <div className="bg-[#0A0A0A] border border-red-900/30 p-6 rounded-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-1 bg-red-900/20 text-red-500 font-mono text-[8px] uppercase">Alert_System</div>
                            <div className="flex items-center gap-2 text-red-500 font-black text-xs uppercase tracking-widest mb-3">
                                <UserX size={16} /> Restricted Access
                            </div>
                            <p className="text-[11px] text-gray-500 uppercase leading-relaxed mb-5 font-medium tracking-tight">
                                3 Synchronized attempts detected from accounts with <span className="text-red-400">expired credentials</span>.
                            </p>
                            <button className="w-full py-2 bg-red-950/30 border border-red-900/50 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">
                                Review Interceptions
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
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
                            Member <span className="text-purple-600">Attendance</span>
                        </h1>
                        <p className="text-gray-400 flex items-center gap-2 mt-2 text-xs font-bold uppercase tracking-widest">
                            <CalendarIcon size={14} className="text-purple-600" />
                            {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-[#0A0A0A] border border-[#1A1A1A] p-4 rounded-none shadow-2xl">
                        <div className="text-right">
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">In Gym Now</p>
                            <p className="text-3xl font-black text-white leading-none mt-1">{todayAttendance.length.toString().padStart(2, '0')}</p>
                        </div>
                        <div className="h-10 w-[1px] bg-[#1A1A1A] mx-2"></div>
                        <UserCheck className="text-purple-600" size={28} />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-1 bg-[#1A1A1A] border border-[#1A1A1A]">

                    {/* Left Column: Mark Attendance */}
                    <div className="lg:col-span-2 bg-[#0A0A0A] p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-white">
                                <Search size={18} className="text-purple-600" /> Search Member
                            </h2>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="ENTER NAME OR MEMBER ID..."
                                className="w-full pl-12 pr-4 py-4 bg-[#050505] border border-[#1A1A1A] rounded-none text-sm focus:border-purple-600 focus:outline-none transition-all font-bold placeholder:text-gray-700 cursor-text"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-purple-600 transition-colors" size={20} />
                        </div>

                        {/* Search Results List */}
                        <div className="mt-8 space-y-2">
                            {initialMembers.map((member) => (
                                <div key={member.id} className="p-4 bg-[#050505] border border-[#1A1A1A] flex items-center justify-between group hover:border-purple-900/50 transition-colors cursor-default">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-[#0A0A0A] border border-[#1A1A1A] flex items-center justify-center text-purple-500 font-black text-lg">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-white uppercase tracking-tight">{member.name}</p>
                                            <p className="text-[11px] text-gray-500 font-bold mt-0.5 uppercase tracking-wide">
                                                Plan: <span className="text-gray-300">{member.plan}</span> • Last Visit: <span className="text-gray-300">{member.lastCheckIn}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        disabled={member.status !== 'Active'}
                                        className={`px-6 py-2.5 rounded-none text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 border-b-4 ${member.status === 'Active'
                                                ? 'bg-purple-700 text-white border-purple-900 hover:bg-purple-600 cursor-pointer'
                                                : 'bg-[#111] text-gray-700 border-[#1A1A1A] cursor-not-allowed opacity-50'
                                            }`}
                                    >
                                        <UserCheck size={16} /> Check-in
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Entry Logs & Alerts */}
                    <div className="space-y-1">
                        <div className="bg-[#0A0A0A] p-8 h-full border-l border-[#1A1A1A]">
                            <h2 className="text-sm font-black uppercase tracking-widest mb-8 flex items-center gap-2 text-white">
                                <Clock size={18} className="text-purple-600" /> Recent Entries
                            </h2>
                            <div className="space-y-4">
                                {todayAttendance.map((log) => (
                                    <div key={log.id} className="flex items-center gap-4 p-4 bg-[#050505] border border-[#1A1A1A] relative group cursor-pointer hover:bg-[#080808]">
                                        <div className="absolute left-0 top-0 h-full w-1 bg-purple-600"></div>
                                        <div className="flex-1">
                                            <p className="text-sm font-black text-white uppercase">{log.name}</p>
                                            <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase">{log.type}</p>
                                        </div>
                                        <p className="text-xs font-black text-purple-500">{log.time}</p>
                                    </div>
                                ))}
                                
                                {/* Expired Alert */}
                                <div className="mt-8 p-6 bg-red-950/10 border border-red-900/30 relative">
                                    <div className="flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest mb-3">
                                        <UserX size={18} /> Membership Alerts
                                    </div>
                                    <p className="text-[11px] text-gray-500 uppercase font-bold leading-relaxed mb-6">
                                        There are <span className="text-red-500">3 members</span> currently attempting to check in with expired plans.
                                    </p>
                                    <button className="w-full py-3 bg-transparent border border-red-900/50 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-900 hover:text-white transition-all cursor-pointer">
                                        View Blocked Entries
                                    </button>
                                </div>

                                <button className="w-full py-4 mt-4 text-[10px] text-gray-500 font-black uppercase tracking-widest border border-[#1A1A1A] hover:bg-white hover:text-black transition-all cursor-pointer">
                                    View Full History
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
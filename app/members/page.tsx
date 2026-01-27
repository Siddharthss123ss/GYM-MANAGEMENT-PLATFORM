"use client";

import React, { useState } from "react";
import {
    Users,
    UserPlus,
    Search,
    MoreVertical,
    Phone,
    CreditCard,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

const membersData = [
    { id: "GS-001", name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 98765 43210", plan: "Annual Gold", status: "Active", joinDate: "12 Jan 2024" },
    { id: "GS-002", name: "Sanya Malhotra", email: "sanya@example.com", phone: "+91 91234 56789", plan: "Monthly", status: "Expired", joinDate: "05 Dec 2023" },
    { id: "GS-003", name: "Vikram Singh", email: "vikram@example.com", phone: "+91 99887 76655", plan: "Quarterly", status: "Active", joinDate: "20 Jan 2024" },
    { id: "GS-004", name: "Anjali Gupta", email: "anjali@example.com", phone: "+91 88776 65544", plan: "Personal Training", status: "Active", joinDate: "15 Jan 2024" },
];

export default function MembersPage() {
    const [filter, setFilter] = useState("All");

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* 1. Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic flex items-center gap-3">
                            <Users className="text-orange-500" size={32} />
                            Member <span className="text-orange-500">Database</span>
                        </h1>
                        <p className="text-gray-500 mt-2 font-mono text-xs uppercase tracking-[0.2em]">
                            System Logs / Active Directory / Centralized Management
                        </p>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-orange-500 text-black px-6 py-3 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-orange-400 transition-all">
                        <UserPlus size={16} strokeWidth={3} /> Add New Member
                    </button>
                </div>

                {/* 2. Control Bar (Filters & Search) */}
                <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-1 flex flex-col lg:flex-row gap-1 mb-1">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="SEARCH BY UID, NAME, OR CONTACT..."
                            className="w-full pl-12 pr-4 py-3 bg-[#050505] border border-transparent focus:border-orange-500/50 outline-none text-xs font-mono uppercase tracking-widest transition-all placeholder:text-gray-700"
                        />
                    </div>

                    <div className="flex bg-[#050505]">
                        {["All", "Active", "Expired", "Trial"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all border-l border-[#1A1A1A] ${filter === tab
                                        ? "bg-orange-500 text-black"
                                        : "text-gray-500 hover:text-white hover:bg-[#111]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. Members Table */}
                <div className="bg-[#0A0A0A] border border-[#1A1A1A] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#111] border-b border-[#1A1A1A]">
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Credential / ID</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Subscription Plan</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Enrollment</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] text-right">Operations</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1A1A1A]">
                                {membersData.map((member) => (
                                    <tr key={member.id} className="hover:bg-[#050505] transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 bg-[#050505] border border-[#1A1A1A] flex items-center justify-center font-black text-orange-500 text-sm rounded-sm group-hover:border-orange-500/50">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white uppercase tracking-tight text-sm">{member.name}</p>
                                                    <p className="text-[10px] text-gray-600 font-mono uppercase tracking-tighter mt-0.5">{member.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                                <CreditCard size={14} className="text-orange-500/50" />
                                                {member.plan}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-block px-3 py-1 border text-[9px] font-black uppercase tracking-widest rounded-sm ${member.status === "Active"
                                                    ? "border-green-900/50 bg-green-900/10 text-green-500"
                                                    : "border-red-900/50 bg-red-900/10 text-red-500"
                                                }`}>
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-[11px] font-mono text-gray-500 uppercase">
                                            {member.joinDate}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-1">
                                                <button className="p-2 border border-[#1A1A1A] hover:bg-orange-500 hover:text-black transition-all text-gray-500 rounded-sm">
                                                    <Phone size={14} />
                                                </button>
                                                <button className="p-2 border border-[#1A1A1A] hover:bg-white hover:text-black transition-all text-gray-500 rounded-sm">
                                                    <MoreVertical size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 4. Footer Pagination */}
                    <div className="p-4 bg-[#111] border-t border-[#1A1A1A] flex flex-col sm:flex-row justify-between items-center gap-4">
                        <span className="text-[10px] uppercase font-bold text-gray-600 tracking-widest">
                            Showing <span className="text-white">04</span> of <span className="text-white">120</span> Records
                        </span>
                        <div className="flex gap-1">
                            <button className="px-3 py-2 bg-[#0A0A0A] border border-[#1A1A1A] text-gray-500 hover:text-white transition-all rounded-sm">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="px-3 py-2 bg-[#0A0A0A] border border-[#1A1A1A] text-gray-500 hover:text-white transition-all rounded-sm">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
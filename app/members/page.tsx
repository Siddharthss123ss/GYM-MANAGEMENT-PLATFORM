"use client";

import React, { useState, useMemo } from "react";
import { 
    Users, 
    UserPlus, 
    Search, 
    MoreVertical, 
    Phone, 
    CreditCard, 
    ChevronLeft, 
    ChevronRight,
    Mail,
    Filter
} from "lucide-react";

const membersData = [
    { id: "MEM-101", name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 98765 43210", plan: "Annual Gold", status: "Active", joinDate: "12 Jan 2024" },
    { id: "MEM-102", name: "Sanya Malhotra", email: "sanya@example.com", phone: "+91 91234 56789", plan: "Monthly Pass", status: "Expired", joinDate: "05 Dec 2023" },
    { id: "MEM-103", name: "Vikram Singh", email: "vikram@example.com", phone: "+91 99887 76655", plan: "Quarterly", status: "Active", joinDate: "20 Jan 2024" },
    { id: "MEM-104", name: "Anjali Gupta", email: "anjali@example.com", phone: "+91 88776 65544", plan: "Personal Training", status: "Active", joinDate: "15 Jan 2024" },
];

export default function MembersPage() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredMembers = useMemo(() => {
        return membersData.filter((member) => {
            const matchesSearch = 
                member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.id.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTab = filter === "All" || member.status === filter;
            return matchesSearch && matchesTab;
        });
    }, [filter, searchQuery]);

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                            Member <span className="text-purple-600">Database</span>
                        </h1>
                        <p className="text-gray-400 flex items-center gap-2 mt-2 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Users size={14} className="text-purple-600" />
                            Total Records: {membersData.length.toString().padStart(2, '0')}
                        </p>
                    </div>

                    <button className="cursor-pointer flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-black uppercase tracking-widest py-4 px-8 border-b-4 border-purple-900 transition-all active:scale-95">
                        <UserPlus size={18} />
                        Add New Member
                    </button>
                </div>

                {/* --- CONTROLS: SEARCH & TABS --- */}
                <div className="grid lg:grid-cols-3 gap-1 bg-[#1A1A1A] border border-[#1A1A1A] mb-8">
                    <div className="lg:col-span-2 bg-[#0A0A0A] p-1 relative flex items-center">
                        <Search className="absolute left-6 text-gray-600" size={20} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="SEARCH BY NAME OR ID..."
                            className="w-full pl-16 pr-4 py-5 bg-transparent border-none text-sm font-bold focus:outline-none placeholder:text-gray-700 uppercase tracking-widest cursor-text"
                        />
                    </div>
                    <div className="flex bg-[#0A0A0A] p-1">
                        {["All", "Active", "Expired"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                                    filter === tab 
                                    ? "bg-purple-700 text-white shadow-xl" 
                                    : "text-gray-500 hover:text-white"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- DATA TABLE --- */}
                <div className="bg-[#0A0A0A] border border-[#1A1A1A]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[#1A1A1A]">
                                    <th className="px-6 py-5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Full Identification</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Membership Plan</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Current Status</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Join Date</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1A1A1A]">
                                {filteredMembers.map((member) => (
                                    <tr key={member.id} className="group hover:bg-[#080808] transition-colors border-l-2 border-transparent hover:border-purple-600">
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 bg-[#050505] border border-[#1A1A1A] flex items-center justify-center text-purple-500 font-black">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-white uppercase tracking-tight">{member.name}</p>
                                                    <p className="text-[10px] text-gray-500 font-bold uppercase">{member.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-300 uppercase tracking-wide">
                                                <CreditCard size={14} className="text-purple-600" />
                                                {member.plan}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-widest border ${
                                                member.status === "Active" 
                                                ? "text-green-500 border-green-900/50 bg-green-950/10" 
                                                : "text-red-500 border-red-900/50 bg-red-950/10"
                                            }`}>
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-xs font-bold text-gray-500 uppercase tracking-tighter">
                                            {member.joinDate}
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <div className="flex justify-end gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                                                <button className="cursor-pointer p-2 border border-[#1A1A1A] hover:bg-purple-700 hover:text-white transition-all">
                                                    <Phone size={14} />
                                                </button>
                                                <button className="cursor-pointer p-2 border border-[#1A1A1A] hover:bg-white hover:text-black transition-all">
                                                    <Mail size={14} />
                                                </button>
                                                <button className="cursor-pointer p-2 border border-[#1A1A1A] hover:bg-white hover:text-black transition-all">
                                                    <MoreVertical size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* --- FOOTER: PAGINATION --- */}
                    <div className="p-6 bg-[#050505] border-t border-[#1A1A1A] flex flex-col sm:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                            Showing Records <span className="text-white">01 - {filteredMembers.length.toString().padStart(2, '0')}</span>
                        </p>
                        
                        <div className="flex items-center gap-1">
                            <button className="cursor-pointer h-10 w-10 flex items-center justify-center border border-[#1A1A1A] text-gray-500 hover:bg-purple-700 hover:text-white transition-all">
                                <ChevronLeft size={18} />
                            </button>
                            <div className="px-6 text-[10px] font-black text-white uppercase tracking-widest">Page 01</div>
                            <button className="cursor-pointer h-10 w-10 flex items-center justify-center border border-[#1A1A1A] text-gray-500 hover:bg-purple-700 hover:text-white transition-all">
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* System Label */}
                <p className="mt-8 text-[9px] text-gray-800 font-black uppercase tracking-[0.5em] text-center">
                    Standard Member Registry // Secure Access
                </p>
            </div>
        </div>
    );
}
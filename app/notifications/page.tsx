"use client";

import React, { useState } from "react";
import {
    Bell,
    ShieldAlert,
    CreditCard,
    UserPlus,
    Terminal,
    Trash2,
    CheckCheck,
    Radio
} from "lucide-react";

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: "security",
            title: "New Gym Node Pending",
            message: "Establishment 'PowerHouse Elite' is awaiting Super Admin verification.",
            time: "2 MIN AGO",
            unread: true,
            icon: <ShieldAlert size={18} />
        },
        {
            id: 2,
            type: "financial",
            title: "Revenue Milestone",
            message: "Daily collection exceeded ₹50,000 threshold across all nodes.",
            time: "1 HOUR AGO",
            unread: true,
            icon: <CreditCard size={18} />
        },
        {
            id: 3,
            type: "user",
            title: "Membership Expansion",
            message: "24 new members joined via the 'Yearly Pro' campaign.",
            time: "5 HOURS AGO",
            unread: false,
            icon: <UserPlus size={18} />
        },
        {
            id: 4,
            type: "system",
            title: "Database Optimization",
            message: "Automated cleanup of expired membership records completed.",
            time: "YESTERDAY",
            unread: false,
            icon: <Terminal size={18} />
        }
    ]);

    const markAllRead = () => {
        setNotifications(notifications.map(n => ({ ...n, unread: false })));
    };

    const deleteNotification = (id: number) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    const getTypeStyles = (type: string) => {
        switch (type) {
            case 'security': return 'text-red-500 border-red-900/50 bg-red-950/20';
            case 'financial': return 'text-purple-500 border-purple-900/50 bg-purple-950/20';
            default: return 'text-gray-400 border-[#1A1A1A] bg-[#050505]';
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Radio size={16} className="text-purple-600 animate-pulse" />
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Live Signal Feed</span>
                        </div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                            System <span className="text-purple-600">Logs</span>
                        </h1>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={markAllRead}
                            className="flex items-center gap-2 bg-transparent border border-[#1A1A1A] text-gray-400 px-5 py-3 rounded-none text-[10px] font-black uppercase tracking-widest hover:bg-[#111] hover:text-white transition-all cursor-pointer"
                        >
                            <CheckCheck size={14} /> Mark All Read
                        </button>
                    </div>
                </div>

                {/* Notifications List */}
                <div className="space-y-1 bg-[#1A1A1A] border border-[#1A1A1A]">
                    {notifications.length > 0 ? (
                        notifications.map((n) => (
                            <div
                                key={n.id}
                                className={`group flex items-start gap-6 p-6 transition-all relative overflow-hidden ${n.unread ? 'bg-[#0E0E0E]' : 'bg-[#0A0A0A]'
                                    }`}
                            >
                                {/* Side Indicator */}
                                {n.unread && (
                                    <div className="absolute left-0 top-0 h-full w-1 bg-purple-600" />
                                )}

                                {/* Icon Box */}
                                <div className={`mt-1 h-12 w-12 border flex items-center justify-center shrink-0 transition-colors ${getTypeStyles(n.type)}`}>
                                    {n.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className={`text-sm font-black uppercase tracking-tight ${n.unread ? 'text-white' : 'text-gray-400'}`}>
                                            {n.title}
                                        </h3>
                                        <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                                            {n.time}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xl">
                                        {n.message}
                                    </p>
                                </div>

                                {/* Actions */}
                                <button
                                    onClick={() => deleteNotification(n.id)}
                                    className="opacity-0 group-hover:opacity-100 p-2 text-gray-600 hover:text-red-500 transition-all cursor-pointer"
                                    title="Purge LogEntry"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="bg-[#0A0A0A] p-20 text-center">
                            <Bell className="mx-auto text-[#1A1A1A] mb-4" size={48} />
                            <p className="text-gray-600 font-black uppercase tracking-[0.3em] text-[10px]">No active signals in feed</p>
                        </div>
                    )}
                </div>

                {/* Footer Meta */}
                <div className="mt-8 flex justify-between items-center text-[9px] font-black text-gray-700 uppercase tracking-[0.2em]">
                    <p>Auto-Purge: Disabled</p>
                    <p>Feed Latency: 12ms</p>
                </div>

            </div>
        </div>
    );
}
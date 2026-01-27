"use client";

import React from "react";
import {
    Plus,
    Check,
    Trash2,
    Edit3,
    Zap,
    ShieldCheck,
    Crown,
    IndianRupee,
    Info
} from "lucide-react";

const plans = [
    {
        id: 1,
        name: "Monthly Starter",
        price: "1,499",
        duration: "30 DAYS ACCESS",
        features: ["Gym Floor Access", "Locker Room", "Free Orientation", "General Training"],
        icon: <Zap className="text-gray-500" size={20} />
    },
    {
        id: 2,
        name: "Quarterly Pro",
        price: "3,999",
        duration: "90 DAYS ACCESS",
        features: ["Gym Floor Access", "Locker Room", "1 PT Session/Month", "Diet Consultation", "Steam Bath"],
        icon: <ShieldCheck className="text-orange-500" size={20} />,
        popular: true
    },
    {
        id: 3,
        name: "Annual Elite",
        price: "11,999",
        duration: "365 DAYS ACCESS",
        features: ["Full Access 24/7", "Personal Locker", "Unlimited PT", "All Locations", "Diet & Supplement Plan"],
        icon: <Crown className="text-orange-500" size={20} />
    }
];

export default function PlansPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* 1. Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic flex items-center gap-3">
                            Membership <span className="text-orange-500">Infrastructure</span>
                        </h1>
                        <p className="text-gray-500 mt-2 font-mono text-xs uppercase tracking-[0.2em]">
                            Product Configuration / Subscription Management / Billing Cycles
                        </p>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-orange-500 text-black px-6 py-3 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-orange-400 transition-all">
                        <Plus size={16} strokeWidth={3} /> Create Tier
                    </button>
                </div>

                {/* 2. Plans Grid */}
                <div className="grid md:grid-cols-3 gap-1 bg-[#1A1A1A] border border-[#1A1A1A]">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-[#0A0A0A] p-8 transition-all duration-300 group ${plan.popular ? "ring-1 ring-inset ring-orange-500/50" : ""
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-orange-500 text-black px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em]">
                                    Most Popular
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-8">
                                <div className="w-10 h-10 bg-[#111] border border-[#1A1A1A] flex items-center justify-center rounded-sm">
                                    {plan.icon}
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 bg-[#050505] border border-[#1A1A1A] text-gray-500 hover:text-white transition-all">
                                        <Edit3 size={14} />
                                    </button>
                                    <button className="p-2 bg-[#050505] border border-[#1A1A1A] text-gray-500 hover:text-red-500 transition-all">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">{plan.name}</h3>
                            <p className="text-[10px] text-gray-500 font-mono mb-8 uppercase tracking-[0.15em]">{plan.duration}</p>

                            <div className="flex items-baseline gap-1 mb-8 border-y border-[#1A1A1A] py-4 bg-[#050505]/50 px-2">
                                <IndianRupee size={18} className="text-orange-500" />
                                <span className="text-4xl font-black text-white tracking-tighter">{plan.price}</span>
                                <span className="text-gray-600 text-[10px] uppercase font-bold tracking-widest ml-2">Final Amt</span>
                            </div>

                            <ul className="space-y-4 mb-10 min-h-[220px]">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[11px] text-gray-400 uppercase tracking-wide font-medium">
                                        <Check size={14} className="text-orange-500 shrink-0 mt-0.5" strokeWidth={3} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-sm border ${plan.popular
                                    ? "bg-orange-500 text-black border-orange-500 hover:bg-orange-400"
                                    : "bg-transparent text-gray-400 border-[#1A1A1A] hover:bg-white hover:text-black hover:border-white"
                                }`}>
                                Deploy to Account
                            </button>
                        </div>
                    ))}
                </div>

                {/* 3. Analysis Tip */}
                <div className="mt-1 border border-[#1A1A1A] bg-[#0A0A0A] p-4 flex items-center gap-4">
                    <div className="bg-orange-500/10 text-orange-500 p-2 border border-orange-500/20">
                        <Info size={18} />
                    </div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                        <strong className="text-gray-300">Market intelligence:</strong> Multi-month commitments show <span className="text-orange-500">22% higher</span> retention in metropolitan clusters. Recommendation: Bundle &quot;Elite&quot; with localized PT vouchers.
                    </p>
                </div>
            </div>
        </div>
    );
}
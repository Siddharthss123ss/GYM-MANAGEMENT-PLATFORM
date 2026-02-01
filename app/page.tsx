'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Users, Clock, ArrowRight, Play, Zap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [activeUsers, setActiveUsers] = useState(54290);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050505] text-gray-200 min-h-screen font-sans selection:bg-[#8b5cf6]/30">

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#8b5cf6]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-[10px] font-bold uppercase tracking-widest mb-6">
                <Zap size={12} fill="currentColor" /> The Next-Gen Fitness OS
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Master Your <br />
                <span className="text-[#8b5cf6] italic">Fitness Empire</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
                Streamline member management, automate billing, and track performance with GymVerse. The high-performance management platform for modern fitness businesses.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/dashboard" className="cursor-pointer px-8 py-4 bg-[#8b5cf6] text-white font-bold rounded-[4px] hover:bg-[#7c4dff] transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                  Launch Your Gym <ArrowRight size={18} />
                </Link>
                <Link href="/dashboard" className="cursor-pointer px-8 py-4 bg-[#0A0A0A] border border-[#1A1A1A] text-white font-bold rounded-[4px] hover:bg-[#111] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                  <Play size={16} fill="white" /> See the Magic
                </Link>
              </div>
            </div>

            {/* Live Metrics Feed Component */}
            <div className="mt-16 lg:mt-0 lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-md bg-[#0A0A0A] border border-[#1A1A1A] rounded-[12px] p-4 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Last 7 Days Growth</p>
                    <h4 className="text-2xl font-bold text-white tracking-tighter">
                      {activeUsers.toLocaleString()} <span className="text-[#8b5cf6] text-sm">↑</span>
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] text-green-500 font-bold uppercase tracking-tighter animate-pulse">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Live Feed
                  </div>
                </div>

                {/* 7-Day Bar Chart Simulation */}
                <div className="flex items-end justify-between gap-2 h-40 mb-4">
                  {[45, 62, 58, 75, 90, 82, 33].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                      <div 
                        className="w-full cursor-pointer bg-[#1A1A1A] group-hover:bg-[#8b5cf6] transition-all duration-500 rounded-t-sm relative"
                        style={{ height: `${height}px` }}
                      >
                        {i === 6 && <div className="absolute -top-1 left-0 w-full h-1 bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]" />}
                      </div>
                      <span className="text-[9px] text-zinc-600 font-bold">Day-{i + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#1A1A1A] flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full bg-[#1A1A1A] border border-[#050505] flex items-center justify-center text-[8px] font-bold">
                        {String.fromCharCode(66 + i)}
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-[#8b5cf6] border border-[#050505] flex items-center justify-center text-[8px] font-bold text-white">+12</div>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-medium">Just joined GymVerse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-[#050505] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { label: "Partner Gyms", value: "500+" },
            { label: "Active Members", value: "50k+" },
            { label: "Cities Reached", value: "100+" },
            { label: "Client Rating", value: "4.9/5" }
          ].map((stat, i) => (
            <div key={i} className="py-12 border-x border-[#1A1A1A] first:border-l-0 last:border-r-0 text-center group hover:bg-[#0A0A0A] transition-colors">
              <p className="text-4xl font-bold text-white group-hover:text-[#8b5cf6] transition-colors tracking-tight">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold text-[#8b5cf6] uppercase tracking-[0.4em] mb-4">Core Ecosystem</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Built to outperform <br /> legacy software.</h3>
            </div>
            <p className="text-zinc-500 max-w-xs text-sm leading-relaxed border-l border-[#1A1A1A] pl-6 italic">
              "Precision-engineered for reliability and speed. Manage your community without the friction."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Users size={20} />}
              title="Member Analytics"
              desc="Comprehensive digital health tracking and member profiles stored with bank-grade security."
            />
            <FeatureCard
              icon={<Clock size={20} />}
              title="Smart Check-In"
              desc="QR-based attendance system for seamless entry and automated peak-hour reporting."
            />
            <FeatureCard
              icon={<CheckCircle size={20} />}
              title="Automated Billing"
              desc="Intelligent payment reminders via WhatsApp and SMS to ensure zero revenue leakage."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureCard({ icon, title, desc }: FeatureProps) {
  return (
    <div className="p-10 bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#8b5cf6]/40 hover:bg-[#0c0c0c] transition-all duration-500 group rounded-[8px]">
      <div className="w-12 h-12 bg-[#050505] border border-[#1A1A1A] flex items-center justify-center mb-8 text-[#8b5cf6] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">{desc}</p>
    </div>
  );
}
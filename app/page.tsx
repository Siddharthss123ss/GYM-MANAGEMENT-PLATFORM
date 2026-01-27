import React from 'react';
import Link from 'next/link';
import { CheckCircle, BarChart3, Users, Clock, ArrowRight, Play } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[#050505] text-gray-200 min-h-screen font-sans selection:bg-orange-500/30">

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-[#1A1A1A] overflow-hidden">
        {/* Subtle Background Grid for Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                Scale Your Gym <br />
                <span className="text-orange-500">Smart & Digital</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
                Streamline member management, automate billing, and track attendance with Gymshim. The high-performance OS for modern fitness businesses.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-orange-500 text-black font-bold rounded-sm hover:bg-orange-400 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                  Get Started Free <ArrowRight size={18} />
                </button>
                <button className="px-6 py-3 bg-[#111] border border-[#222] text-white font-bold rounded-sm hover:bg-[#1A1A1A] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                  <Play size={16} fill="currentColor" /> Watch Demo
                </button>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-2/5 flex justify-center">
              <div className="relative w-full aspect-square max-w-md bg-[#0A0A0A] border border-[#1A1A1A] rounded-sm p-2 shadow-2xl">
                <div className="w-full h-full bg-[#111] border border-[#1A1A1A] flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />
                  <BarChart3 size={48} className="text-orange-500/20 group-hover:scale-110 transition-transform duration-700" />
                  <p className="mt-4 font-mono text-xs tracking-tighter text-gray-500 uppercase">System Analytics Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section - Industrial Grid */}
      <section className="bg-[#050505] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { label: "Active Gyms", value: "500+" },
            { label: "Daily Members", value: "50k+" },
            { label: "Global Cities", value: "100+" },
            { label: "User Rating", value: "4.8/5" }
          ].map((stat, i) => (
            <div key={i} className="py-10 border-x border-[#1A1A1A] first:border-l-0 last:border-r-0 text-center group hover:bg-[#0A0A0A] transition-colors">
              <p className="text-4xl font-black text-white group-hover:text-orange-500 transition-colors tracking-tighter">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-2 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-3">Core Infrastructure</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Everything you need to <br /> dominate the local market.</h3>
            </div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed border-l border-[#1A1A1A] pl-6">
              Engineered for speed and reliability. Manage your facility with zero friction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            <FeatureCard
              icon={<Users size={20} />}
              title="Member Management"
              desc="Digital health history, member profiles, and photo documentation stored securely."
            />
            <FeatureCard
              icon={<Clock size={20} />}
              title="Auto Attendance"
              desc="QR-based scanning system for real-time traffic tracking and automated logs."
            />
            <FeatureCard
              icon={<CheckCircle size={20} />}
              title="Fee Reminders"
              desc="Automated WhatsApp and SMS notifications for pending dues and renewals."
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
    <div className="p-8 bg-[#0A0A0A] border border-[#1A1A1A] hover:border-orange-500/50 transition-all duration-300 group">
      <div className="w-10 h-10 bg-[#111] border border-[#1A1A1A] flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{desc}</p>
    </div>
  );
}
"use client";

import Link from "next/link";
import { MoveLeft, Dumbbell, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 antialiased selection:bg-[#8b5cf6]/30">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative text-center">
        {/* Large 404 Text */}
        <h1 className="text-[150px] md:text-[200px] font-black text-white/5 leading-none tracking-tighter select-none">
          404
        </h1>
        
        {/* Floating Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-[#1a1a1a] p-5 rounded-2xl shadow-2xl rotate-12">
          <Dumbbell size={40} className="text-[#8b5cf6] drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
        </div>
      </div>

      <div className="mt-8 space-y-4 max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight italic">
          WRONG <span className="text-[#8b5cf6]">SET</span>, BRO.
        </h2>
        <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
          The page you're looking for doesn't exist or has been moved to a different rack. Let's get you back to the main floor.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/"
          className="group flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[11px] font-black px-8 py-4 rounded-[4px] tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(139,92,246,0.15)] active:scale-95"
        >
          <MoveLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Go Back
        </Link>
        
        <Link
          href="/support"
          className="flex items-center gap-2 text-zinc-400 hover:text-white text-[11px] font-bold px-8 py-4 tracking-[0.2em] uppercase transition-colors"
        >
          <Search size={16} />
          Report Issue
        </Link>
      </div>
    </div>
  );
}
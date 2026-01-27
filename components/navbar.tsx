"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X, User, Bell } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "DASHBOARD", href: "/dashboard" },
        { name: "MEMBERS", href: "/members" },
        { name: "ATTENDANCE", href: "/attendance" },
        { name: "PLANS", href: "/plans" },
    ];

    return (
        <nav className="bg-black border-b border-white/10 fixed w-full z-50 top-0 antialiased">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex justify-between h-14 items-center">

                    {/* Logo Section - Industrial Design */}
                    <div className="flex items-center gap-3">
                        <div className="border border-orange-600 p-1 rounded-none shadow-[2px_2px_0px_0px_rgba(234,88,12,1)]">
                            <Dumbbell className="text-orange-500 w-4 h-4" />
                        </div>
                        <span className="text-lg font-black text-white tracking-[0.2em] uppercase italic">
                            GYM<span className="text-orange-500">SHIM</span>
                        </span>
                    </div>

                    {/* Desktop Menu - High-Density SEO Friendly */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-bold text-zinc-500 hover:text-white tracking-[0.15em] transition-all duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side - Minimalist Interaction */}
                    <div className="hidden md:flex items-center gap-6">
                        <button className="text-zinc-500 hover:text-orange-500 transition-colors" aria-label="Notifications">
                            <Bell size={18} strokeWidth={2} />
                        </button>
                        
                        <div className="flex items-center gap-3 border-l border-white/10 pl-6 h-14">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-zinc-500 font-bold tracking-wider">STATUS</span>
                                <span className="text-[11px] text-white font-black tracking-tighter">ADMIN_01</span>
                            </div>
                            <div className="w-8 h-8 bg-zinc-900 border border-white/10 flex items-center justify-center rounded-none">
                                <User size={14} className="text-zinc-400" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown - Hard Edges */}
            {isOpen && (
                <div className="md:hidden bg-black border-b border-white/10">
                    <div className="px-6 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-sm font-bold text-zinc-400 hover:text-orange-500 tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
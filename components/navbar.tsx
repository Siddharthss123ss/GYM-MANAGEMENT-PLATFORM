"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
    Dumbbell, Menu, X, User, Bell,
    ChevronDown, LogOut, Settings, ArrowRight
} from "lucide-react";
import { useAuthStore } from "@/app/store/useAuthStore";
import { is } from "zod/locales";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const data = useAuthStore((s) => s.user);

    // Logic: If there is no data, user is NOT authenticated
    const isAuthenticated = !!data;

    const navLinks = [
        { name: "DASHBOARD", href: "/dashboard" },
        { name: "MEMBERS", href: "/members" },
        { name: "ATTENDANCE", href: "/attendance" },
        { name: "PLANS", href: "/plans" },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/signout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                window.location.href = "/signin";
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <nav className="bg-[#050505] border-b border-[#1a1a1a] fixed w-full z-50 top-0 antialiased">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex justify-between h-14 items-center">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="bg-[#8b5cf6] p-1.5 rounded-[4px] shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform group-hover:scale-105">
                            <Dumbbell className="text-white w-4 h-4" />
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight italic">
                            Gym<span className="text-[#8b5cf6]">Verse</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    {
                        isAuthenticated && (
                            <div className="hidden md:flex items-center space-x-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-[11px] font-semibold text-zinc-400 hover:text-[#8b5cf6] tracking-[0.1em] transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )
                    }

                    {/* Right Side - Auth Logic */}
                    <div className="hidden md:flex items-center gap-6">
                        {isAuthenticated ? (
                            <>
                                <button className="relative text-zinc-400 hover:text-white transition-colors" aria-label="Notifications">
                                    <Bell size={18} />
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full border-2 border-[#050505]"></span>
                                </button>

                                {/* Profile Dropdown */}
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="cursor-pointer flex items-center gap-3 border-l border-[#1a1a1a] pl-6 h-10 group focus:outline-none"
                                    >
                                        <div className="flex flex-col items-end justify-center">
                                            <span className="text-[10px] text-zinc-500 font-medium">Welcome,</span>
                                            <span className="text-[11px] text-white font-bold tracking-tight flex items-center gap-1">
                                                {data?.user?.name} <ChevronDown size={12} className={`text-zinc-600 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
                                            </span>
                                        </div>
                                        <div className={`w-8 h-8 bg-[#0a0a0a] border flex items-center justify-center rounded-[4px] transition-colors ${isProfileOpen ? 'border-[#8b5cf6] bg-[#8b5cf6]/10' : 'border-[#1a1a1a] group-hover:border-[#8b5cf6]/50'}`}>
                                            <User size={14} className={`${isProfileOpen ? 'text-[#8b5cf6]' : 'text-zinc-400 group-hover:text-[#8b5cf6]'}`} />
                                        </div>
                                    </button>

                                    {isProfileOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-[#0A0A0A] border border-[#1a1a1a] rounded-[4px] shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                                            <div className="px-4 py-2 border-b border-[#1a1a1a] mb-1">
                                                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Account</p>
                                            </div>
                                            <Link href="/user-profile" className="flex items-center gap-2 px-4 py-2 text-[11px] font-medium text-zinc-300 hover:bg-[#111] hover:text-[#8b5cf6] transition-colors">
                                                <Settings size={14} /> Settings
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="cursor-pointer w-full flex items-center gap-2 px-4 py-2 text-[11px] font-medium text-red-400 hover:bg-red-500/5 hover:text-red-500 transition-colors border-t border-[#1a1a1a] mt-1"
                                            >
                                                <LogOut size={14} /> Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link href="/signin" className="text-[11px] font-bold text-zinc-400 hover:text-white transition-colors tracking-widest">
                                    SIGN IN
                                </Link>
                                <Link
                                    href="/plans"
                                    className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[10px] font-black px-5 py-2 rounded-[4px] tracking-[0.15em] flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all active:scale-95"
                                >
                                    GET STARTED <ArrowRight size={14} strokeWidth={3} />
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-b border-[#1a1a1a] animate-in slide-in-from-top duration-300">
                    <div className="px-6 py-6 space-y-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-xs font-bold text-zinc-400 hover:text-[#8b5cf6] tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-4 border-t border-[#1a1a1a] flex flex-col gap-4">
                            {isAuthenticated ? (
                                <>
                                    <Link href="/user-profile" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                                        <User size={14} className="text-zinc-400" />
                                        <span className="text-xs text-white font-bold">My Profile</span>
                                    </Link>
                                    <button onClick={() => { handleLogout(); setIsOpen(false); }} className="flex items-center gap-3 text-red-400">
                                        <LogOut size={14} />
                                        <span className="text-xs font-bold">Logout</span>
                                    </button>
                                </>
                            ) : (
                                <Link
                                    href="/signup"
                                    className="w-full bg-[#8b5cf6] text-white text-center text-xs font-bold py-3 rounded-[4px] tracking-widest"
                                    onClick={() => setIsOpen(false)}
                                >
                                    GET STARTED
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, X, User, Bell,
    ChevronDown, LogOut, Settings, ArrowRight,
    Shield
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/app/store/useAuthStore";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const data = useAuthStore((s) => s.user);
    const isAuthenticated = !!data;

    const navLinks = [
        { name: "DASHBOARD", href: "/dashboard" },
        { name: "MEMBERS", href: "/members" },
        { name: "ATTENDANCE", href: "/attendance" },
        { name: "PLANS", href: "/plans" },
    ];

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

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
            const res = await fetch("/api/auth/signout", { method: "POST" });
            if (res.ok) window.location.href = "/signin";
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className="bg-[#050505]/80 backdrop-blur-md border-b border-[#1a1a1a] fixed w-full z-50 top-0 antialiased">
            <div className="max-w-[1536px] mx-auto px-8 md:px-12">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1 group">
                        <img src="/icon.png" alt="GymVerse Logo" className="w-12 h-12 invert rounded-full" />
                        <span className="text-xl font-black text-white tracking-tighter italic uppercase">
                            Gym<span className="text-[#8b5cf6]">Verse</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    {isAuthenticated && (
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`relative px-2 py-1 text-[11px] font-bold tracking-[0.15em] transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-dot"
                                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-[2px] bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6]"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    )}

                    {/* Right Side Actions (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        {isAuthenticated ? (
                            <>
                                <Link href="/notifications" className="cursor-pointer relative text-zinc-400 hover:text-white transition-colors p-2">
                                    <Bell size={20} strokeWidth={1.5} />
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#8b5cf6] rounded-full border-2 border-[#050505] animate-pulse"></span>
                                </Link>

                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="cursor-pointer flex items-center gap-4 pl-8 border-l border-zinc-800/50 group"
                                    >
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{data?.user?.role}</span>
                                            <span className="text-xs text-white font-semibold">
                                                {data?.user?.name}
                                            </span>
                                        </div>

                                        <div className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${isProfileOpen ? 'border-[#8b5cf6] scale-105' : 'border-zinc-800 group-hover:border-zinc-700'}`}>
                                            {data?.user?.image?.url ? (
                                                <img src={data.user.image?.url} alt="Profile" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-[#8b5cf6]">
                                                    <User size={18} />
                                                </div>
                                            )}
                                        </div>
                                        <ChevronDown size={14} className={`text-zinc-600 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute right-0 mt-4 w-56 bg-[#0A0A0A] border border-zinc-800 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2 z-50 overflow-hidden"
                                            >
                                                <div className="px-4 py-3 border-b border-zinc-900">
                                                    <p className="text-[11px] font-bold text-white truncate">{data?.user?.name}</p>
                                                    <p className="text-[10px] text-zinc-500 truncate">{data?.user?.email}</p>
                                                </div>
                                                <Link href="/user-profile" className="flex items-center gap-3 px-4 py-3 text-[11px] font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all">
                                                    <Settings size={14} /> Profile
                                                </Link>
                                                {
                                                    data?.user?.role === 'super_admin' && (
                                                        <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-[11px] font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all">
                                                            <Shield size={14} /> Admin
                                                        </Link>
                                                    )
                                                }
                                                <button
                                                    onClick={handleLogout}
                                                    className="cursor-pointer w-full flex items-center gap-3 px-4 py-3 text-[11px] font-bold text-red-500 hover:bg-red-500/5 transition-all border-t border-zinc-900 mt-1"
                                                >
                                                    <LogOut size={14} /> SIGN OUT
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </>
                        ) : (
                            <div className="hidden md:flex items-center gap-6">
                                <Link href="/signin" className="text-[11px] font-bold text-zinc-400 hover:text-white transition-colors tracking-[0.2em]">
                                    Sign-In
                                </Link>
                                <Link
                                    href="/plans"
                                    className="bg-white text-black text-[10px] font-black px-6 py-3 rounded-full tracking-[0.1em] flex items-center gap-2 hover:bg-[#8b5cf6] hover:text-white transition-all duration-300"
                                >
                                    GET STARTED <ArrowRight size={14} />
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 hover:bg-zinc-900 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#050505] border-b border-zinc-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {isAuthenticated ? (
                                <>
                                    <div className="flex items-center gap-4 pb-4 border-b border-zinc-900">
                                        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-[#8b5cf6] border border-zinc-800">
                                            {data?.user?.image?.url ? <img src={data.user.image.url} className="rounded-full" alt="avatar" /> : <User size={20} />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{data?.user?.name}</p>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Admin Account</p>
                                        </div>
                                    </div>
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`text-xs font-bold tracking-widest py-2 ${pathname === link.href ? "text-[#8b5cf6]" : "text-zinc-400"}`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <hr className="border-zinc-900" />
                                    <Link href="/user-profile" className="flex items-center gap-3 text-xs text-zinc-400 py-2">
                                        <Settings size={16} /> Settings
                                    </Link>
                                    <button onClick={handleLogout} className="flex items-center gap-3 text-xs text-red-500 font-bold py-2 text-left">
                                        <LogOut size={16} /> SIGN OUT
                                    </button>
                                </>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <Link href="/signin" className="text-center text-xs font-bold text-zinc-400 py-4 border border-zinc-800 rounded-xl">
                                        SIGN IN
                                    </Link>
                                    <Link href="/plans" className="text-center text-xs font-black bg-[#8b5cf6] text-white py-4 rounded-xl">
                                        GET STARTED
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
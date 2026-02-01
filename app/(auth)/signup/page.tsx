"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/validators/auth.validator";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupForm>({
        resolver: zodResolver(signupSchema),
    });

    async function onSubmit(data: SignupForm) {
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                router.push("/account-setup");
            }
        } catch (err) {
            console.error("Signup failed:", err);
        }
    }

    return (
        <main className="min-h-screen bg-[#050505] text-[#fafafa] flex items-center justify-center p-6 selection:bg-[#8b5cf6]/30">
            {/* Consistent Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
                 style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 w-full max-w-[400px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-[4px] shadow-2xl overflow-hidden">
                {/* Visual Identity Bar */}
                <div className="h-[1px] w-full bg-gradient-to-r from-[#800020] via-[#8b5cf6] to-[#800020]"></div>
                
                <div className="p-6">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold tracking-tight">Create Account</h1>
                        <p className="text-xs text-gray-500 mt-1.5">Join us today. Please fill in your details below.</p>
                    </header>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name Field */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-medium text-gray-400 ml-1">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#8b5cf6] transition-colors" size={16} />
                                <input 
                                    placeholder="Enter your name" 
                                    {...register("name")} 
                                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-10 py-2.5 rounded-[4px] outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-gray-700"
                                />
                            </div>
                            {errors.name && <p className="text-[10px] text-[#800020] mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-medium text-gray-400 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#8b5cf6] transition-colors" size={16} />
                                <input 
                                    type="email"
                                    placeholder="name@example.com" 
                                    {...register("email")} 
                                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-10 py-2.5 rounded-[4px] outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-gray-700"
                                />
                            </div>
                            {errors.email && <p className="text-[10px] text-[#800020] mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Mobile Field */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-medium text-gray-400 ml-1">Phone Number</label>
                            <div className="relative group">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#8b5cf6] transition-colors" size={16} />
                                <input 
                                    placeholder="+91 123-456-7890" 
                                    {...register("mobile")} 
                                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-10 py-2.5 rounded-[4px] outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-gray-700"
                                />
                            </div>
                            {errors.mobile && <p className="text-[10px] text-[#800020] mt-1">{errors.mobile.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-medium text-gray-400 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#8b5cf6] transition-colors" size={16} />
                                <input 
                                    type="password" 
                                    placeholder="Min. 8 characters" 
                                    {...register("password")} 
                                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-10 py-2.5 rounded-[4px] outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-gray-700"
                                />
                            </div>
                            {errors.password && <p className="text-[10px] text-[#800020] mt-1">{errors.password.message}</p>}
                        </div>

                        <button 
                            disabled={isSubmitting}
                            className="cursor-pointer w-full mt-4 bg-white text-black hover:bg-[#8b5cf6] hover:text-white py-2.5 text-sm font-semibold rounded-[4px] transition-all flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? "Creating account..." : (
                                <>
                                    Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-5 border-t border-[#1a1a1a] text-center">
                        <p className="text-xs text-gray-500">
                            Already have an account?{" "}
                            <Link href="/signin" className="text-[#8b5cf6] font-medium hover:underline underline-offset-4">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
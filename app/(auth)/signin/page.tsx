"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "@/lib/validators/auth.validator";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Mail, Phone, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

type SigninForm = z.infer<typeof signinSchema>;

export default function SigninPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninForm>({
        resolver: zodResolver(signinSchema),
    });

    async function onSubmit(data: SigninForm) {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const json = await res.json();

            if (res.ok) {
                if (json.profileCompleted) {
                    window.location.href = "/dashboard";
                } else {
                    router.push("/signup");
                }
            } else {
                console.error(json.message || "Signin failed");
            }
        } catch (error) {
            console.error("Connection error:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#050505] text-[#fafafa] flex items-center justify-center p-6 selection:bg-[#8b5cf6]/30">
            {/* Standardized Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
                 style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 w-full max-w-[400px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-[4px] shadow-2xl overflow-hidden">
                {/* Visual Accent Line */}
                <div className="h-[1px] w-full bg-gradient-to-r from-[#800020] via-[#8b5cf6] to-[#800020]"></div>
                
                <div className="p-6">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
                        <p className="text-xs text-gray-500 mt-1.5">Please enter your credentials to access your account.</p>
                    </header>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Email Input */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-medium text-gray-400 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#8b5cf6] transition-colors" size={16} />
                                <input 
                                    placeholder="name@example.com" 
                                    {...register("email")} 
                                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-10 py-2.5 rounded-[4px] outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-gray-700"
                                />
                            </div>
                        </div>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-[#1a1a1a]"></span></div>
                            <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-[#0a0a0a] px-2 text-gray-600">OR</span></div>
                        </div>

                        {/* Mobile Input */}
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
                        </div>

                        {/* Password Input */}
                        <div className="space-y-1 pt-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[11px] font-medium text-gray-400">Password</label>
                                <button type="button" className="text-[10px] text-[#8b5cf6] hover:underline">Forgot?</button>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#8b5cf6] transition-colors" size={16} />
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    {...register("password")} 
                                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-10 py-2.5 rounded-[4px] outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-gray-700"
                                />
                            </div>
                            {errors.password && <p className="text-[10px] text-[#800020] mt-1">{errors.password.message}</p>}
                        </div>

                        <button 
                            disabled={loading}
                            className="cursor-pointer w-full mt-6 bg-white text-black hover:bg-[#8b5cf6] hover:text-white py-2.5 text-sm font-semibold rounded-[4px] transition-all flex items-center justify-center gap-2 group"
                        >
                            {loading ? "Signing in..." : (
                                <>
                                    Sign In <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-5 border-t border-[#1a1a1a] text-center">
                        <p className="text-xs text-gray-500">
                            Don't have an account?{" "}
                            <Link href="/signup" className="text-[#8b5cf6] font-medium hover:underline underline-offset-4">
                                Create one
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
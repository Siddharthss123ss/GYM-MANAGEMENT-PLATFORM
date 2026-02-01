"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSetupSchema } from "@/lib/validators/auth.validator";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SetupForm = z.infer<typeof accountSetupSchema>;

export default function AccountSetupPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SetupForm>({
        resolver: zodResolver(accountSetupSchema),
    });

    async function onSubmit(data: SetupForm) {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/account-setup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                router.push("/");
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#050505] text-[#fafafa] flex items-center justify-center p-6">
            {/* Structural Pattern: Subtle grid that will be used in all sections */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 w-full max-w-[400px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-[4px] shadow-2xl">
                {/* Top Accent Line - Maroon to Purple Gradient */}
                <div className="h-[1px] w-full bg-gradient-to-r from-[#800020] via-[#8b5cf6] to-[#800020]"></div>

                <div className="p-5">
                    <div className="mb-6">
                        <h1 className="text-lg font-semibold tracking-tight">Account Configuration</h1>
                        <p className="text-[11px] text-[#666] mt-0.5">Enter your localized details to proceed.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-[#444] ml-1">State</label>
                                <input
                                    {...register("address.state")}
                                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-3 py-1.5 text-sm rounded-[3px] focus:outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-[#333]"
                                    placeholder="State"
                                />
                                {errors.address?.state && <p className="text-[9px] text-[#800020]">{errors.address.state.message}</p>}
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-[#444] ml-1">City</label>
                                <input
                                    {...register("address.city")}
                                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-3 py-1.5 text-sm rounded-[3px] focus:outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-[#333]"
                                    placeholder="City"
                                />
                                {errors.address?.city && <p className="text-[9px] text-[#800020]">{errors.address.city.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-[#444] ml-1">Pincode</label>
                            <input
                                type="number"
                                {...register("address.pincode", { valueAsNumber: true })}
                                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-3 py-1.5 text-sm rounded-[3px] focus:outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-[#333]"
                                placeholder="000000"
                            />
                            {errors.address?.pincode && <p className="text-[9px] text-[#800020]">{errors.address.pincode.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-[#444] ml-1">Street Address</label>
                            <input
                                {...register("address.street")}
                                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-3 py-1.5 text-sm rounded-[3px] focus:outline-none focus:border-[#8b5cf6]/50 transition-all placeholder:text-[#333]"
                                placeholder="Street info"
                            />
                            {errors.address?.street && <p className="text-[9px] text-[#800020]">{errors.address.street.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer w-full mt-2 bg-[#050505] border border-[#1a1a1a] hover:border-[#8b5cf6]/50 text-white text-[11px] font-bold uppercase tracking-[1px] py-2.5 rounded-[3px] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                        >
                            {/* Subtle hover effect for the button */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/10 to-[#8b5cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {loading ? "Syncing..." : "Finalize Setup"}
                        </button>
                    </form>
                </div>

                {/* Bottom decorative bar */}
                <div className="h-[1px] w-full bg-[#1a1a1a]"></div>
            </div>
        </main>
    );
}
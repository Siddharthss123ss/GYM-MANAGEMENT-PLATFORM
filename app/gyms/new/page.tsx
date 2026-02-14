"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Dumbbell,
    MapPin,
    ArrowRight,
    Info,
    Navigation,
    IndianRupee,
    Users
} from "lucide-react";

export default function AddGymPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        state: "",
        city: "",
        pincode: "",
        street: "",
        monthlyFee: "",
        capacity: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await fetch("/api/gyms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.name,
                address: {
                    state: form.state,
                    city: form.city,
                    pincode: Number(form.pincode),
                    street: form.street,
                },
                monthlyFee: Number(form.monthlyFee),
                capacity: Number(form.capacity),
            }),
        });

        if (res.ok) {
            router.push("/gyms/my");
        } else {
            setIsLoading(false);
        }
    };

    const inputStyles = "w-full bg-[#050505] border border-[#1A1A1A] text-gray-200 px-4 py-3 rounded-none text-sm focus:border-purple-600 focus:outline-none transition-all placeholder:text-gray-600 font-medium";
    const labelStyles = "text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2";

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-10 border-b border-[#1A1A1A] pb-8">
                    <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                        Register <span className="text-purple-600">Facility</span>
                    </h1>
                    <p className="text-gray-400 mt-2 font-medium">
                        Enter establishment details to join the network.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 md:p-12">
                    <div className="space-y-8">

                        {/* Section: Basic Info */}
                        <div>
                            <h2 className={labelStyles}><Info size={12} className="text-purple-500" /> Primary Information</h2>
                            <div className="grid grid-cols-1 gap-4">
                                <input
                                    name="name"
                                    placeholder="GYM NAME (E.G. TITAN FITNESS)"
                                    onChange={handleChange}
                                    className={inputStyles}
                                    required
                                />
                            </div>
                        </div>

                        {/* Section: Location */}
                        <div>
                            <h2 className={labelStyles}><MapPin size={12} className="text-purple-500" /> Location Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="street" placeholder="STREET ADDRESS" onChange={handleChange} className={inputStyles} />
                                <input name="city" placeholder="CITY" onChange={handleChange} className={inputStyles} />
                                <input name="state" placeholder="STATE" onChange={handleChange} className={inputStyles} />
                                <input name="pincode" placeholder="PINCODE" onChange={handleChange} className={inputStyles} />
                            </div>
                        </div>

                        {/* Section: Operations */}
                        <div>
                            <h2 className={labelStyles}><Navigation size={12} className="text-purple-500" /> Operational Metrics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"><IndianRupee size={14} /></span>
                                    <input name="monthlyFee" placeholder="MONTHLY FEE" onChange={handleChange} className={`${inputStyles} pl-10`} />
                                </div>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"><Users size={14} /></span>
                                    <input name="capacity" placeholder="MAX CAPACITY" onChange={handleChange} className={`${inputStyles} pl-10`} />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-3 bg-purple-700 text-white px-8 py-4 rounded-none text-xs font-black uppercase tracking-widest hover:bg-purple-600 transition-all border-b-4 border-purple-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Processing..." : (
                                    <>
                                        Establish Gym <ArrowRight size={16} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </form>

                {/* Footer Note */}
                <p className="mt-6 text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                    Ensuring all data provided is verified against local regulations.
                </p>

            </div>
        </div>
    );
}
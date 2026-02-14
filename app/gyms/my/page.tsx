import React from "react";
import { cookies } from "next/headers";
import { 
    Dumbbell, 
    MapPin, 
    ShieldCheck, 
    CreditCard, 
    ChevronRight, 
    Plus 
} from "lucide-react";
import Link from "next/link";

async function getGyms() {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join("; ");

    // For Server Components, ensure the URL is absolute
    const res = await fetch("http://localhost:3000/api/gyms", {
        headers: {
            Cookie: cookieHeader,
        },
        cache: "no-store",
    });

    if (!res.ok) return [];

    return res.json();
}

export default async function MyGymsPage() {
    const gyms = await getGyms();

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                            My <span className="text-purple-600">Establishments</span>
                        </h1>
                        <p className="text-gray-400 mt-2 font-medium">
                            Manage and monitor your registered fitness centers.
                        </p>
                    </div>
                    <Link href='/gyms/new' className="flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-none text-xs font-bold uppercase tracking-wider hover:bg-purple-600 transition-all border-b-4 border-purple-900 cursor-pointer w-fit">
                        <Plus size={16} /> Register New Gym
                    </Link>
                </div>

                {/* Empty State */}
                {gyms.length === 0 && (
                    <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-20 text-center">
                        <Dumbbell className="mx-auto text-[#222] mb-4" size={48} />
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">No gyms added yet.</p>
                    </div>
                )}

                {/* Gyms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-[#1A1A1A] border border-[#1A1A1A]">
                    {gyms.map((gym: any) => (
                        <div 
                            key={gym._id} 
                            className="bg-[#0A0A0A] p-8 hover:bg-[#0E0E0E] transition-all group cursor-pointer relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="h-12 w-12 bg-[#050505] border border-[#1A1A1A] flex items-center justify-center text-purple-500">
                                    <Dumbbell size={24} />
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 border ${
                                    gym.verificationStatus === 'verified' 
                                    ? 'border-purple-900/50 bg-purple-950/30 text-purple-500' 
                                    : 'border-red-900/50 bg-red-950/30 text-red-500'
                                }`}>
                                    {gym.verificationStatus.toUpperCase()}
                                </span>
                            </div>

                            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-purple-400 transition-colors">
                                {gym.name}
                            </h2>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <MapPin size={14} className="text-purple-600" />
                                    <span className="text-xs font-bold uppercase tracking-wide">{gym.address.city}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <CreditCard size={14} className="text-purple-600" />
                                    <span className="text-xs font-bold uppercase tracking-wide">₹{gym.monthlyFee} / Month</span>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-[#1A1A1A] flex justify-between items-center">
                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Manage Assets</span>
                                <ChevronRight size={18} className="text-purple-500 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
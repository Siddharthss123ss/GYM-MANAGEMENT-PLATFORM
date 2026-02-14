"use client";

import { useEffect, useState } from "react";
import {
    ShieldCheck,
    XCircle,
    MapPin,
    Clock,
    Building2,
    Search,
    AlertTriangle
} from "lucide-react";

export default function VerificationPage() {
    const [gyms, setGyms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/gyms")
            .then(res => res.json())
            .then(data => {
                const pending = data.filter((g: any) => g.verificationStatus === "pending");
                setGyms(pending);
                setLoading(false);
            });
    }, []);

    const handleVerify = async (id: string, status: "approved" | "rejected") => {
        const res = await fetch(`/api/gyms/verify/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });

        if (!res.ok) {
            const error = await res.json();
            alert(error.message);
            return;
        }

        setGyms(prev => prev.filter((g: any) => g._id !== id));
    };


    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                            Verification <span className="text-purple-600">Queue</span>
                        </h1>
                        <p className="text-gray-400 mt-2 font-medium flex items-center gap-2">
                            <Clock size={16} className="text-purple-500" />
                            {gyms.length} establishments awaiting administrative authorization.
                        </p>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                        <input
                            type="text"
                            placeholder="SEARCH REQUESTS..."
                            className="bg-[#0A0A0A] border border-[#1A1A1A] text-[10px] font-bold tracking-widest text-white px-10 py-3 rounded-none focus:border-purple-600 outline-none w-64"
                        />
                    </div>
                </div>

                {/* Main Content */}
                {gyms.length === 0 && !loading ? (
                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-20 text-center">
                        <ShieldCheck className="mx-auto text-[#1A1A1A] mb-4" size={64} />
                        <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-sm">Clearance Complete: No Pending Requests</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto border border-[#1A1A1A]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#0A0A0A] border-b border-[#1A1A1A]">
                                    <th className="p-5 text-[10px] font-black text-gray-500 uppercase tracking-widest">Establishment</th>
                                    <th className="p-5 text-[10px] font-black text-gray-500 uppercase tracking-widest">Location</th>
                                    <th className="p-5 text-[10px] font-black text-gray-500 uppercase tracking-widest">Request ID</th>
                                    <th className="p-5 text-[10px] font-black text-gray-500 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1A1A1A]">
                                {gyms.map((gym: any) => (
                                    <tr key={gym._id} className="bg-[#050505] hover:bg-[#0A0A0A] transition-colors group">
                                        <td className="p-5">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 bg-[#0A0A0A] border border-[#1A1A1A] flex items-center justify-center text-purple-500">
                                                    <Building2 size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors">{gym.name}</p>
                                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Status: Pending_Review</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <MapPin size={14} className="text-purple-600" />
                                                <span className="text-xs font-bold uppercase">{gym.address.city}, {gym.address.state}</span>
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <span className="font-mono text-[10px] text-gray-600">ID_{gym._id.slice(-8).toUpperCase()}</span>
                                        </td>
                                        <td className="p-5">
                                            <div className="flex gap-2 justify-end">
                                                <button
                                                    onClick={() => handleVerify(gym._id, "approved")}
                                                    className="flex items-center gap-2 bg-purple-700/10 border border-purple-700/30 text-purple-500 px-4 py-2 rounded-none text-[10px] font-black uppercase tracking-widest hover:bg-purple-700 hover:text-white transition-all cursor-pointer"
                                                >
                                                    <ShieldCheck size={14} /> Authorize
                                                </button>
                                                <button
                                                    onClick={() => handleVerify(gym._id, "rejected")}
                                                    className="flex items-center gap-2 bg-red-900/10 border border-red-900/30 text-red-500 px-4 py-2 rounded-none text-[10px] font-black uppercase tracking-widest hover:bg-red-700 hover:text-white transition-all cursor-pointer"
                                                >
                                                    <XCircle size={14} /> Deny
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Terminal Status Bar */}
                <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                            System Live
                        </div>
                    </div>
                    <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest flex items-center gap-2">
                        <AlertTriangle size={12} /> Operations are logged and permanent.
                    </p>
                </div>
            </div>
        </div>
    );
}
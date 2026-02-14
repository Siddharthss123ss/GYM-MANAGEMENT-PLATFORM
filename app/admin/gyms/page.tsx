import { cookies } from "next/headers";
import { 
    Dumbbell, 
    MapPin, 
    User, 
    Globe, 
    ChevronRight, 
    ShieldCheck, 
    ShieldAlert, 
    ShieldQuestion,
    Activity
} from "lucide-react";

async function getGyms() {
    const cookieStore = await cookies();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    
    try {
        const res = await fetch(`${baseUrl}/api/gyms`, {
            headers: {
                Cookie: cookieStore.getAll().map(c => `${c.name}=${c.value}`).join("; "),
            },
            cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch node data");
        return res.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
}

export default async function AdminGymsPage() {
    const gyms = await getGyms();

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'approved': return { color: 'text-purple-500', border: 'border-purple-900/50', bg: 'bg-purple-950/20', icon: <ShieldCheck size={12} /> };
            case 'pending': return { color: 'text-yellow-500', border: 'border-yellow-900/50', bg: 'bg-yellow-950/20', icon: <ShieldQuestion size={12} /> };
            case 'rejected': return { color: 'text-red-500', border: 'border-red-900/50', bg: 'bg-red-950/20', icon: <ShieldAlert size={12} /> };
            default: return { color: 'text-gray-500', border: 'border-gray-800', bg: 'bg-gray-900/20', icon: <Activity size={12} /> };
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Globe size={18} className="text-purple-600" />
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Global Network Inventory</span>
                        </div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                            All <span className="text-purple-600">Registered Nodes</span>
                        </h1>
                    </div>
                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] px-6 py-3 flex gap-8">
                        <div className="text-center">
                            <p className="text-[10px] font-bold text-gray-600 uppercase">Total</p>
                            <p className="text-xl font-black text-white">{gyms.length}</p>
                        </div>
                        <div className="text-center border-l border-[#1A1A1A] pl-8">
                            <p className="text-[10px] font-bold text-gray-600 uppercase">Active</p>
                            <p className="text-xl font-black text-purple-500">{gyms.filter((g: any) => g.verificationStatus === 'approved').length}</p>
                        </div>
                    </div>
                </div>

                {/* Gyms Inventory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-[#1A1A1A] border border-[#1A1A1A]">
                    {gyms.map((gym: any) => {
                        const style = getStatusStyles(gym.verificationStatus);
                        return (
                            <div key={gym._id} className="bg-[#0A0A0A] p-6 hover:bg-[#0E0E0E] transition-all group relative">
                                {/* Header Info */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="h-10 w-10 bg-[#050505] border border-[#1A1A1A] flex items-center justify-center text-gray-500 group-hover:text-purple-500 transition-colors">
                                        <Dumbbell size={20} />
                                    </div>
                                    <span className={`flex items-center gap-1.5 text-[9px] font-black px-2 py-1 border ${style.border} ${style.bg} ${style.color} uppercase tracking-widest`}>
                                        {style.icon} {gym.verificationStatus}
                                    </span>
                                </div>

                                {/* Main Details */}
                                <h2 className="text-lg font-black text-white uppercase tracking-tight mb-4 group-hover:text-purple-400 transition-colors truncate">
                                    {gym.name}
                                </h2>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-gray-500">
                                        <MapPin size={14} className="text-purple-600" />
                                        <span className="text-[11px] font-bold uppercase tracking-wider">{gym.address.city}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-500">
                                        <User size={14} className="text-purple-600" />
                                        <span className="text-[11px] font-bold uppercase tracking-wider">Admin: {gym.adminId?.name || "System"}</span>
                                    </div>
                                </div>

                                {/* Link to Detailed Records */}
                                <div className="pt-5 border-t border-[#1A1A1A] flex justify-between items-center group/btn cursor-pointer">
                                    <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em]">View Full Manifest</span>
                                    <div className="text-purple-600 transform group-hover/btn:translate-x-1 transition-transform">
                                        <ChevronRight size={16} />
                                    </div>
                                </div>

                                {/* Identification Tag */}
                                <div className="absolute top-0 left-0 w-1 h-0 bg-purple-600 group-hover:h-full transition-all duration-300" />
                            </div>
                        );
                    })}
                </div>

                {/* System Message */}
                <div className="mt-12 p-4 border border-dashed border-[#222] text-center">
                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em]">End of Global Registry Manifest</p>
                </div>

            </div>
        </div>
    );
}
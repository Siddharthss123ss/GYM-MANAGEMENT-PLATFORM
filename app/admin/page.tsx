import Link from "next/link";
import { 
    ShieldAlert, 
    Dumbbell, 
    Users, 
    ArrowUpRight, 
    Plus, 
    LayoutDashboard, 
    Activity 
} from "lucide-react";

export default function AdminDashboardPage() {
    const adminActions = [
        {
            title: "Gym Verification",
            desc: "Approve or reject newly submitted gym nodes.",
            href: "/admin/verification",
            icon: <ShieldAlert size={20} />,
            accent: "purple"
        },
        {
            title: "Global Inventory",
            desc: "Monitor and audit every gym on the platform.",
            href: "/admin/gyms",
            icon: <Dumbbell size={20} />,
            accent: "purple"
        },
        {
            title: "User Control",
            desc: "Modify access tiers and manage user permissions.",
            href: "/admin/users",
            icon: <Users size={20} />,
            accent: "purple"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#1A1A1A] pb-8">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                            Super <span className="text-purple-600">Admin</span> Control
                        </h1>
                        <p className="text-gray-400 mt-2 font-medium flex items-center gap-2">
                            <Activity size={16} className="text-purple-500" /> System-wide administrative authorization required.
                        </p>
                    </div>
                    <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        <span>Status: <span className="text-purple-500">Active</span></span>
                        <span className="border-l border-[#1A1A1A] pl-4">Terminal: <span className="text-purple-500">Node_01</span></span>
                    </div>
                </div>

                {/* Admin Controls Grid */}
                <section className="mb-16">
                    <h2 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                        <LayoutDashboard size={14} className="text-purple-600" /> Main Command Modules
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#1A1A1A] border border-[#1A1A1A]">
                        {adminActions.map((action, i) => (
                            <Link
                                key={i}
                                href={action.href}
                                className="bg-[#0A0A0A] p-8 hover:bg-[#0E0E0E] transition-all group relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-10">
                                    <div className="h-12 w-12 bg-[#050505] border border-[#1A1A1A] flex items-center justify-center text-purple-500 group-hover:border-purple-600/50 transition-colors">
                                        {action.icon}
                                    </div>
                                    <ArrowUpRight size={20} className="text-[#222] group-hover:text-purple-600 transition-colors" />
                                </div>
                                
                                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    {action.desc}
                                </p>

                                {/* Hover Bar */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Footer System Status */}
                <div className="mt-20 pt-8 border-t border-[#1A1A1A]">
                    <div className="flex justify-between items-center opacity-30 grayscale hover:grayscale-0 transition-all">
                         <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                            Encryption: AES-256 Enabled
                         </div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                            © 2026 Platform Authority
                         </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
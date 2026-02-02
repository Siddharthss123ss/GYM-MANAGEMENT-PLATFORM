"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import { AlertCircle } from "lucide-react";
import ProfileHeader from "./header.section";
import AccountDetails from "./account.section";
import AddressSection from "./address.section";

export default function ProfilePage() {
  const data = useAuthStore((s) => s.user);

  if (!data) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-6 antialiased">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Profile Completion Alert */}
        {!data?.user?.profileCompleted && (
          <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-[#8b5cf6]" size={20} />
              <div>
                <p className="text-sm font-bold">PROFILE INCOMPLETE</p>
                <p className="text-xs text-zinc-400 font-medium">Please add your address and profile picture to unlock all features.</p>
              </div>
            </div>
            <button className="bg-[#8b5cf6] text-white text-[10px] font-black px-4 py-2 rounded uppercase tracking-widest hover:bg-[#7c3aed] transition-colors">
              Complete Now
            </button>
          </div>
        )}

        {/* Top Section Component */}
        <ProfileHeader user={data?.user} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bottom Left Component */}
          <AccountDetails user={data?.user} />
          
          {/* Bottom Right Component */}
          <AddressSection address={data?.user?.address} />
        </div>
      </div>
    </div>
  );
}
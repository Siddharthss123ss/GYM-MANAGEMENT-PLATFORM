import { Mail, Phone, User as UserIcon } from "lucide-react";

export default function AccountDetails({ user }: { user: any }) {
  return (
    <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 rounded-xl">
      <h3 className="text-[#8b5cf6] text-[11px] font-black tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
        <UserIcon size={14} /> Account Details
      </h3>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-lg border border-[#1a1a1a]">
            <Mail size={16} className="text-zinc-500" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase mb-0.5">Verified Email</p>
            <p className="text-sm font-medium">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-lg border border-[#1a1a1a]">
            <Phone size={16} className="text-zinc-500" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase mb-0.5">Mobile Number</p>
            <p className="text-sm font-medium">{user.mobile}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
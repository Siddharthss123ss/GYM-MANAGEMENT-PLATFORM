import { Edit3, Camera, CheckCircle2 } from "lucide-react";

export default function ProfileHeader({ user }: { user: any }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl relative">
      <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#8b5cf6] bg-zinc-900 flex items-center justify-center">
          {user.image?.url ? (
            <img src={user.image.url} className="w-full h-full object-cover" alt="Profile" />
          ) : (
            <Camera size={32} className="text-zinc-700" />
          )}
        </div>
        <button className="absolute bottom-1 right-1 bg-[#8b5cf6] p-2 rounded-full border-2 border-[#0a0a0a] hover:scale-110 transition-transform">
          <Edit3 size={14} />
        </button>
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">{user.name}</h1>
          <span className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-widest rounded-full w-fit mx-auto md:mx-0">
            {user.role}
          </span>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest">
          <CheckCircle2 size={14} /> {user.status}
        </div>
      </div>
    </div>
  );
}
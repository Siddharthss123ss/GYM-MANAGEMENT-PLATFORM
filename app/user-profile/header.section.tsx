"use client";

import {
  Camera,
  Loader,
  Trash2,
  ShieldCheck,
  User,
} from "lucide-react";
import { useRef, useState } from "react";

export default function ProfileHeader({ user }: { user: any }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(user.image?.url || null);

  const uploadImage = async (file: File) => {
    if (file.size > 2 * 1024 * 1024) {
      alert("Max size 2MB");
      return;
    }

    try {
      setLoading(true);
      const fd = new FormData();
      fd.append("file", file);

      const res = await fetch("/api/auth/me/profile-pic", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setImage(data.image.url);
    } catch {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async () => {
    if (!confirm("Remove profile picture?")) return;

    try {
      setLoading(true);
      await fetch("/api/auth/me/profile-pic", { method: "DELETE" });
      setImage(null);
    } catch {
      alert("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center gap-10 p-10 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl overflow-hidden">
      {/* Background Accent Deco */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/5 blur-[60px] pointer-events-none" />

      {/* Avatar Section */}
      <div className="relative group/avatar">
        <div className="w-36 h-36 rounded-full p-1 border border-[#1a1a1a] bg-[#050505] shadow-2xl relative">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#8b5cf6]/20 bg-zinc-900 flex items-center justify-center">

            {/* The Image/User Icon */}
            {image ? (
              <img src={image} className="w-full h-full object-cover" alt="Profile" />
            ) : (
              <User size={40} className="text-zinc-700" />
            )}

            {/* Hover Overlay - Pure CSS handling visibility */}
            <div
              onClick={() => fileRef.current?.click()}
              className="absolute inset-0 bg-black/60 opacity-0 group-hover/avatar:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
            >
              <Camera size={28} className="text-white mb-1" />
              <span className="text-[9px] font-bold uppercase tracking-tighter text-white">Change</span>
            </div>

            {/* Loading Spinner */}
            {loading && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center z-20">
                <Loader className="animate-spin text-[#8b5cf6]" size={24} />
              </div>
            )}
          </div>
        </div>

        {/* Delete Button - Positioned outside the main circle for clarity */}
        {image && !loading && (
          <button
            onClick={deleteImage}
            title="Remove Image"
            className="cursor-pointer absolute -top-1 -right-1 bg-black border border-[#1a1a1a] hover:border-red-500/50 p-2 rounded-full text-zinc-500 hover:text-red-500 transition-all shadow-xl z-30"
          >
            <Trash2 size={12} />
          </button>
        )}

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => e.target.files && uploadImage(e.target.files[0])}
        />
      </div>

      {/* Info Section */}
      <div className="flex-1 text-center md:text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] mb-2">
          <ShieldCheck size={12} />
          <span className="text-[10px] font-black uppercase tracking-widest">{user.role || 'Member'}</span>
        </div>

        <h1 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
          {user.name}
        </h1>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <div className="flex items-center gap-2 text-emerald-500/90 text-[11px] font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {user.status || 'Active'}
          </div>

          <div className="h-1 w-1 rounded-full bg-zinc-800 hidden md:block" />

          <div className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
            Member Since {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
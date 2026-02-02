"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSetupSchema } from "@/lib/validators/auth.validator";
import { z } from "zod";
import { MapPin, Plus, Save, X, Loader2, Pencil } from "lucide-react";

type SetupForm = z.infer<typeof accountSetupSchema>;

export default function AddressSection({ address, onUpdate }: any) {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetupForm>({
    resolver: zodResolver(accountSetupSchema),
    defaultValues: { address }, 
  });

  const onSubmit = async (data: SetupForm) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/account-setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsEditing(false);
        if (onUpdate) onUpdate(); 
      }
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 rounded-xl min-h-[220px] transition-all relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[#8b5cf6] text-[11px] font-black tracking-[0.2em] uppercase flex items-center gap-2">
          <MapPin size={14} /> Gym Location
        </h3>
        
        {/* Toggle Button: Shows Pencil if viewing, X if editing */}
        {!isEditing ? (
          address?.city && (
            <button 
              onClick={() => setIsEditing(true)}
              className="cursor-pointer p-1.5 rounded-md bg-white/5 border border-white/10 hover:border-[#8b5cf6]/50 hover:text-[#8b5cf6] transition-all"
              title="Edit Address"
            >
              <Pencil size={12} />
            </button>
          )
        ) : (
          <button 
            onClick={() => setIsEditing(false)}
            className="cursor-pointer p-1.5 rounded-md text-zinc-500 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {!isEditing ? (
        <>
          {address?.city ? (
            <div className="space-y-1">
              <p className="text-sm font-medium">{address.street}</p>
              <p className="text-sm text-zinc-400">{address.city}, {address.state}</p>
              <p className="text-xs text-zinc-600 font-bold tracking-widest mt-2">{address.pincode}</p>
            </div>
          ) : (
            <div 
              onClick={() => setIsEditing(true)}
              className="cursor-pointer flex-1 flex flex-col items-center justify-center border-2 border-dashed border-[#1a1a1a] rounded-lg p-8 group hover:border-[#8b5cf6]/30 transition-all"
            >
              <Plus size={20} className="text-zinc-600 group-hover:text-[#8b5cf6] mb-2" />
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Add Address</p>
            </div>
          )}
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 animate-in slide-in-from-bottom-2 duration-300">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[9px] uppercase font-bold text-[#444] ml-1">State</label>
              <input
                {...register("address.state")}
                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-3 py-1.5 text-sm rounded-[3px] focus:outline-none focus:border-[#8b5cf6]/50 transition-all"
                placeholder="State"
              />
              {errors.address?.state && <p className="text-[9px] text-[#800020]">{errors.address.state.message}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[9px] uppercase font-bold text-[#444] ml-1">City</label>
              <input
                {...register("address.city")}
                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-3 py-1.5 text-sm rounded-[3px] focus:outline-none focus:border-[#8b5cf6]/50 transition-all"
                placeholder="City"
              />
              {errors.address?.city && <p className="text-[9px] text-[#800020]">{errors.address.city.message}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] uppercase font-bold text-[#444] ml-1">Pincode</label>
            <input
              type="number"
              {...register("address.pincode", { valueAsNumber: true })}
              className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-3 py-1.5 text-sm rounded-[3px] focus:outline-none focus:border-[#8b5cf6]/50 transition-all"
              placeholder="000000"
            />
            {errors.address?.pincode && <p className="text-[9px] text-[#800020]">{errors.address.pincode.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-[9px] uppercase font-bold text-[#444] ml-1">Street Address</label>
            <input
              {...register("address.street")}
              className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-3 py-1.5 text-sm rounded-[3px] focus:outline-none focus:border-[#8b5cf6]/50 transition-all"
              placeholder="Street info"
            />
            {errors.address?.street && <p className="text-[9px] text-[#800020]">{errors.address.street.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full mt-2 bg-[#050505] border border-[#1a1a1a] hover:border-[#8b5cf6]/50 text-white text-[10px] font-bold uppercase tracking-[1px] py-2.5 rounded-[3px] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            {loading ? <Loader2 size={14} className="animate-spin text-[#8b5cf6]" /> : <Save size={14} className="group-hover:text-[#8b5cf6] transition-colors" />}
            {loading ? "Syncing..." : "Finalize Address"}
          </button>
        </form>
      )}
    </div>
  );
}
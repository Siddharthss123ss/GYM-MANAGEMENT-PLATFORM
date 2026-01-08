"use client";

import { Plus, Search, Pencil, Trash2, X } from "lucide-react";
import { useState } from "react";

type Member = {
  id: number;
  name: string;
  phone: string;
  plan: string;
  expiry: string;
  status: "Active" | "Expired";
};

const initialMembers: Member[] = [
  { id: 1, name: "Rohit Sharma", phone: "9876543210", plan: "Monthly", expiry: "25 Aug 2026", status: "Active" },
  { id: 2, name: "Amit Verma", phone: "9123456780", plan: "Quarterly", expiry: "10 Aug 2026", status: "Expired" },
];

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Member | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", plan: "Monthly" });

  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", phone: "", plan: "Monthly" });
    setOpen(true);
  };

  const openEdit = (m: Member) => {
    setEditing(m);
    setForm({ name: m.name, phone: m.phone, plan: m.plan });
    setOpen(true);
  };

  const save = () => {
    if (editing) {
      setMembers(members.map(m => m.id === editing.id ? { ...m, ...form } as Member : m));
    } else {
      setMembers([{ id: Date.now(), ...form, expiry: "—", status: "Active" } as Member, ...members]);
    }
    setOpen(false);
  };

  const remove = (id: number) => {
    if (confirm("Delete this member?")) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Members</h1>
          <p className="text-gray-600">Manage all gym members</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          <Plus size={18} /> Add Member
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg border mb-6 flex items-center gap-3">
        <Search size={18} className="text-gray-400" />
        <input className="w-full outline-none text-sm" placeholder="Search members..." />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">Plan</th>
              <th className="px-6 py-3 text-left">Expiry</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map(m => (
              <tr key={m.id} className="border-t">
                <td className="px-6 py-4 font-medium">{m.name}</td>
                <td className="px-6 py-4">{m.phone}</td>
                <td className="px-6 py-4">{m.plan}</td>
                <td className="px-6 py-4">{m.expiry}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    m.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    {m.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <button onClick={() => openEdit(m)} className="text-blue-600"><Pencil size={16} /></button>
                  <button onClick={() => remove(m.id)} className="text-red-600"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{editing ? "Edit Member" : "Add Member"}</h2>
              <button onClick={() => setOpen(false)}><X /></button>
            </div>
            <div className="space-y-3">
              <input className="w-full border p-2 rounded" placeholder="Name"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input className="w-full border p-2 rounded" placeholder="Phone"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <select className="w-full border p-2 rounded"
                value={form.plan} onChange={e => setForm({ ...form, plan: e.target.value })}>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
              <button onClick={save} className="w-full bg-blue-600 text-white py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

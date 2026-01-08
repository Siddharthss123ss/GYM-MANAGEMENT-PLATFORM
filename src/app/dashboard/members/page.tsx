"use client";

import { Plus, Search, X } from "lucide-react";
import { useState } from "react";

const members = [
  {
    name: "Rohit Sharma",
    phone: "9876543210",
    plan: "Monthly",
    expiry: "25 Aug 2026",
    status: "Active",
  },
];

export default function MembersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Members</h1>
          <p className="text-gray-600">Manage all gym members</p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} /> Add Member
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg border mb-6 flex items-center gap-3">
        <Search size={18} className="text-gray-400" />
        <input
          placeholder="Search members..."
          className="w-full outline-none text-sm"
        />
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
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-t">
                <td className="px-6 py-4 font-medium">{m.name}</td>
                <td className="px-6 py-4">{m.phone}</td>
                <td className="px-6 py-4">{m.plan}</td>
                <td className="px-6 py-4">{m.expiry}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add Member</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <form className="space-y-4">
              <input className="w-full border p-2 rounded" placeholder="Name" />
              <input className="w-full border p-2 rounded" placeholder="Phone" />
              <select className="w-full border p-2 rounded">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
              <button className="w-full bg-blue-600 text-white py-2 rounded">
                Save Member
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

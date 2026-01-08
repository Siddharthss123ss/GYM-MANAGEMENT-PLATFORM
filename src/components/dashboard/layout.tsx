"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <Topbar onMenu={() => setOpen(!open)} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  Calendar, // ✅ ADD THIS LINE
  Brain,    // ✅ ADD THIS LINE (for AI Features)
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Members",
      href: "/dashboard/members",
      icon: Users,
    },
    {
      name: "Attendance", // ✅ NEW ITEM
      href: "/dashboard/attendance", 
      icon: Calendar,
      disabled: true, // Keep disabled until page is created
    },
    {
      name: "Payments",
      href: "/dashboard/payments",
      icon: CreditCard,
      disabled: false, // Change to false since page exists
    },
    {
      name: "AI Features", // ✅ NEW ITEM
      href: "/dashboard/ai",
      icon: Brain,
      disabled: true, // Keep disabled until page is created
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      disabled: false, // Change to false since page exists
    },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      
      {/* ===== BRAND ===== */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
          Gym<span className="text-blue-600">Pro</span>
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Gym Management Platform
        </p>
      </div>

      {/* ===== NAV ===== */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.disabled ? "#" : item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }
                ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              <Icon size={18} />
              {item.name}
              {item.disabled && (
                <span className="ml-auto text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                  Soon
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* ===== FOOTER ===== */}
      <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
        © {new Date().getFullYear()} GymPro
      </div>
    </aside>
  );
}
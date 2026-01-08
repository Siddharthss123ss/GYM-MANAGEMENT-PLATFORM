'use client';

import { LogOut, User, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Topbar({ onMenu }: { onMenu?: () => void }) {
  return (
    <div className="h-16 bg-white dark:bg-gray-900 border-b dark:border-gray-800 px-6 flex items-center justify-between">
      
      <div className="flex items-center gap-3">
        <button onClick={onMenu} className="md:hidden">
          <Menu />
        </button>
        <h2 className="font-semibold text-gray-900 dark:text-white">
          GymPro Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex items-center gap-2 cursor-pointer">
          <User />
          <span className="text-sm font-medium">Admin</span>
          <LogOut className="text-red-500" />
        </div>
      </div>
    </div>
  );
}

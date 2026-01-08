'use client';

import { useState } from 'react';
import { Save, Upload, Bell, Shield, Globe, Lock, User } from 'lucide-react';

export default function SettingsPage() {
  const [gymName, setGymName] = useState('My Fitness Gym');
  const [email, setEmail] = useState('contact@mygym.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [notifications, setNotifications] = useState(true);
  const [autoReminders, setAutoReminders] = useState(true);

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

      <div className="space-y-6">
        
        {/* Gym Info Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User className="text-blue-600" size={20} />
            </div>
            <h2 className="text-xl font-semibold">Gym Information</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gym Name
              </label>
              <input
                type="text"
                value={gymName}
                onChange={(e) => setGymName(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter gym name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="contact@gym.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Bell className="text-green-600" size={20} />
            </div>
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive payment reminders</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition-colors ${notifications ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${notifications ? 'translate-x-7' : 'translate-x-1'} mt-0.5`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Auto Payment Reminders</p>
                <p className="text-sm text-gray-600">Send reminders to members</p>
              </div>
              <button
                onClick={() => setAutoReminders(!autoReminders)}
                className={`w-12 h-6 rounded-full transition-colors ${autoReminders ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${autoReminders ? 'translate-x-7' : 'translate-x-1'} mt-0.5`} />
              </button>
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg">
              <Shield className="text-red-600" size={20} />
            </div>
            <h2 className="text-xl font-semibold">Security</h2>
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-2">Change Password</p>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                Update Password
              </button>
            </div>

            <div>
              <p className="font-medium text-gray-900 mb-2">Login Activity</p>
              <p className="text-sm text-gray-600">Last login: Today, 10:30 AM</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            <Save size={18} />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
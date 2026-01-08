import {
  Users,
  CreditCard,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* ===== PAGE HEADER ===== */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Overview of your gym performance
        </p>
      </div>

      {/* ===== STATS CARDS ===== */}
      <div className="grid gap-6 md:grid-cols-4 mb-10">
        <StatCard
          title="Total Members"
          value="128"
          icon={<Users className="text-blue-600" />}
        />
        <StatCard
          title="Active Members"
          value="112"
          icon={<TrendingUp className="text-green-600" />}
        />
        <StatCard
          title="Pending Fees"
          value="₹18,500"
          icon={<AlertCircle className="text-red-600" />}
        />
        <StatCard
          title="Monthly Revenue"
          value="₹1,24,000"
          icon={<CreditCard className="text-purple-600" />}
        />
      </div>

      {/* ===== MAIN CONTENT GRID ===== */}
      <div className="grid gap-6 md:grid-cols-3">

        {/* Revenue Chart Placeholder */}
        <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Overview
          </h2>

          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            📊 Revenue chart will appear here
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>

          <div className="space-y-3">
            <ActionButton text="Add New Member" />
            <ActionButton text="Record Payment" />
            <ActionButton text="Send Fee Reminder" />
            <ActionButton text="View Reports" />
          </div>
        </div>

      </div>
    </div>
  );
}

/* ===== STAT CARD COMPONENT ===== */
function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-600 text-sm font-medium">
          {title}
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900">
        {value}
      </div>
    </div>
  );
}

/* ===== QUICK ACTION BUTTON ===== */
function ActionButton({ text }: { text: string }) {
  return (
    <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-gray-700 font-medium">
      {text}
    </button>
  );
}

import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  description?: string;
  color?: 'blue' | 'green' | 'orange' | 'purple';
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
  color = 'blue'
}: StatCardProps) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100'
  };
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          {trend && (
            <div className={`flex items-center mt-2 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <span className="text-sm font-medium">
                {trend > 0 ? '+' : ''}{trend}%
              </span>
              <span className="text-xs text-gray-500 ml-2">from last month</span>
            </div>
          )}
          {description && (
            <p className="text-xs text-gray-500 mt-2">{description}</p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colors[color]}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
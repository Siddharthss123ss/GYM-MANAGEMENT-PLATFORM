import { CheckCircle, Users, CreditCard, Brain, MessageSquare, BarChart, Calendar, Smartphone, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  const features = [
    {
      icon: Users,
      title: 'Member Management',
      description: 'Complete CRM for all your gym members',
      points: ['Digital Onboarding', 'Attendance Tracking', 'Member Portal', 'Renewal Management']
    },
    {
      icon: CreditCard,
      title: 'Payment Automation',
      description: 'Automated billing and revenue tracking',
      points: ['Auto Invoicing', 'Payment Reminders', 'Revenue Reports', 'Multiple Payment Modes']
    },
    {
      icon: Brain,
      title: 'AI-Powered Features',
      description: 'Smart workout and diet plans',
      points: ['AI Workout Generator', 'Personalized Diet Plans', 'Progress Analytics', 'Form Correction']
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      description: 'Automated communication system',
      points: ['Fee Reminders', 'Class Updates', 'Birthday Wishes', 'Bulk Notifications']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Real-time business insights',
      points: ['Revenue Dashboard', 'Member Growth', 'Class Utilization', 'Performance Reports']
    },
    {
      icon: Calendar,
      title: 'Attendance System',
      description: 'Digital check-in and tracking',
      points: ['QR Code Check-in', 'Attendance Reports', 'Heatmaps', 'Absentee Tracking']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block text-blue-600 mt-2">Modern Gyms</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Everything you need to run your gym efficiently. No compromises.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-3" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-10">
            Join 500+ gyms using GymPro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:border-blue-500"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
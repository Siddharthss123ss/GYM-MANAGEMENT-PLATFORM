import { CheckCircle, Users, CreditCard, Brain, MessageSquare, BarChart, Smartphone, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-white">
      
      {/* ===== HERO ===== */}
      <section className="section-pt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-semibold text-blue-700">
                TRUSTED BY 500+ GYMS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Run Your Gym Like a
              <span className="block text-blue-600 mt-2">Professional Business</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10">
              All-in-one platform to manage members, automate payments, and boost revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/signup" 
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Start 14-Day Free Trial
              </Link>
              <Link 
                href="/demo" 
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:border-blue-500"
              >
                View Product Demo
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '500+', label: 'Gyms' },
                { value: '50K+', label: 'Members' },
                { value: '98%', label: 'Renewal Rate' },
                { value: '₹2Cr+', label: 'Revenue' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== FEATURES ===== */}
      <section className="section-py bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Gym Management Platform
            </h2>
            <p className="text-gray-600">
              Everything you need in one dashboard
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Member Management',
                desc: 'Track members, attendance, and communications.',
                features: ['Digital Onboarding', 'Attendance Tracking', 'Renewal Management']
              },
              {
                icon: CreditCard,
                title: 'Payment Automation',
                desc: 'Automated billing and revenue tracking.',
                features: ['Auto Invoicing', 'Payment Tracking', 'Revenue Reports']
              },
              {
                icon: Brain,
                title: 'AI Features',
                desc: 'Smart workout plans and diet recommendations.',
                features: ['AI Workout Generator', 'Diet Plans', 'Progress Tracking']
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.desc}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: MessageSquare,
                title: 'AI Calling & WhatsApp',
                desc: 'Automated communication for renewals.',
                features: ['Auto WhatsApp', 'AI Calling Agent', 'Bulk Notifications']
              },
              {
                icon: BarChart,
                title: 'Analytics & Reports',
                desc: 'Real-time insights for your gym.',
                features: ['Revenue Dashboard', 'Member Growth', 'Performance Reports']
              },
              {
                icon: Smartphone,
                title: 'Mobile App',
                desc: 'Complete mobile app for management.',
                features: ['iOS & Android', 'Real-time Updates', 'Push Notifications']
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.desc}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== HOW IT WORKS ===== */}
      <section className="section-py">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">
              Simple setup, powerful results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Sign Up & Setup',
                desc: 'Create account in 2 minutes. Import or add members.'
              },
              {
                step: '2',
                title: 'Manage Operations',
                desc: 'Use dashboard for daily management tasks.'
              },
              {
                step: '3',
                title: 'Grow Business',
                desc: 'Use AI and analytics to increase revenue.'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== SCREENSHOTS ===== */}
      <section className="section-py bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dashboard Preview
            </h2>
            <p className="text-gray-600">
              See how everything works in one place
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Member Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Track all members, payments, and attendance in real-time.
                </p>
                <div className="space-y-3">
                  {[
                    'Real-time member tracking',
                    'Payment status overview',
                    'Attendance heatmaps',
                    'Renewal reminders'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-gray-600">Dashboard Preview</p>
                  <p className="text-sm text-gray-500 mt-2">Real-time analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== PRICING ===== */}
      <section className="section-py">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-600">
              All plans include 14-day free trial
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: '₹999',
                desc: 'For small gyms',
                features: ['Up to 50 members', 'Member management', 'Payment tracking', 'Basic reports']
              },
              {
                name: 'Pro',
                price: '₹1,999',
                desc: 'For growing gyms',
                features: ['Up to 200 members', 'AI workout generator', 'WhatsApp automation', 'Advanced analytics'],
                popular: true
              },
              {
                name: 'Elite',
                price: '₹2,999',
                desc: 'For premium gyms',
                features: ['Unlimited members', 'AI calling agent', 'Premium support', 'Custom features']
              }
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-8 rounded-xl border ${plan.popular ? 'border-blue-500' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-6 inline-block">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-8">{plan.desc}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/signup" 
                  className={`block w-full text-center py-3 font-semibold rounded-lg ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== CTA ===== */}
      <section className="section-pb bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg mb-6">
              <Shield className="text-green-400" size={16} />
              <span className="text-sm font-medium">14-DAY FREE TRIAL</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Gym?
            </h2>
            
            <p className="text-gray-300 mb-10">
              Join 500+ gyms using GymPro. Start free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup" 
                className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100"
              >
                Start 14-Day Free Trial
              </Link>
              <Link 
                href="/contact" 
                className="px-10 py-4 bg-transparent text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-600"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
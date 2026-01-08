'use client';

import { useState } from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import FormInput from '@/components/common/FormInput';
import { Play, Check, Calendar, Video, Smartphone, Monitor } from 'lucide-react';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gymName: '',
    members: '',
    demoTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo requested:', formData);
    alert('Demo booked successfully! We will contact you soon.');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          See GymPro in Action
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Book a personalized demo and see how GymPro can transform your gym management
        </p>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Features & Video */}
          <div>
            <Card className="mb-8">
              <div className="aspect-video bg-gray-900 rounded-lg mb-6 flex items-center justify-center relative">
                {/* Video Placeholder */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="text-gray-900 ml-1" size={24} />
                  </div>
                  <p className="text-white">Product Demo Video</p>
                  <p className="text-gray-400 text-sm">(2:30 min)</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">What You'll See in the Demo:</h3>
              <ul className="space-y-3">
                {[
                  'Complete dashboard walkthrough',
                  'Member management in action',
                  'Payment collection process',
                  'AI workout generator demo',
                  'WhatsApp automation setup',
                  'Live reporting and analytics'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="text-green-500 mr-3" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Platform Features */}
            <Card>
              <h3 className="text-xl font-semibold mb-6 text-center">Available on All Platforms</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="p-4 bg-blue-100 rounded-xl inline-block mb-2">
                    <Monitor className="text-blue-600" size={24} />
                  </div>
                  <p className="font-medium">Web</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-green-100 rounded-xl inline-block mb-2">
                    <Smartphone className="text-green-600" size={24} />
                  </div>
                  <p className="font-medium">Mobile App</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-purple-100 rounded-xl inline-block mb-2">
                    <Video className="text-purple-600" size={24} />
                  </div>
                  <p className="font-medium">Tablet</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Booking Form */}
          <Card>
            <div className="text-center mb-8">
              <div className="p-3 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Personal Demo</h2>
              <p className="text-gray-600">Fill the form and our team will contact you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                label="Your Name"
                value={formData.name}
                onChange={(val) => handleChange('name', val)}
                required
              />
              
              <FormInput
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(val) => handleChange('email', val)}
                required
              />
              
              <FormInput
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(val) => handleChange('phone', val)}
                required
              />
              
              <FormInput
                label="Gym Name"
                value={formData.gymName}
                onChange={(val) => handleChange('gymName', val)}
                required
              />
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Members
                  </label>
                  <select 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    value={formData.members}
                    onChange={(e) => handleChange('members', e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="0-50">0-50 Members</option>
                    <option value="51-200">51-200 Members</option>
                    <option value="201-500">201-500 Members</option>
                    <option value="500+">500+ Members</option>
                  </select>
                </div>
                
                <FormInput
                  label="Preferred Demo Time"
                  type="datetime-local"
                  value={formData.demoTime}
                  onChange={(val) => handleChange('demoTime', val)}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  ⏱️ Demo duration: 30 minutes<br/>
                  💻 Live Q&A session included<br/>
                  📞 We'll call you on your preferred time
                </p>
              </div>

              <Button type="submit" fullWidth size="lg">
                Book Demo Now
              </Button>

              <p className="text-center text-sm text-gray-500">
                By booking a demo, you agree to our Privacy Policy
              </p>
            </form>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Gyms Using GymPro' },
              { value: '50K+', label: 'Members Managed' },
              { value: '₹2Cr+', label: 'Revenue Processed' },
              { value: '98%', label: 'Customer Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import FormInput from '@/components/common/FormInput';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gymName: '',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions? Our team is here to help you grow your gym business
        </p>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 9AM-8PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">support@gympro.in</p>
                    <p className="text-sm text-gray-500">Response within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <MapPin className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-gray-600">GymPro Technologies</p>
                    <p className="text-gray-600">Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <MessageSquare className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp Support</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Quick responses</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    label="City"
                    value={formData.city}
                    onChange={(val) => handleChange('city', val)}
                    required
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Inquiry Type
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg">
                      <option>General Inquiry</option>
                      <option>Sales Question</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Subscribe to our newsletter for updates and tips
                  </label>
                </div>

                <Button type="submit" fullWidth size="lg">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* FAQ Preview */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {[
                { q: 'How soon can I start?', a: 'You can start immediately after signup.' },
                { q: 'Do you offer customization?', a: 'Yes, custom features available.' },
                { q: 'Is data migration free?', a: 'Yes, we help migrate your data.' },
                { q: 'What payment methods?', a: 'All UPI, cards, net banking.' },
              ].map((item, idx) => (
                <Card key={idx} className="p-4">
                  <h4 className="font-semibold mb-1">{item.q}</h4>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
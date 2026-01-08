import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';
import { Check, X, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹999',
    period: '/month',
    description: 'Perfect for small gyms starting out',
    features: [
      { text: 'Up to 50 Members', included: true },
      { text: 'Member Management', included: true },
      { text: 'Payment Tracking', included: true },
      { text: 'Basic Reports', included: true },
      { text: 'Mobile App Access', included: false },
      { text: 'AI Workout Generator', included: false },
      { text: 'WhatsApp Automation', included: false },
      { text: 'AI Calling Agent', included: false },
    ],
    popular: false,
    color: 'blue'
  },
  {
    name: 'Pro',
    price: '₹1,999',
    period: '/month',
    description: 'Best for growing gyms',
    features: [
      { text: 'Up to 200 Members', included: true },
      { text: 'Member Management', included: true },
      { text: 'Payment Tracking', included: true },
      { text: 'Advanced Reports', included: true },
      { text: 'Mobile App Access', included: true },
      { text: 'AI Workout Generator', included: true },
      { text: 'AI Diet Planner', included: true },
      { text: 'WhatsApp Automation', included: false },
      { text: 'AI Calling Agent', included: false },
    ],
    popular: true,
    color: 'purple'
  },
  {
    name: 'Elite',
    price: '₹2,999',
    period: '/month',
    description: 'For premium gyms with automation needs',
    features: [
      { text: 'Unlimited Members', included: true },
      { text: 'Member Management', included: true },
      { text: 'Payment Tracking', included: true },
      { text: 'Premium Reports', included: true },
      { text: 'Mobile App Access', included: true },
      { text: 'AI Workout Generator', included: true },
      { text: 'AI Diet Planner', included: true },
      { text: 'WhatsApp Automation', included: true },
      { text: 'AI Calling Agent', included: true },
      { text: 'Priority Support', included: true },
    ],
    popular: false,
    color: 'orange'
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your gym. No hidden fees, cancel anytime.
        </p>
        
        {/* Toggle Switch for Annual Pricing */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="text-gray-600">Monthly</span>
          <div className="relative inline-block w-12 h-6">
            <input type="checkbox" className="sr-only" id="pricing-toggle" />
            <label 
              htmlFor="pricing-toggle" 
              className="block w-12 h-6 rounded-full bg-gray-300 cursor-pointer"
            >
              <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
            </label>
          </div>
          <span className="text-gray-600">
            Annual <Badge variant="success">Save 20%</Badge>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 ${plan.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="success" className="flex items-center gap-1">
                    <Star size={12} /> Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-6">
                <Button 
                  fullWidth 
                  size="lg"
                  variant={plan.popular ? 'primary' : 'outline'}
                >
                  Get Started
                </Button>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    {feature.included ? (
                      <Check className="text-green-500 mr-3" size={18} />
                    ) : (
                      <X className="text-gray-300 mr-3" size={18} />
                    )}
                    <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade anytime.' },
            { q: 'Is there a setup fee?', a: 'No setup fees. Start immediately after signup.' },
            { q: 'Do you offer discounts for annual payment?', a: 'Yes, save 20% with annual billing.' },
            { q: 'Can I cancel anytime?', a: 'Yes, cancel anytime with no penalties.' },
            { q: 'Is there a free trial?', a: 'Yes, 14-day free trial with all features.' },
            { q: 'Do you provide training?', a: 'Yes, free onboarding and training included.' },
          ].map((item, idx) => (
            <Card key={idx} className="p-6">
              <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
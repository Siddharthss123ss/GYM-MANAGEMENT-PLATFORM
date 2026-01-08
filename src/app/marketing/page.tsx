import Link from "next/link";
import {
  Users,
  CreditCard,
  Brain,
  MessageSquare,
  BarChart,
  CheckCircle,
} from "lucide-react";

/* ---------- Reusable Premium Feature Card ---------- */
function FeatureCard({
  icon,
  title,
  description,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition">
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 text-sm text-gray-700">
        {points.map((p, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={16} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="pt-20 pb-24">
  <div className="container-custom">

    <div className="max-w-2xl">
      
      <p className="text-xs font-medium text-blue-600">
        Gym management software
      </p>

      <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
        Run your gym.  
        Keep it simple.
      </h1>

      <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl">
  Members, payments, renewals and reports — everything in one simple dashboard.
</p>

      <div className="mt-8 flex gap-4">
       <button className="
  inline-flex items-center
  px-5 py-2.5
  text-sm font-medium
  rounded-md
  bg-blue-600 text-white
  hover:bg-blue-700
">
  Start Free Trial
</button>


       <button className="
  inline-flex items-center
  px-5 py-2.5
  text-sm font-medium
  rounded-md
  border border-gray-300
  text-gray-700
  hover:bg-gray-50
">
  View Demo
</button>

      </div>

    </div>

  </div>
</section>


      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Gym Management Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage, grow, and scale your gym.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="text-blue-600" />}
              title="Member Management"
              description="Manage members, plans, attendance and renewals in one place."
              points={[
                "Digital onboarding",
                "Attendance tracking",
                "Auto renewal alerts",
              ]}
            />
            <FeatureCard
              icon={<CreditCard className="text-blue-600" />}
              title="Payment Automation"
              description="Automate billing, dues and revenue tracking."
              points={[
                "Auto invoicing",
                "Pending fee alerts",
                "Revenue reports",
              ]}
            />
            <FeatureCard
              icon={<Brain className="text-blue-600" />}
              title="AI Workouts & Diet"
              description="Smart workout and diet plans personalized for members."
              points={[
                "AI workout generator",
                "Diet plans (Indian)",
                "Progress tracking",
              ]}
            />
            <FeatureCard
              icon={<MessageSquare className="text-blue-600" />}
              title="AI Calling & WhatsApp"
              description="Automated communication that improves renewals."
              points={[
                "Fee reminder calls",
                "WhatsApp automation",
                "Bulk notifications",
              ]}
            />
            <FeatureCard
              icon={<BarChart className="text-blue-600" />}
              title="Analytics & Reports"
              description="Understand your gym performance with real-time insights."
              points={[
                "Revenue dashboard",
                "Member growth",
                "Retention analysis",
              ]}
            />
            <FeatureCard
              icon={<span className="text-2xl">📱</span>}
              title="Mobile App"
              description="Dedicated app for gym owners and members."
              points={[
                "Android & iOS",
                "Live updates",
                "Push notifications",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">Simple setup. Powerful results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              ["1", "Sign Up & Setup", "Create account and add members in minutes."],
              ["2", "Manage Daily Ops", "Handle members, payments & attendance easily."],
              ["3", "Grow Revenue", "Use AI & analytics to increase renewals."],
            ].map(([step, title, desc]) => (
              <div key={step}>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-6">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600">
              14-day free trial. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "₹999",
                desc: "For small gyms",
                features: [
                  "Up to 50 members",
                  "Member management",
                  "Payment tracking",
                ],
              },
              {
                name: "Pro",
                price: "₹1,999",
                popular: true,
                desc: "Best for growing gyms",
                features: [
                  "Up to 200 members",
                  "AI workout & diet",
                  "WhatsApp automation",
                ],
              },
              {
                name: "Elite",
                price: "₹2,999",
                desc: "For premium gyms",
                features: [
                  "Unlimited members",
                  "AI calling agent",
                  "Advanced analytics",
                ],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`bg-white p-8 rounded-2xl border ${
                  p.popular
                    ? "border-blue-600 shadow-xl"
                    : "border-gray-200"
                }`}
              >
                {p.popular && (
                  <span className="inline-block mb-4 px-4 py-1 bg-blue-600 text-white text-sm rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="text-4xl font-bold mb-2">{p.price}</div>
                <p className="text-gray-600 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block text-center py-3 rounded-xl font-semibold ${
                    p.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Gym?
        </h2>
        <p className="text-gray-300 mb-10">
          Join modern gyms using automation to grow faster.
        </p>
        <Link
          href="/signup"
          className="px-12 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100"
        >
          Start Free Trial
        </Link>
      </section>
    </div>
  );
}

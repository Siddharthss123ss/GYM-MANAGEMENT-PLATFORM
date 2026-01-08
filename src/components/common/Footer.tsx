import Link from 'next/link';
import { Dumbbell, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Dumbbell className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold">GymPro</div>
                  <div className="text-sm text-gray-400">AI-Powered Platform</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Complete gym management platform trusted by 500+ gyms.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/marketing/features" className="text-gray-400 hover:text-white text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/marketing/pricing" className="text-gray-400 hover:text-white text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/marketing/demo" className="text-gray-400 hover:text-white text-sm">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="/marketing/contact" className="text-gray-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="text-gray-400 mr-3 mt-1" size={16} />
                  <span className="text-gray-400 text-sm">+91 98765 43210</span>
                </li>
                <li className="flex items-start">
                  <Mail className="text-gray-400 mr-3 mt-1" size={16} />
                  <span className="text-gray-400 text-sm">support@gympro.in</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-gray-400 mr-3 mt-1" size={16} />
                  <span className="text-gray-400 text-sm">Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} GymPro Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">
                Privacy
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
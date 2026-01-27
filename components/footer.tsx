import React from 'react';
import Link from 'next/link';
import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-[#1A1A1A] pt-16 pb-8 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

                    {/* Column 1: Brand & Philosophy */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <div className="bg-orange-500 p-1.5 rounded-sm">
                                <Dumbbell className="w-5 h-5 text-black" strokeWidth={2.5} />
                            </div>
                            <span className="text-xl font-black tracking-tighter uppercase">
                                GYM<span className="text-orange-500">SHIM</span>
                            </span>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-500 uppercase tracking-wider leading-6">
                            India&apos;s premier gym management infrastructure. Engineering digital solutions to scale fitness businesses and enhance member retention through automation.
                        </p>
                        <div className="flex gap-3">
                            <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
                            <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
                            <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
                        </div>
                    </div>

                    {/* Column 2: Ecosystem */}
                    <div className="lg:pl-8">
                        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Ecosystem</h4>
                        <ul className="space-y-3">
                            <FooterLink href="/features">Software Features</FooterLink>
                            <FooterLink href="/pricing">Enterprise Pricing</FooterLink>
                            <FooterLink href="/about">Our Infrastructure</FooterLink>
                            <FooterLink href="/blog">Industry Insights</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Governance */}
                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Governance</h4>
                        <ul className="space-y-3">
                            <FooterLink href="/help">Technical Support</FooterLink>
                            <FooterLink href="/privacy">Privacy Protocol</FooterLink>
                            <FooterLink href="/terms">Terms of Service</FooterLink>
                            <FooterLink href="/contact">Consult Sales</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Global HQ */}
                    <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A] rounded-sm">
                        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Contact HQ</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={16} className="text-orange-500 shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Pune, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={16} className="text-orange-500 shrink-0" />
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={16} className="text-orange-500 shrink-0" />
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">support@gymshim.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Metadata */}
                <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
                        © {currentYear} GYMSHIM TECHNOLOGIES PVT. LTD.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">Latency: 24ms</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">System: Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper Components for clean code
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link
            href={href}
            className="text-xs text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-widest font-medium"
        >
            {children}
        </Link>
    </li>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <Link
        href={href}
        aria-label={label}
        className="w-9 h-9 border border-[#1A1A1A] bg-[#0A0A0A] flex items-center justify-center text-gray-500 hover:text-black hover:bg-orange-500 hover:border-orange-500 transition-all rounded-sm"
    >
        {icon}
    </Link>
);

export default Footer;
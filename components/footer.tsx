import React from 'react';
import Link from 'next/link';
import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-[#1A1A1A] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

                    {/* Column 1: Brand & Philosophy */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <div className="bg-[#8b5cf6] p-1.5 rounded-[4px] shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                <Dumbbell className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-xl font-bold tracking-tight italic">
                                Gym<span className="text-[#8b5cf6]">Verse</span>
                            </span>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-500 tracking-wide leading-6">
                            The ultimate ecosystem for fitness management. We provide the tools to scale your gym, engage your community, and streamline your daily operations with precision.
                        </p>
                        <div className="flex gap-3">
                            <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
                            <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
                            <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:pl-8">
                        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Platform</h4>
                        <ul className="space-y-3">
                            <FooterLink href="/features">Features</FooterLink>
                            <FooterLink href="/pricing">Pricing Plans</FooterLink>
                            <FooterLink href="/about">Our Story</FooterLink>
                            <FooterLink href="/blog">Fitness Blog</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Support</h4>
                        <ul className="space-y-3">
                            <FooterLink href="/help">Help Center</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms of Use</FooterLink>
                            <FooterLink href="/contact">Contact Sales</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Contact HQ */}
                    <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A] rounded-[4px]">
                        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={16} className="text-[#8b5cf6] shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Shahdol, Madhya Pradesh, India</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={16} className="text-[#8b5cf6] shrink-0" />
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">+91 9713-3979-75</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={16} className="text-[#8b5cf6] shrink-0" />
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">contact@gymverse.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Metadata */}
                <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
                        © {currentYear} GYMVERSE FITNESS SOLUTIONS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold hover:text-white cursor-pointer transition-colors">Security</span>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse"></span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Services Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link
            href={href}
            className="text-xs text-gray-500 hover:text-[#8b5cf6] transition-colors tracking-wide font-medium"
        >
            {children}
        </Link>
    </li>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <Link
        href={href}
        aria-label={label}
        className="w-9 h-9 border border-[#1A1A1A] bg-[#0A0A0A] flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#8b5cf6] hover:border-[#8b5cf6] transition-all rounded-[4px]"
    >
        {icon}
    </Link>
);

export default Footer;
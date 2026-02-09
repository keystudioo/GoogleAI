
import React from 'react';
import { Twitter, Linkedin, Facebook, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const sections = [
    {
      title: 'Platform',
      links: ['For Shippers', 'For Carriers', 'Trust & Safety', 'Pricing', 'Documentation']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Brand Kit', 'Contact', 'Blog']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Carrier Agreement', 'Cookie Policy']
    }
  ];

  return (
    <footer className="bg-neutral-50 pt-24 pb-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-neutral-900 tracking-tight">
                Shipper<span className="text-primary">Scout</span>
              </span>
            </a>
            <p className="text-neutral-600 mb-8 max-w-xs">
              The modern marketplace connecting high-intent shippers with vetted carriers. Moving the world, one trusted match at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white border border-neutral-200 rounded-lg text-neutral-600 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white border border-neutral-200 rounded-lg text-neutral-600 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white border border-neutral-200 rounded-lg text-neutral-600 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-neutral-900 mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-neutral-600 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-neutral-900 mb-6">Support</h4>
            <p className="text-neutral-600 mb-2">support@shipperscout.com</p>
            <p className="text-neutral-600 mb-8">+1 (888) SCOUT-ME</p>
            <div className="p-4 bg-primary-light rounded-xl border border-primary/10">
              <div className="flex items-center space-x-2 text-primary font-bold text-xs mb-1">
                <Shield size={14} />
                <span>24/7 Monitoring</span>
              </div>
              <p className="text-[10px] text-neutral-600">Operational status: <span className="text-green-600 font-bold">Normal</span></p>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <p>© 2024 ShipperScout Marketplace Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-8">
            <p>Built with trust in Austin, TX</p>
            <p>SOC2 Type II Certified</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

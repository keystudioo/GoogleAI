
import React from 'react';
import Button from './Button';
import { CheckCircle, Search, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 z-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-light text-primary rounded-full mb-6">
              <ShieldCheck size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Vetted Network & Safe Payments</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6">
              Find the right carrier faster, without scams or wasted outreach.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              ShipperScout is the trusted marketplace for high-intent RFQs. We connect shippers with vetted, reliable carriers in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                Post an RFQ
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                See how it works
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-neutral-600 text-sm font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-primary" />
                <span>Zero platform fees for carriers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-primary" />
                <span>Verified identity & insurance</span>
              </div>
            </div>
          </div>

          {/* Right Column: UI Mockup */}
          <div className="mt-16 lg:mt-0 lg:col-span-6 relative">
            <div className="relative mx-auto lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-light rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-burnt-light rounded-full blur-3xl opacity-50 -z-10"></div>

              {/* Fake UI Card 1: RFQ Listing */}
              <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 max-w-md mx-auto transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold text-primary bg-primary-light px-2 py-0.5 rounded uppercase">Open RFQ</span>
                    <h3 className="font-bold text-neutral-900 mt-1">Chicago, IL → Houston, TX</h3>
                  </div>
                  <span className="text-neutral-900 font-bold">$3,200</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-neutral-600">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Dry Van • 42,000 lbs • Hazmat</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-neutral-600">
                    <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                    <span>Pickup: Oct 24 • Delivery: Oct 26</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/${i + 10}/32/32`} alt="Carrier" className="w-8 h-8 rounded-full border-2 border-white" />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-neutral-600">+12</div>
                  </div>
                  <span className="text-xs text-neutral-600 italic">15 active bids</span>
                </div>
              </div>

              {/* Fake UI Card 2: Match Notification */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-xl shadow-xl border border-neutral-200 p-4 w-64 hidden sm:block transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Search className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">New Match Found</p>
                    <p className="text-[10px] text-neutral-600">Atlas Logistics (Vetted)</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex text-burnt">
                      {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-[8px]">★</span>)}
                    </div>
                    <span className="text-[8px] text-neutral-400">(4.9/5)</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary">View Profile</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

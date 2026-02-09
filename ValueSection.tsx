
import React from 'react';
import { Package, Truck, Zap, Target, ShieldCheck, Clock } from 'lucide-react';

const ValueSection: React.FC = () => {
  const shipperBenefits = [
    { icon: <Clock className="text-primary" />, title: "Save hours daily", desc: "Skip the endless email threads. Get grouped, relevant bids in one place." },
    { icon: <Target className="text-primary" />, title: "Precision matching", desc: "We only notify carriers who match your specific lane and equipment needs." },
    { icon: <ShieldCheck className="text-primary" />, title: "Zero scam risk", desc: "Every carrier is verified for identity, FMCSA compliance, and active insurance." },
  ];

  const carrierBenefits = [
    { icon: <Zap className="text-primary" />, title: "High-intent loads", desc: "Access direct RFQs from verified shippers. No more dead-end load boards." },
    { icon: <Truck className="text-primary" />, title: "Reduce deadhead", desc: "Get notifications for backhauls and lane matches automatically." },
    { icon: <Package className="text-primary" />, title: "Build your brand", desc: "Collect ratings and reviews to win more long-term contracts." },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24">
          
          {/* Shippers Column */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-neutral-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-light rounded-xl">
                <Package className="text-primary" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">For Shippers</h2>
            </div>
            <p className="text-neutral-600 mb-10 text-lg">
              Stop blasting the internet with your freight. Target the right partners silently.
            </p>
            <div className="space-y-8">
              {shipperBenefits.map((b, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1">{b.icon}</div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{b.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 inline-flex items-center space-x-2 px-4 py-2 bg-primary-light text-primary rounded-lg font-bold text-sm">
              <ShieldCheck size={18} />
              <span>Trust Verified Program</span>
            </div>
          </div>

          {/* Carriers Column */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-neutral-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-burnt-light rounded-xl">
                <Truck className="text-burnt" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">For Carriers</h2>
            </div>
            <p className="text-neutral-600 mb-10 text-lg">
              Cut through the noise and find reliable freight that fits your schedule.
            </p>
            <div className="space-y-8">
              {carrierBenefits.map((b, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1">{b.icon}</div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{b.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center">
              <span className="text-sm font-bold text-neutral-600">Featured in:</span>
              <div className="ml-4 flex items-center space-x-4 opacity-50 text-xs font-bold uppercase tracking-tighter">
                <span>FreightWaves</span>
                <span>WSJ Logistics</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueSection;

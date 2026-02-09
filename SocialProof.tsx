
import React from 'react';

const SocialProof: React.FC = () => {
  const partners = [
    'LogiCorp', 'FreightWise', 'ShiftBase', 'OceanWay', 'PrimeTrack', 'NexLoad'
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-neutral-600 uppercase tracking-widest mb-10">
          Trusted by 2,000+ shippers and owner-operators nationwide
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner} className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-neutral-900 rounded-sm"></div>
              <span className="text-xl font-bold text-neutral-900 tracking-tighter">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

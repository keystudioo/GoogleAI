
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Post your RFQ',
      description: 'Define your lane, equipment, and volume requirements. Our system filters out irrelevant bidders instantly.'
    },
    {
      number: '02',
      title: 'Get relevant responses',
      description: 'Carriers matching your criteria are notified. You receive clear, standardized bids for easy comparison.'
    },
    {
      number: '03',
      title: 'Connect and move',
      description: 'Unlock carrier contact info, confirm details, and start moving. ShipperScout remains as your trust layer.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">How it works</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A cleaner marketplace designed to eliminate the friction of traditional outreach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-neutral-200 -z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="md:hidden flex justify-center text-neutral-300 my-4">
                  <ArrowRight className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

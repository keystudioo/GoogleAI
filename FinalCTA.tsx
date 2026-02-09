
import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative Background Patterns */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to find your next trusted shipping partner?
            </h2>
            <p className="text-lg md:text-xl text-primary-light/80 mb-10">
              Join thousands of shippers and carriers who are saving time and moving freight safer. Start with one RFQ today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="accent" 
                size="lg" 
                className="w-full sm:w-auto shadow-xl shadow-burnt/20"
              >
                Post an RFQ now
              </Button>
              <button className="text-white font-bold px-8 py-4 hover:underline transition-all">
                Talk to Sales
              </button>
            </div>
            <p className="mt-8 text-sm text-primary-light/50">
              No credit card required to browse • 5-minute setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

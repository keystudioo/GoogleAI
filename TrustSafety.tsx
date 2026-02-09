
import React from 'react';
import { ShieldCheck, UserCheck, DollarSign, Eye, HelpCircle, FileText } from 'lucide-react';

const TrustSafety: React.FC = () => {
  const signals = [
    { icon: <UserCheck />, title: "Verified Profiles", desc: "Every user undergoes identity and business verification before their first post or bid." },
    { icon: <DollarSign />, title: "Clear Pricing", desc: "No hidden fees. Carriers keep 100% of their rate, and shippers pay a simple, transparent SaaS fee." },
    { icon: <Eye />, title: "Transparent Info", desc: "View carrier ratings, equipment photos, and active insurance certs before you unlock contact details." },
    { icon: <FileText />, title: "Electronic Documentation", desc: "Rate cons, BOLs, and insurance certs are stored centrally for easy access and compliance." },
    { icon: <ShieldCheck />, title: "Payment Protection", desc: "Optional escrow and quick-pay solutions to ensure carriers get paid and shippers stay protected." },
    { icon: <HelpCircle />, title: "Dispute Support", desc: "Access our dedicated mediation team if something doesn't go as planned on the road." },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Trust is our product</h2>
            <p className="text-lg text-neutral-600">
              The shipping industry has a trust problem. We built ShipperScout to solve it with transparency and accountability.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#" className="text-primary font-bold hover:underline inline-flex items-center">
              View our security standards <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {signals.map((s, i) => (
            <div key={i} className="flex space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-neutral-200 flex items-center justify-center text-primary">
                {s.icon}
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-1">{s.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default TrustSafety;

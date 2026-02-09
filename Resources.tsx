
import React from 'react';

const Resources: React.FC = () => {
  const guides = [
    {
      title: "The Ultimate RFQ Template",
      category: "Shipper Tools",
      popular: true,
      image: "https://picsum.photos/seed/rfq/600/400"
    },
    {
      title: "Carrier Vetting Checklist",
      category: "Compliance",
      popular: false,
      image: "https://picsum.photos/seed/check/600/400"
    },
    {
      title: "2024 Market Rates Guide",
      category: "Insights",
      popular: true,
      image: "https://picsum.photos/seed/rates/600/400"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Master your logistics</h2>
          <p className="text-lg text-neutral-600">Free resources to help you scale your shipping operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {guide.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-burnt text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{guide.category}</p>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-neutral-600 text-sm">Downloadable PDF + interactive tool</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;

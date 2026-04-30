import React from 'react';
import { motion } from 'motion/react';
import { INDUSTRIES } from '../constants';
import SEO from '../components/SEO';
import { Building2, School, GraduationCap, Truck, Store, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from '../assets/hero-banner.jpg';

const IndustryIcons: Record<string, React.ReactNode> = {
  "Schools & Educational Institutions": <School />,
  "Colleges & Universities": <GraduationCap />,
  "Corporate & MNCs": <Building2 />,
  "Telecom & Logistics": <Truck />,
  "Wholesalers & Distributors": <Store />,
  "Gift Merchants": <Gift />,
};

export default function Industries() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Industries We Serve - Bag Manufacturer Business" />
      
      {/* Header */}
      <header className="bg-primary pt-32 pb-20 relative overflow-hidden border-b border-slate-200">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-15 z-0"
          style={{ 
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Tailored Solutions for Every Sector</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Different industries have different needs. We specialize in creating the right bag for the right purpose—be it for branding, utility, or resale.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] industrial-shadow hover:border-accent hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all shadow-inner">
                {React.cloneElement(IndustryIcons[ind.name] as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">{ind.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Providing specialized manufacturing for {ind.name.toLowerCase()} with emphasis on durability and brand alignment.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-accent group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Studies Teaser */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Telecom & Field Operations Specialized Bags</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                For logistics and telecom giants, we manufacture rugged backpacks with specialized compartments for testing equipment, tools, and handheld devices. Used by over 5,000+ field technicians across India.
              </p>
              <ul className="flex flex-wrap justify-center gap-6 pt-4">
                <li className="flex items-center gap-3 font-semibold"><div className="w-2 h-2 bg-accent rounded-full"/> Reinforced Fabric</li>
                <li className="flex items-center gap-3 font-semibold"><div className="w-2 h-2 bg-accent rounded-full"/> Waterproof Lining</li>
                <li className="flex items-center gap-3 font-semibold"><div className="w-2 h-2 bg-accent rounded-full"/> Secure Zippers</li>
              </ul>
              <div className="pt-8">
                <Link to="/contact" className="bg-accent text-white px-10 py-4 rounded-xl font-bold inline-block shadow-lg hover:bg-accent/90 transition-colors">Inquire for Telecom Bags</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

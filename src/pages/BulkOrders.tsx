import React from 'react';
import { Truck, HandCoins, ShieldCheck, Zap, Globe, Package } from 'lucide-react';
import SEO from '../components/SEO';
import InquiryForm from '../components/InquiryForm';
import heroBanner from '../assets/hero-banner.jpg';

export default function BulkOrders() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO title="Wholesale School Bag Supplier Delhi | Bulk Bag Manufacturer India" />

      {/* Header */}
      <header className="bg-primary pt-32 pb-20 text-white text-center px-4 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-15 z-0"
          style={{ 
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 uppercase text-white">Wholesale Bag Supplier <br/><span className="text-accent">Pan-India Bulk Delivery</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Order directly from our factory in Delhi to get the most competitive wholesale prices in India. We are a trusted bulk bag manufacturer in Paharganj serving schools, corporates, and wholesalers.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-8">
              <h2 className="text-2xl font-bold text-primary">Wholesale Benefits</h2>
              
              <div className="space-y-6">
                {[
                  { icon: HandCoins, title: "Deep Bulk Discounts", desc: "Prices scale down as your order quantity increases." },
                  { icon: Zap, title: "Priority Production", desc: "Experience our express queue for time-sensitive bulk orders." },
                  { icon: Truck, title: "Logistic Support", desc: "We coordinate with top-tier transport for PAN India delivery." },
                  { icon: ShieldCheck, title: "Payment Safety", desc: "Secure billing and GST invoice provided for all orders." },
                  { icon: Package, title: "Assorted Variety", desc: "Mix and match bag types within your wholesale order." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <InquiryForm title="Submit a Bulk Application" subtitle="Our sales manager will review your quantity and provide the wholesale pricing sheet." />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-slate-200 rounded-3xl">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-highlight" /> Sample Request
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We encourage quality checks. You can order a single sample of any bag at a standard price (adjustable against bulk order). Contact us via WhatsApp to request a sample now.
                </p>
              </div>
              <div className="p-8 bg-white border border-slate-200 rounded-3xl">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-highlight" /> Guarantee
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Every bag leaving our Delhi facility comes with a quality guarantee against manufacturing defects. We stand by our stitching and fabric quality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Settings, CheckCircle, PenTool, Palette, Image as ImageIcon, Box } from 'lucide-react';
import SEO from '../components/SEO';
import InquiryForm from '../components/InquiryForm';
import heroBanner from '../assets/hero-banner.jpg';

export default function Customisation() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Custom Bag Manufacturer Delhi | Branded Backpack Wholesaler" />
      
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">Custom Bag <br/><span className="text-accent">Manufacturer Delhi</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Leading custom luggage bag manufacturer in Delhi. We provide professional logo branding and bespoke designs for school, college, and corporate institutions.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-primary">Personalisation Opportunities</h2>
            
            <div className="space-y-10">
              {[
                { 
                  icon: Palette, 
                  title: "Logo Embroidery", 
                  desc: "High-precision computerised embroidery for a premium, long-lasting look. Ideal for school & college uniforms and high-end corporate gifts." 
                },
                { 
                  icon: ImageIcon, 
                  title: "Screen & Sublimation Printing", 
                  desc: "Vivid, sharp, and durable printing that brings your brand colors to life. Perfect for large-scale bulk distributions." 
                },
                { 
                  icon: PenTool, 
                  title: "Custom Zipper Pulls & Labels", 
                  desc: "Go one step further with branded hardware. We can manufacture custom pulls, labels, and lining featuring your identity." 
                },
                { 
                  icon: Box, 
                  title: "Bespoke Design Modifications", 
                  desc: "Need 2 extra pockets or a specific laptop sleeve size? We can tweak our existing designs or create entirely new ones for you." 
                },
              ].map((service, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-highlight/10 text-highlight rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-highlight group-hover:text-white transition-all">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-primary text-white rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-white">The Customisation Process</h3>
              <div className="space-y-6">
                {[
                  "1. Consult with our designers on requirements.",
                  "2. Receive a digital mockup based on your logo/colors.",
                  "3. Physical sample production for your approval.",
                  "4. Bulk production according to approved sample.",
                  "5. Quality audit & door-step delivery."
                ].map((step, i) => (
                  <div key={i} className="text-slate-300 font-medium">{step}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <InquiryForm title="Request Custom Quote" subtitle="Upload your logo or describe your design needs below." />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Factory, ShieldCheck, Award, Target, Users, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import heroBanner from '../assets/hero-banner.jpg';

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO title="Backpack Manufacturer in Delhi | Urban Style Bags About Us" />
      
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-24 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-15 object-cover z-0"
          style={{ 
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-7xl font-bold mb-6 text-white uppercase"
          >
            Backpack Manufacturer <br/> in <span className="text-accent">Paharganj Delhi</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A decade-long journey of manufacturing excellence in Nabi Karim Delhi, catering to top Indian organizations & schools with premium bulk bag solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">The Urban Style Heritage</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Founded in Nabi Karim, the wholesale hub of Delhi, Urban Style Bags was born from a vision to provide high-quality, long-lasting backpacks at prices that truly reflect their value. We started with a small team of passionate tailors and have now grown into a large-scale manufacturing enterprise.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Today, our facility is equipped with industrial-grade stitching machines and a research-driven design team that keeps us ahead of market trends. We are proud partners for hundreds of schools, colleges, and corporate companies across India.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <span className="block text-4xl font-bold text-accent mb-2">10+</span>
                  <span className="text-sm font-bold text-slate-500 uppercase">Years Excellence</span>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <span className="block text-4xl font-bold text-accent mb-2">100+</span>
                  <span className="text-sm font-bold text-slate-500 uppercase">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-lg space-y-6">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and preferred bag manufacturing partner in India, known for innovation, durability, and customer-centricity in every product we deliver.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-lg space-y-6">
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower institutions and businesses with high-quality backpacks that reflect their professional standards, using sustainable and robust manufacturing practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-16">The Core Pillars of Our Business</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Factory, title: "In-House Production", desc: "No outsourcing. Entire control over quality and timelines." },
              { icon: ShieldCheck, title: "Quality Commitment", desc: "Using only the best fabrics, zippers, and threads." },
              { icon: Users, title: "Customer First", desc: "Dedicated support for wholesalers and institutional buyers." },
              { icon: MapPin, title: "Delhi Rooted", desc: "Strategically located for seamless pan-India logistics." },
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-slate-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold">{value.title}</h4>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Factory, 
  Settings,
  Backpack,
  Luggage,
  Briefcase,
  Layers,
  Globe,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Award,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';
import SEO from '../components/SEO';
import InquiryForm from '../components/InquiryForm';
import { BUSINESS_INFO, PRODUCT_CATEGORIES } from '../constants';

const Home = () => {
  return (
    <div className="flex flex-col">
      <SEO title="Backpack & Luggage Bag Manufacturer in Delhi | Wholesale Supplier" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Urban Style Bags",
          "image": "https://images.unsplash.com/photo-1544816153-12ad2cc0e848?q=80&w=2070&auto=format&fit=crop",
          "@id": "",
          "url": window.location.origin,
          "telephone": BUSINESS_INFO.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "BB-338, Old Police Chowki Nabi Karim, Near Nabi Karim Police Station, Paharganj",
            "addressLocality": "Delhi",
            "postalCode": "110055",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.6473,
            "longitude": 77.2114
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is your minimum order quantity?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our minimum order quantity (MOQ) for bulk manufacturing is typically 100 pieces per design."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer custom branded bags?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in OEM and custom branding including screen printing and computerised embroidery for schools and corporates."
              }
            },
            {
              "@type": "Question",
              "name": "Are you a backpack manufacturer in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Urban Style Bags is a leading backpack manufacturer based in Nabi Karim, Paharganj, Delhi."
              }
            },
            {
              "@type": "Question",
              "name": "Do you supply bags in bulk across India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we have a pan-India logistics network and supply bags in bulk to every state across India."
              }
            }
          ]
        })}
      </script>

      {/* Hero & Inquiry Section - MATCHING SCREENSHOT */}
      <section className="bg-white min-h-[85vh] flex flex-col lg:flex-row border-b border-slate-200 overflow-hidden">
        {/* Left: Hero Content */}
        <div className="lg:w-7/12 p-8 lg:p-20 flex flex-col justify-center relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-40 bg-cover bg-center transition-all duration-700" 
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 z-0 opacity-20 bg-primary/10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/10 -z-10 skew-x-[-12deg] translate-x-24 backdrop-blur-[2px]" />
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 relative z-10"
          >
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-[81px] font-black text-primary leading-tight lg:leading-[0.95] tracking-tight uppercase">
                Backpack Manufacturer <br />
                <span className="text-[#ca5c0b] underline underline-offset-[8px] lg:underline-offset-[16px] decoration-4 lg:decoration-8">In Delhi</span> <br />
                Wholesale School Bag Supplier
              </h1>
              
              <p className="text-xl text-[#2e4878] max-w-2xl leading-relaxed font-medium pt-4">
                Urban Style Bags: A premier bulk manufacturer in Paharganj Delhi, specializing in high-volume production for schools, colleges, and corporate brands. Durable, custom-branded luggage solutions delivered pan-India.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-6">
              {[
                { val: "100+", label: "B2B CLIENTS" },
                { val: "10+", label: "YEARS EXP." }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-slate-200 p-6 min-w-[140px] shadow-sm">
                  <span className="block text-3xl font-black text-primary leading-none">{stat.val}</span>
                  <span className="block text-[10px] font-bold text-slate-400 tracking-[0.2em] mt-3 uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Inquiry Form Sidebar */}
        <div className="lg:w-5/12 bg-primary p-6 lg:p-14 flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] object-cover grayscale brightness-50" />
          <div className="w-full max-w-md relative z-10">
            <InquiryForm title="SET BULK QUOTE" subtitle="PRICING & SAMPLES WITHIN 2 HOURS" />
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
          <div className="p-8 text-center flex flex-col items-center">
             <ShieldCheck className="w-6 h-6 text-accent mb-4" />
             <span className="text-2xl font-black text-primary">100+</span>
             <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mt-2">Minimum Order Quantity</span>
          </div>
          <div className="p-8 text-center flex flex-col items-center">
             <Award className="w-6 h-6 text-accent mb-4" />
             <span className="text-2xl font-black text-primary">PREMIUM BUILD</span>
             <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mt-2">Maximum Durability Promise</span>
          </div>
          <div className="p-8 text-center flex flex-col items-center">
             <Settings className="w-6 h-6 text-accent mb-4" />
             <span className="text-2xl font-black text-primary">PRIVATE</span>
             <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mt-2">Label OEM Capabilities</span>
          </div>
          <div className="p-8 text-center flex flex-col items-center">
             <Truck className="w-6 h-6 text-accent mb-4" />
             <span className="text-2xl font-black text-primary">NATIONWIDE</span>
             <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mt-2">Industrial Logistics</span>
          </div>
        </div>
      </section>

      {/* Refined Product Categories */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-accent font-black text-xs tracking-widest uppercase">Manufacturing Classes</span>
              <h2 className="text-4xl lg:text-6xl font-black">Bulk Bag Manufacturer <br/><span className="text-slate-400 font-medium italic">In Paharganj Delhi</span></h2>
            </div>
            <p className="text-slate-500 max-w-md font-medium text-lg leading-relaxed">
              Every production series is engineered for high-intensity institutional and professional use across Delhi NCR and India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'school', title: 'Institutional Series', icon: <Backpack className="w-8 h-8" />, desc: 'High-durability school & college backpacks with ergonomic support.' },
              { id: 'office', title: 'Corporate Identity', icon: <Briefcase className="w-8 h-8" />, desc: 'Custom branded executive gear for large organizations.' },
              { id: 'luggage', title: 'Luggage & Cargo', icon: <Luggage className="w-8 h-8" />, desc: 'Rugged travel equipment for high-frequency distribution.' },
              { id: 'custom', title: 'OEM Manufacturing', icon: <Layers className="w-8 h-8" />, desc: 'Fully bespoke bag development for global retail brands.' }
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="industrial-card group p-12 min-h-[380px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center text-primary mb-10 group-hover:bg-accent group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl mb-4 leading-tight">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
                <Link to={`/products?cat=${item.id}`} className="mt-8 text-[11px] font-black uppercase tracking-[0.3em] text-accent flex items-center gap-2 hover:gap-4 transition-all">
                  Bulk Specification <ChevronRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Industrial Capabilities */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              {/* Image and badge removed based on user selection */}
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-accent font-black text-xs tracking-widest uppercase flex items-center gap-3">
                  <Factory className="w-4 h-4" /> Facility Capabilities
                </span>
                <h2 className="text-4xl lg:text-7xl font-black">Built for <span className="text-slate-300">Scale</span></h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  Operating in Delhi's historic manufacturing hub, we merge industrial tradition with modern throughput. Our facility is optimized for volume.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { title: '5-STEP QUALITY CHECK', desc: 'Rigorous inspection at every production stage.' },
                  { title: 'RAPID PROTOTYPING', desc: 'Samples developed within 48-72 hours.' },
                  { title: 'OEM BRANDING', desc: 'In-house screen, embroidery & logos.' },
                  { title: 'PAN-INDIA LOGISTICS', desc: 'Doorstep delivery to every corner of India.' }
                ].map((cap, i) => (
                  <div key={i} className="space-y-3 border-l-4 border-slate-100 pl-6 hover:border-accent transition-colors">
                    <h4 className="text-sm font-black uppercase tracking-widest">{cap.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Pan-India Supply */}
      <section className="py-32 bg-primary text-white relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
               <div className="space-y-4">
                  <span className="text-accent font-black text-xs tracking-widest uppercase">Trusted Pan-India Network</span>
                  <h2 className="text-5xl lg:text-7xl font-black text-white">Seamless <br /><span className="text-accent italic font-medium">Pan-India Supply</span></h2>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                    Optimized distribution network connecting our Delhi facility to every state in India. Reliable door-to-door high-volume delivery.
                  </p>
               </div>
               
               <div className="space-y-4">
                  {[
                    { label: "India Lead Time", val: "3-5 Working Days" },
                    { label: "State-Wide Delivery", val: "Reliable Surface & Air Cargo" },
                    { label: "QC Documentation", val: "Pre-shipment Inspection Reports" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between py-5 border-b border-white/10">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{item.label}</span>
                      <span className="text-xs font-bold text-slate-300">{item.val}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-12 aspect-square flex flex-col items-center justify-center text-center relative group">
              <Globe className="w-48 h-48 text-accent/10 absolute animate-pulse" />
              <Truck className="w-16 h-16 text-accent mb-8 relative z-10" />
              <h3 className="text-4xl font-black mb-4 relative z-10 text-white">24/7 Loading <br />Capacity</h3>
              <p className="text-slate-500 text-sm max-w-xs relative z-10">Daily dispatch of bulk containers to hubs nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - SEO Targeted */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-accent font-black text-xs tracking-widest uppercase">Expert Insights</span>
            <h2 className="text-4xl font-black mt-4 uppercase">Frequently Asked <span className="text-slate-300">Questions</span></h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "What is your minimum order quantity for bulk manufacturing?", a: "To maintain direct factory pricing, our standard MCQ starts from 100 pieces per design. For larger institutional orders, we provide graduated discounts." },
              { q: "Do you offer custom branded bags for schools and corporates?", a: "Yes, customization is our core strength. We offer computerised embroidery, screen printing, and bespoke design adjustments for all types of school backpacks and office bags." },
              { q: "Are you a top-rated backpack manufacturer in Delhi?", a: "Indeed, Urban Style Bags is a leading manufacturer based in the heart of Delhi's manufacturing hub, Nabi Karim Paharganj, serving clients across North India and beyond." },
              { q: "Do you supply bags in bulk to cities outside Delhi NCR?", a: "Yes, we supply bulk orders pan-India including states like Punjab, Haryana, UP, Rajasthan, and Southern India through our robust logistics network." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-8 last:border-0">
                <h3 className="text-lg font-black text-primary mb-3 uppercase tracking-tight">{faq.q}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO & Footer/CTA Area */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-black uppercase">Custom Luggage Bag Manufacturer <br/><span className="text-accent">Nabi Karim, Paharganj</span></h2>
            <p className="text-slate-600 font-medium">
              Strategically located in Delhi's historic Nabi Karim Paharganj area, we are perfectly positioned to serve the manufacturing needs of Delhi NCR and the whole of India. Our facility specializes in high-durability school backpacks, executive corporate bags, and heavy-duty travel luggage.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black tracking-widest text-slate-400">
              <span>DELHI NCR</span>
              <span>•</span>
              <span>NABI KARIM</span>
              <span>•</span>
              <span>PAHARGANJ</span>
              <span>•</span>
              <span>INDIA SUPPLY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Footer/CTA */}
      <footer className="bg-surface py-24 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl text-center lg:text-left">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="space-y-8">
              <Link to="/" className="flex flex-col">
                <span className="text-3xl font-black text-primary tracking-tighter uppercase">URBAN STYLE <span className="text-accent underline">BAGS</span></span>
                <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase mt-2">Delhi Factory Unit #338</span>
              </Link>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Delhi's premier facility for large-scale production of backpacks & luggage.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 text-slate-600 justify-center lg:justify-start">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-[11px] font-black uppercase tracking-widest">{BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 justify-center lg:justify-start">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-[11px] font-black uppercase tracking-widest">{BUSINESS_INFO.phone}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
               <div className="grid sm:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Manufacturing Series</h4>
                    <div className="grid grid-cols-2 gap-4">
                       {PRODUCT_CATEGORIES.map(cat => (
                         <Link key={cat.id} to={`/products?cat=${cat.id}`} className="text-[10px] font-bold text-slate-400 hover:text-accent uppercase tracking-widest">
                           {cat.title}
                         </Link>
                       ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Facility Access</h4>
                    <div className="flex flex-col gap-4">
                       <Link to="/bulk-orders" className="text-[10px] font-bold text-slate-400 hover:text-accent uppercase tracking-widest">Request Bulk Price List</Link>
                       <Link to="/industries" className="text-[10px] font-bold text-slate-400 hover:text-accent uppercase tracking-widest">Industry Compliance</Link>
                       <Link to="/customisation" className="text-[10px] font-bold text-slate-400 hover:text-accent uppercase tracking-widest">OEM Branding Options</Link>
                    </div>
                  </div>
               </div>

               <div className="pt-12 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">© 2026 URBAN STYLE BAGS</span>
                  <div className="flex gap-10">
                    <Link to="/" className="text-[9px] font-black text-slate-400 hover:text-accent uppercase tracking-widest">Terms</Link>
                    <Link to="/" className="text-[9px] font-black text-slate-400 hover:text-accent uppercase tracking-widest">Privacy</Link>
                    <Link to="/" className="text-[9px] font-black text-slate-400 hover:text-accent uppercase tracking-widest">Compliance</Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

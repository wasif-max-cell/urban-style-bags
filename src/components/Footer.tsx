import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, PRODUCT_CATEGORIES } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Intro */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-display font-bold text-white tracking-tighter leading-none">URBAN STYLE</span>
              <span className="text-xs font-semibold text-highlight tracking-widest uppercase">Bags Manufacturer</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading manufacturer and wholesale supplier of backpacks in Delhi. We empower businesses, schools, and corporate brands with high-quality, durable bags since over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"><ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" /> About Us</Link></li>
              <li><Link to="/customisation" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"><ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" /> Customs & Branding</Link></li>
              <li><Link to="/bulk-orders" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"><ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" /> Wholesale Orders</Link></li>
              <li><Link to="/industries" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"><ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" /> Industries We Serve</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-slate-700 pb-2 inline-block">Our Products</h4>
            <ul className="space-y-3">
              {PRODUCT_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products?cat=${cat.id}`} className="text-slate-400 hover:text-white transition-colors text-sm whitespace-nowrap">
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li><Link to="/products" className="text-accent hover:underline text-sm font-semibold">View All Bags</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-slate-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-slate-400 text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-400 hover:text-white text-sm">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-400 hover:text-white text-sm">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-300 text-xs">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-300 text-xs">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

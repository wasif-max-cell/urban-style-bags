import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Customisation', path: '/customisation' },
    { name: 'Bulk Orders', path: '/bulk-orders' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Top Utility Bar */}
      <div className="hidden md:block bg-primary text-white py-2 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex gap-6">
            <span><span className="text-accent mr-1 italic">LOCATION:</span> NABI KARIM PAHARGANJ, DELHI 110055</span>
            <span><span className="text-accent mr-1 italic">WHATSAPP:</span> {BUSINESS_INFO.whatsapp}</span>
          </div>
          <span className="opacity-70">Bulk Bag Manufacturer & Wholesaler</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center group">
            <div className="bg-primary p-2 mr-3 rounded-sm transition-transform group-hover:scale-105">
              <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center font-black text-xl text-white">U</div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-black tracking-tighter text-primary leading-none uppercase">
                URBAN STYLE <span className="text-accent underline underline-offset-1">BAGS</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mt-1">Manufacturing Excellence</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-accent ${
                  pathname === link.path ? 'text-accent' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/products"
              className="px-6 py-2.5 border-2 border-primary text-primary font-black text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all whitespace-nowrap"
            >
              Catalogue
            </Link>
            <Link
              to="/bulk-orders"
              className="bg-accent text-white px-6 py-3 shadow-xl shadow-accent/20 font-black text-[10px] tracking-[0.2em] uppercase hover:bg-orange-600 transition-all whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-slate-100 p-6 space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-xs font-black uppercase tracking-widest text-slate-800"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="w-full border-2 border-primary text-primary py-3 text-center font-black text-[10px] uppercase tracking-widest"
              >
                Catalogue
              </Link>
              <Link
                to="/bulk-orders"
                onClick={() => setIsOpen(false)}
                className="w-full bg-accent text-white py-3 text-center font-black text-[10px] uppercase tracking-widest shadow-lg"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

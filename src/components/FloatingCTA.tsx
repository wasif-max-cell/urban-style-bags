import { Phone, ArrowUp } from 'lucide-react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.393 0 12.015c0 2.115.539 4.18 1.59 6.009L0 24l6.135-1.61a11.826 11.826 0 005.915 1.586h.005c6.638 0 12.019-5.396 12.023-12.022a11.854 11.854 0 00-3.48-8.487" />
  </svg>
);

export default function FloatingCTA() {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 z-40 flex flex-col gap-4">
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-primary border border-slate-200 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3">
        {/* WhatsApp Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent("Hi, I am interested in bulk manufacturing of backpacks and bags. Please share your catalog and wholesale prices.")}`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:bg-green-600 transition-colors group relative"
          aria-label="WhatsApp Inquiry"
        >
          <WhatsAppIcon className="w-7 h-7" />
          <span className="absolute right-16 bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100 pointer-events-none whitespace-nowrap">
            WhatsApp for Quote
          </span>
        </motion.a>

        {/* Call Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`tel:${BUSINESS_INFO.phone}`}
          className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-xl shadow-accent/30 hover:bg-opacity-90 transition-colors group relative"
          aria-label="Call for Bulk Orders"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100 pointer-events-none whitespace-nowrap">
            Call for Bulk Quote
          </span>
        </motion.a>
      </div>

      {/* Mobile Sticky Bar - Only visible on small screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2 px-4 grid grid-cols-2 gap-3 z-50">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          className="bg-primary text-white py-2.5 rounded-lg flex items-center justify-center gap-2 font-bold text-sm"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a 
          href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent("Hi, I am interested in bulk manufacturing of backpacks and bags. Please share your catalog and wholesale prices.")}`}
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 font-bold text-sm"
        >
          <WhatsAppIcon className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}


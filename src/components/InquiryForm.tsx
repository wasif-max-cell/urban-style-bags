import React from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

interface InquiryFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function InquiryForm({ 
  title = "Bulk Inquiry", 
  subtitle = "Direct factory pricing for bulk orders",
  compact = false 
}: InquiryFormProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    quantity: '100 - 500 Pieces',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Bulk Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Company:* ${formData.company}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Quantity:* ${formData.quantity}%0A` +
      `*Requirement:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\+/g, '').replace(/-/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-none border-t-8 border-accent shadow-2xl text-center space-y-4">
        <div className="w-16 h-16 bg-highlight/10 text-highlight rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-primary uppercase tracking-tight">Requirement Shared!</h3>
        <p className="text-slate-600 text-sm">We've redirected you to WhatsApp to start the conversation.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-accent font-black uppercase tracking-[0.2em] text-[10px] hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-none border-t-8 border-accent shadow-2xl ${compact ? 'p-6' : 'p-10'}`}>
      <div className="mb-8 text-center sm:text-left">
        <h2 className={`${compact ? 'text-lg' : 'text-2xl'} font-black text-primary mb-1 uppercase tracking-tighter`}>{title}</h2>
        <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.3em]">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 block ml-1">Contact Name</label>
            <input 
              required
              name="name"
              type="text" 
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#F8FAFC] px-4 py-4 border border-slate-200 focus:border-accent outline-none text-[11px] font-bold uppercase tracking-widest placeholder:opacity-60 text-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 block ml-1">Org / School / College</label>
            <input 
              required
              name="company"
              type="text" 
              placeholder="Institution Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#F8FAFC] px-4 py-4 border border-slate-200 focus:border-accent outline-none text-[11px] font-bold uppercase tracking-widest placeholder:opacity-60 text-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 block ml-1">Phone Number</label>
            <input 
              required
              name="phone"
              type="tel" 
              placeholder="+91..."
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#F8FAFC] px-4 py-4 border border-slate-200 focus:border-accent outline-none text-[11px] font-bold uppercase tracking-widest placeholder:opacity-60 text-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 block ml-1">Email Address</label>
            <input 
              required
              name="email"
              type="email" 
              placeholder="office@..."
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#F8FAFC] px-4 py-4 border border-slate-200 focus:border-accent outline-none text-[11px] font-bold uppercase tracking-widest placeholder:opacity-60 text-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 block ml-1">Order Quantity</label>
          <select 
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full bg-[#F8FAFC] px-4 py-4 border border-slate-200 focus:border-accent outline-none text-[11px] font-black uppercase tracking-widest cursor-pointer appearance-none text-primary"
          >
            <option>100 - 500 Pieces</option>
            <option>500 - 2000 Pieces</option>
            <option>2000+ Institutional Order</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 block ml-1">Requirement (Bag Type/Branding)</label>
          <textarea 
            required
            name="message"
            rows={3}
            placeholder="Describe your bulk requirements..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#F8FAFC] px-4 py-4 border border-slate-200 focus:border-accent outline-none text-[11px] font-bold uppercase tracking-widest resize-none placeholder:opacity-60 text-primary"
          ></textarea>
        </div>

        <motion.button 
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-accent text-white py-4 rounded-none font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-accent/40"
        >
          SUBMIT INQUIRY <Send className="w-4 h-4" />
        </motion.button>

        <p className="text-[9px] text-center text-slate-500 font-bold uppercase tracking-widest">
          Secure B2B Transmission • Direct to Factory
        </p>
      </form>
    </div>
  );
}

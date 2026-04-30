import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import InquiryForm from '../components/InquiryForm';
import heroBanner from '../assets/hero-banner.jpg';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Contact Us - Bag Manufacturer In Delhi" />
      
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Contact Our Sales Hub</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Connect with Delhi's premier backpack manufacturing facility. We're here to help you with wholesale inquiries, custom orders, and factory visits.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Get In Touch</h2>
              <p className="text-slate-600">Our dedicated support team is available from 10:00 AM to 7:00 PM (Monday to Saturday) to assist you with your bulk bag requirements.</p>
            </div>

            <div className="grid gap-8">
              {[
                { 
                  icon: MapPin, 
                  title: "Our Factory Address", 
                  content: BUSINESS_INFO.address,
                  action: "Get Directions",
                  link: "#"
                },
                { 
                  icon: Phone, 
                  title: "Direct Sales Line", 
                  content: BUSINESS_INFO.phone,
                  action: "Call Now",
                  link: `tel:${BUSINESS_INFO.phone}`
                },
                { 
                  icon: MessageSquare, 
                  title: "WhatsApp Marketplace", 
                  content: "Available for quick quotes & photos",
                  action: "Chat on WhatsApp",
                  link: `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\+/g, '')}`
                },
                { 
                  icon: Mail, 
                  title: "Email Support", 
                  content: BUSINESS_INFO.email,
                  action: "Send Email",
                  link: `mailto:${BUSINESS_INFO.email}`
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-accent/40 transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.content}</p>
                    <a href={item.link} className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all pt-1">
                      {item.action} <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary text-white p-10 rounded-3xl space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Clock className="w-6 h-6 text-accent" /> Business Hours
              </h3>
              <div className="grid grid-cols-2 gap-4 text-slate-300 text-sm">
                <div>
                  <span className="block font-bold text-white">Monday - Saturday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div>
                  <span className="block font-bold text-white">Sunday</span>
                  <span className="text-accent">Closed (Pre-booked Visits Only)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:sticky lg:top-32">
             <InquiryForm title="Send us a Message" />
          </div>
        </div>
      </div>
      
      {/* Map Embed Full Width */}
      <section className="h-[500px] w-full bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.123!2d77.214!3d28.647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd39c0000001%3A0xe5a5a1f6a1a1a1a1!2sNabi%20Karim%2C%20Delhi!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale lg:opacity-100 opacity-80"
        />
      </section>
    </div>
  );
}

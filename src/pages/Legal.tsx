import React from 'react';
import SEO from '../components/SEO';
import heroBanner from '../assets/hero-banner.jpg';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-slate-50">
    <header className="bg-primary pt-32 pb-20 relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-15 z-0"
        style={{ 
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">{title}</h1>
      </div>
    </header>

    <div className="container mx-auto px-4 py-20 max-w-3xl bg-white p-12 rounded-3xl shadow-sm border border-slate-100 my-10">
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        {children}
      </div>
    </div>
  </div>
);

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <SEO title="Privacy Policy" />
      <p>Effective Date: April 2024</p>
      <p>Welcome to Urban Style Bags. We value your privacy and are committed to protecting your personal data. This policy outlines how we handle information collected through our website for wholesale inquiries.</p>
      <h3 className="text-xl font-bold text-primary pt-4">1. Information We Collect</h3>
      <p>We collect information you provide directly to us through our inquiry forms, including your name, company name, phone number, email address, and order requirements.</p>
      <h3 className="text-xl font-bold text-primary pt-4">2. How We Use Your Information</h3>
      <p>We use your information exclusively to respond to your bulk order inquiries, provide quotations, and communicate about potential business partnerships.</p>
      <h3 className="text-xl font-bold text-primary pt-4">3. Data Security</h3>
      <p>We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</p>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout title="Terms & Conditions">
      <SEO title="Terms & Conditions" />
      <p>By accessing this website, you agree to comply with the following terms and conditions related to our wholesale and manufacturing services.</p>
      <h3 className="text-xl font-bold text-primary pt-4">1. Wholesale Orders Only</h3>
      <p>Urban Style Bags is a manufacturer and wholesaler. We primarily cater to bulk orders. Minimum order quantities (MOQ) apply to all products unless otherwise stated.</p>
      <h3 className="text-xl font-bold text-primary pt-4">2. Quotations & Pricing</h3>
      <p>Quotations provided via the website are estimates. Final pricing depends on order volume, customization requirements, and current material costs. Quotations are valid for 15 days.</p>
      <h3 className="text-xl font-bold text-primary pt-4">3. Manufacturing Timelines</h3>
      <p>Estimated production timelines are provided for each order. While we strive to meet all deadlines, manufacturing is subject to material availability and logistical factors.</p>
    </LegalLayout>
  );
}

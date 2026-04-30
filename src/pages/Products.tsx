import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Tag, 
  Filter, 
  ArrowRight,
  Search,
  ShoppingCart
} from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../constants';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import heroBanner from '../assets/hero-banner.jpg';

import schoolBagBlack from '../assets/school-bag-black-provogue.jpg.jpg';
import schoolBagBlue from '../assets/school-bag-blue-astronaut.jpg.jpg';
import trekkingBag1 from '../assets/trekking-bag-1.jpg';
import trekkingBag2 from '../assets/trekking-bag-2.jpg';
import officeBag1 from '../assets/office-bag-1.jpg';
import officeBag2 from '../assets/office-bag-2.jpg';
import travelBag1 from '../assets/travel-bag-1.jpg';
import travelBag2 from '../assets/travel-bag-2.png';
import luggageBag1 from '../assets/luggage-bag-1.png';
import luggageBag2 from '../assets/luggage-bag-2.jpg';
import customBag1 from '../assets/custom-bag-1.png';
import customBag2 from '../assets/custom-bag-2.png';

export default function Products() {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat');
  const [selectedCategory, setSelectedCategory] = React.useState(catParam || 'all');

  const categories = [
    { id: 'all', title: 'All Bags' },
    ...PRODUCT_CATEGORIES
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? PRODUCT_CATEGORIES 
    : PRODUCT_CATEGORIES.filter(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO title="Wholesale Collection - School, College & Office Bag Manufacturer" keywords={PRODUCT_CATEGORIES.map(c => c.keywords).flat()} />
      
      {/* Header */}
      <header className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-15 z-0"
          style={{ 
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 uppercase tracking-tight text-white">Wholesale Bag <br/><span className="text-accent">Collection Delhi</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our diverse range of high-quality backpacks manufactured in Nabi Karim, Paharganj Delhi. Designed for schools, colleges, and corporate giants across India.
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl overflow-x-auto no-scrollbar py-4">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 mr-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest shrink-0">
              <Filter className="w-4 h-4" /> Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id 
                    ? 'bg-accent border-accent text-white shadow-md' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-20">
            {filteredCategories.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-40 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-primary">{cat.title}</h2>
                    <p className="text-slate-500 max-w-xl">{cat.description}</p>
                  </div>
                  <Link to="/bulk-orders" className="text-accent font-bold flex items-center gap-2 hover:underline">
                    Bulk Inquiry <Tag className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Item Placeholders - Updated to 2 items and category-relevant images */}
                  {[1, 2].map((i) => {
                    const images: Record<string, any[]> = {
                      school: [
                        schoolBagBlack,
                        schoolBagBlue
                      ],
                      college: [
                        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1887&auto=format&fit=crop'
                      ],
                      office: [
                        officeBag1,
                        officeBag2
                      ],
                      trekking: [
                        trekkingBag1,
                        trekkingBag2
                      ],
                      travel: [
                        travelBag1,
                        travelBag2
                      ],
                      trolley: [
                        luggageBag1,
                        luggageBag2
                      ],
                      custom: [
                        customBag1,
                        customBag2
                      ]
                    };
                    const categoryImages = images[cat.id] || images.school;
                    const imgSrc = categoryImages[i-1] || categoryImages[0];

                    return (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg group"
                      >
                        <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
                          <img 
                            src={imgSrc} 
                            alt={cat.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest backdrop-blur-sm">
                            Model {cat.id[0].toUpperCase()}{i}0{i}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="pt-2">
                            <Link 
                              to="/bulk-orders" 
                              className="w-full bg-slate-50 border border-slate-200 text-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all"
                            >
                              Request more such bags <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-primary text-white p-8 rounded-3xl space-y-6 shadow-xl sticky top-40">
              <h3 className="text-2xl font-bold">Why Bulk Buy From Us?</h3>
              <ul className="space-y-4">
                {[
                  "Factory Direct Prices",
                  "High-Volume Capacity",
                  "Custom Branding Experts",
                  "Fast Shipping Across India",
                  "Quality Guaranteed"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link to="/contact" className="block w-full bg-accent text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-accent/20">
                  Talk to Sales Team
                </Link>
              </div>
            </div>

            <div className="p-8 border border-slate-200 rounded-3xl bg-white space-y-4">
              <h4 className="text-lg font-bold text-primary">Request PDF Catalogue</h4>
              <p className="text-slate-500 text-sm">Download our latest 2024 collection with detailed specs.</p>
              <button className="w-full py-4 border-2 border-slate-100 rounded-xl font-bold text-slate-400 flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all cursor-not-allowed">
                 PDF Coming Soon
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Inquiry Footer Placeholder */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-8">
          <h3 className="text-3xl font-bold">Can't find what you're looking for?</h3>
          <p className="text-slate-400 max-w-xl mx-auto">We offer bespoke manufacturing for completely new bag designs. Send us your sketches or specs.</p>
          <div className="flex justify-center gap-4">
            <Link to="/bulk-orders" className="bg-accent text-white px-8 py-3 rounded-lg font-bold">Custom Development</Link>
            <Link to="/contact" className="bg-white/10 text-white px-8 py-3 rounded-lg font-bold border border-white/20">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

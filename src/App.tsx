import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

// Late Loaded Pages
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const Customisation = React.lazy(() => import('./pages/Customisation'));
const BulkOrders = React.lazy(() => import('./pages/BulkOrders'));
const Industries = React.lazy(() => import('./pages/Industries'));
const Privacy = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Privacy })));
const Terms = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Terms })));

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <React.Suspense fallback={<div className="h-screen flex items-center justify-center text-primary font-bold">Loading Urban Style...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/customisation" element={<Customisation />} />
                <Route path="/bulk-orders" element={<BulkOrders />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                {/* Fallback */}
                <Route path="*" element={<Home />} />
              </Routes>
            </React.Suspense>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </Router>
    </HelmetProvider>
  );
}

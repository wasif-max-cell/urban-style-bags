import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

export default function SEO({ title, description, keywords, canonicalUrl }: SEOProps) {
  // Enhanced Title Structure: [High Intent Keyword] | [Business Name] | [Area/City]
  const baseTitle = "Bag Manufacturer in Delhi - Urban Style Bags";
  const finalTitle = title 
    ? `${title} | ${baseTitle}` 
    : `Urban Style Bags - #1 Bag Wholesaler & Manufacturer in Nabi Karim, Paharganj Delhi`;
    
  const finalDescription = description || "Urban Style Bags is Delhi's premier bag manufacturer and wholesaler in Nabi Karim. We specialize in bulk school bags, corporate backpacks, travel bags, and custom promotional bags. Direct factory prices and premium quality.";
  
  const highIntentKeywords = [
    "bag manufacturer in delhi",
    "bag wholesaler in delhi",
    "school bag manufacturer nabi karim",
    "custom bag supplier paharganj",
    "bulk bags manufacturer india",
    "travel bag wholesaler delhi",
    "promotional bags manufacturer",
    "backpack manufacturer nabi karim delhi",
    "wholesale bag market delhi",
    "urban style bags delhi"
  ];
  
  const finalKeywords = keywords ? [...highIntentKeywords, ...keywords].join(', ') : highIntentKeywords.join(', ');
  const currentUrl = canonicalUrl || typeof window !== 'undefined' ? window.location.href : '';

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://urbanstylebags.com/logo.png", // Placeholder
    "@id": "https://urbanstylebags.com",
    "url": "https://urbanstylebags.com",
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
      "latitude": 28.6489,
      "longitude": 77.2144
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
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\+/g, '')}`
    ],
    "priceRange": "₹₹"
  };

  // Product Schema (for Bulk Manufacturing Services)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Bag Manufacturing",
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name
    },
    "areaServed": "India",
    "description": "Bulk manufacturing and wholesale supply of backpacks, school bags, and promotional bags."
  };

  return (
    <Helmet>
      {/* Title & Basics */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Geo Meta Tags for local SEO */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Nabi Karim, Paharganj, Delhi" />
      <meta name="geo.position" content="28.648943;77.214441" />
      <meta name="ICBM" content="28.648943, 77.214441" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      
      {/* Technical SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      {currentUrl && <link rel="canonical" href={currentUrl} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
}

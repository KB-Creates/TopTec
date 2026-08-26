import React from 'react';
import CategoryPage from '../CategoryPage';
import { Wind } from 'lucide-react';

import { airCleaningProducts } from '../../../data/air-cleaning';

const AirCleaning = () => {
  const subcategories = [
    { name: 'Laminar Air Flow Hoods', href: '/air/laminar-flow' },
    { name: 'Biosafety Cabinets', href: '/air/biosafety-cabinets' },
    { name: 'Fume Hoods / Fume Extraction', href: '/air/fume-hoods' },
    { name: 'Air Purifiers', href: '/air/purifiers' },
    { name: 'Pass Boxes', href: '/air/pass-boxes' },
    { name: 'Sampling Booths', href: '/air/sampling-booths' },
    { name: 'Dispensing Booths', href: '/air/dispensing-booths' },
    { name: 'Air Showers', href: '/air/air-showers' },
    { name: 'Fan Filter Units (Ffu)', href: '/air/ffu' },
    { name: 'Pharma Doors', href: '/air/doors' },
    { name: 'Pharma Windows', href: '/air/windows' },
    { name: 'Cross-Over Bench', href: '/air/cross-over-bench' },
  ];

  return (
    <CategoryPage 
      title="Air Cleaning"
      description={`We offer a comprehensive range of reliable Air Cleaning and Cleanroom Equipment designed for controlled and contamination-sensitive environments. Our solutions are engineered to support efficient airflow management, contamination control, hygiene, and cleanroom integrity across pharmaceutical, biotechnology, healthcare, and laboratory applications.

      With a strong focus on quality, precision, and reliability, we provide solutions that deliver consistent performance and long-term value. From individual equipment to complete cleanroom setups, our commitment is to provide dependable, high-performance equipment that supports modern pharmaceutical and cleanroom standards.`}
      icon={<Wind size={32} />}
      image="https://toptec.pk/wp-content/uploads/2024/04/Air-Shower-Image-768x768.png"
      subcategories={subcategories}
      products={airCleaningProducts}
    />
  );
};

export default AirCleaning;

import React from 'react';
import CategoryPage from '../CategoryPage';
import { Filter } from 'lucide-react';

import { airFiltersProducts } from '../../../data/air-filters';

const AirFilters = () => {
  const subcategories = [
    { name: 'Hepa Filters', href: '/filters/hepa' },
    { name: 'Pre Filters', href: '/filters/pre' },
    { name: 'Carbon/Activated Carbon Filters', href: '/filters/carbon' },
    { name: 'Bag Filters', href: '/filters/bag' },
    { name: 'V-Bank Filters', href: '/filters/v-bank' },
    { name: 'Box/Panel Filters', href: '/filters/box-panel' },
    { name: 'Compact Filters', href: '/filters/compact' },
    { name: 'Washable / Reusable Filters', href: '/filters/washable' },
    { name: 'Terminal Hepa Box', href: '/filters/terminal-hepa' },
  ];

  return (
    <CategoryPage 
      title="Air Filters"
      description={`Air Filters are essential for maintaining clean, controlled, and efficient airflow. Designed to remove dust, airborne particles, and contaminants from the air, they are ideal for pharmaceutical, industrial, commercial, and cleanroom environments. 
      They help protect products, equipment, and processes from airborne contamination while supporting high standards of hygiene, safety, and air quality—delivering reliable performance for clean, safe, and controlled working environments.`}  
      icon={<Filter size={32} />}
      image="/images/airfilters.jpg"
      subcategories={subcategories}
      products={airFiltersProducts}
    />
  );
};

export default AirFilters;

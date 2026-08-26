import React from 'react';
import CategoryPage from '../CategoryPage';
import { Settings } from 'lucide-react';

import { productionMachineryProducts } from '../../../data/production-machinery';

const ProductionMachinery = () => {
  const subcategories = [
    { name: 'Tablet Section Machines', href: '/machinery/tablet' },
    { name: 'Capsule Section Machines', href: '/machinery/capsule' },
    { name: 'Liquid Syrup Section', href: '/machinery/liquid-syrup' },
    { name: 'Dry-Syrup Section', href: '/machinery/dry-syrup' },
    { name: 'Ointment/Cream Section', href: '/machinery/ointment' },
    { name: 'Sachet Section Machine', href: '/machinery/sachet' },
    { name: 'Eye Drop Section Machine', href: '/machinery/eye-drop' },
    { name: 'Inspection & Packaging', href: '/machinery/packaging' },
  ];

  return (
    <CategoryPage 
      title="Production Machinery"
      description={`We provide a comprehensive range of Pharmaceutical Production Machinery designed to meet the diverse requirements of modern pharmaceutical manufacturing. Our machinery portfolio includes both locally manufactured and imported solutions, allowing clients to choose according to their specific application and requirements.

      We cater to multiple pharmaceutical production sections with reliable, efficient, and technically advanced machinery solutions. With a focus on quality, performance, and customization, we deliver complete machinery solutions designed to support efficient production and consistent results.`}
      icon={<Settings size={32} />}
      image="/slider/production.jpg"
      subcategories={subcategories}
      products={productionMachineryProducts}
    />
  );
};

export default ProductionMachinery;

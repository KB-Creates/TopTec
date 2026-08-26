import React from 'react';
import CategoryPage from '../CategoryPage';
import { Layers } from 'lucide-react';
import cleanRoomBanner from '../../../assets/clean room banner.webp';

import { sterileProcessingProducts } from '../../../data/sterile-processing';

const SterileProcessing = () => {
  const subcategories = [
    { name: 'Cleanroom Panels', href: '/sterile/panels' },
    { name: 'Cleanroom Doors', href: '/sterile/doors' },
    { name: 'Flooring (Epoxy / Vinyl)', href: '/sterile/flooring' },
    { name: 'Cleanroom Lighting', href: '/sterile/lighting' },
    { name: 'Cleanroom Furniture', href: '/sterile/furniture' },
    { name: 'Garment Storage Cabinets', href: '/sterile/storage' },
    { name: 'Clean Tunnels', href: '/sterile/tunnels' },
    { name: 'Validation Services', href: '/sterile/validation' },
    { name: 'Turnkey Cleanroom Setup', href: '/sterile/turnkey' },
  ];

  return (
    <CategoryPage 
      title="Clean Room Solutions"
      description={`We provide complete Cleanroom Solutions designed for controlled, hygienic, and contamination-sensitive environments. Our solutions are engineered with a strong focus on quality, precision, functionality, and cleanroom integrity.

      From individual components to complete turnkey cleanroom projects, we deliver professionally designed solutions tailored to specific client requirements. With experienced technical expertise and reliable execution, we ensure high-quality cleanroom environments suitable for pharmaceutical, healthcare, laboratory, and other critical applications.`}
      icon={<Layers size={32} />}
      image={cleanRoomBanner}
      subcategories={subcategories}
      products={sterileProcessingProducts}
    />
  );
};

export default SterileProcessing;

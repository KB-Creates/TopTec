import React from 'react';
import CategoryPage from '../CategoryPage';
import { Zap } from 'lucide-react';

import { hvacSystemsProducts } from '../../../data/hvac-systems';

const HVACSystems = () => {
  const subcategories = [
    { name: 'AHU (Air Handling Units)', href: '/hvac/ahu' },
    { name: 'FCU (Fan Coil Units)', href: '/hvac/fcu' },
    { name: 'Chillers', href: '/hvac/chillers' },
    { name: 'Dehumidifiers / Humidifiers', href: '/hvac/dehumidifiers' },
    { name: 'Ducting Systems', href: '/hvac/ducting' },
    { name: 'Air Diffusers / Grilles', href: '/hvac/diffusers' },
    { name: 'Exhaust & Fresh Air Systems', href: '/hvac/exhaust' },
    { name: 'Pressurization Systems', href: '/hvac/pressurization' },
    { name: 'Precision Air Conditioning', href: '/hvac/precision-ac' },
  ];

  return (
    <CategoryPage 
      title="HVAC Systems"
      description={`We provide complete HVAC Solutions designed to maintain precise temperature, humidity, pressure, and air quality in controlled environments. Our expertise covers complete HVAC system design, supply, installation, and commissioning for pharmaceutical, cleanroom, industrial, and commercial applications.

      With a strong focus on energy efficiency, reliable performance, and effective airflow management, we deliver solutions tailored to specific project requirements. From individual HVAC requirements to complete turnkey systems, our experienced technical team ensures professional execution and dependable long-term performance.`}
      icon={<Zap size={32} />}
      image="/slider/cleanroom-suit.jpg"
      subcategories={subcategories}
      products={hvacSystemsProducts}
    />
  );
};

export default HVACSystems;

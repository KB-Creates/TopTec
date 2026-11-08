import React from 'react';
import CategoryPage from '../CategoryPage';
import { FlaskConical } from 'lucide-react';

import { laboratoryEquipmentProducts } from '../../../data/laboratory-equipment';

const LaboratoryEquipment = () => {
  const subcategories = [
    { name: 'Chromatography Equipment', href: '/science/chromatography' },
    { name: 'General Lab Equipment', href: '/science/general' },
    { name: 'Microbiological Equipment', href: '/science/microbiological' },
    { name: 'Optical / Analytical', href: '/science/optical' },
    { name: 'Tablet Testing Equipment', href: '/science/tablet-testing' },
    { name: 'Titration / Measuring', href: '/science/titration' },
  ];

  return (
    <CategoryPage 
      title="Laboratory Equipment"
      description={`We offer a comprehensive range of high-quality Laboratory Equipment sourced from reputed international and specialized manufacturers. Our portfolio covers a wide range of laboratory and analytical applications, with solutions available in premium branded as well as high-grade international options.

      We provide flexibility to select the preferred brand and specification according to the client’s application, performance requirements, and budget. With an extensive product range and reliable sourcing network, we deliver accurate, dependable, and application-focused laboratory solutions.`}
      icon={<FlaskConical size={32} />}
      image="/images/laboratory-equipment.png"
      subcategories={subcategories}
      products={laboratoryEquipmentProducts}
    />
  );
};

export default LaboratoryEquipment;

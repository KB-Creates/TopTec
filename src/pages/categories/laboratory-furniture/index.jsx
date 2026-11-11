import React from 'react';
import CategoryPage from '../CategoryPage';
import { Building2 } from 'lucide-react';

import { laboratoryFurnitureProducts } from '../../../data/laboratory-furniture';

const LaboratoryFurniture = () => {
  const subcategories = [
    { name: 'Employees Lockers', href: '/furniture/employees-lockers' },
    { name: 'Stainless Steel Lockers', href: '/furniture/ss-lockers' },
    { name: 'Cupboards', href: '/furniture/cupboards' },
    { name: 'Wall Cabinets', href: '/furniture/wall-cabinets' },
    { name: 'Garment Storage Cabinets', href: '/furniture/garment-storage' },
    { name: 'Chemical / Safety Cabinets', href: '/furniture/safety-cabinets' },
    { name: 'Workstations & Tables', href: '/furniture/workstations' },
    { name: 'I-Shape Laboratory Tables', href: '/furniture/i-shape-tables' },
    { name: 'L-Shape Laboratory Tables', href: '/furniture/l-shape-tables' },
    { name: 'Continues / Modular Lab Benches', href: '/furniture/modular-benches' },
    { name: 'Central / Island Work Tables', href: '/furniture/island-tables' },
    { name: 'Designing / Drafting Tables', href: '/furniture/drafting-tables' },
    { name: 'Ss Working Tables', href: '/furniture/ss-working-tables' },
    { name: 'Stainless Steel Sinks', href: '/furniture/ss-sinks' },
    { name: 'Hand Wash Stations', href: '/furniture/hand-wash' },
    { name: 'Eye Wash / Safety Shower', href: '/furniture/safety-shower' },
    { name: 'Stainless Steel Stools', href: '/furniture/ss-stools' },
    { name: 'Stainless Steel Chairs', href: '/furniture/ss-chairs' },
    { name: 'Stainless Steel Trolleys', href: '/furniture/ss-trolleys' },
  ];

  return (
    <CategoryPage 
      title="Laboratory Furniture"
      description={`As a premier laboratory furniture manufacturer in Pakistan, we engineer durable, fully compliant lab environments tailored to the demanding standards of research institutions, pharmaceutical QC departments, and educational laboratories. Our complete product lineup—spanning chemical-resistant epoxy resin workbenches, hygienic stainless-steel tables, modular casework, heavy-duty chemical storage cabinets, and high-efficiency fume extraction hoods—is built for safety, ergonomic comfort, and decades of rigorous daily use. Backed by end-to-end local support, including on-site surveys, custom CAD layouts, utility integration, and professional installation across Pakistan, we deliver fully certified, reconfigurable workspaces at factory-direct, highly competitive prices.`}
      icon={<Building2 size={32} />}
      image="/images/labfurniture.jpg"
      subcategories={subcategories}
      products={laboratoryFurnitureProducts}
    />
  );
};

export default LaboratoryFurniture;

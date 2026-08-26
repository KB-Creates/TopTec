export const searchData = [
  // Core Pages
  { name: 'Home', type: 'Page', href: '/' },
  { name: 'About Us', type: 'Page', href: '/about' },
  { name: 'Contact Us', type: 'Page', href: '/contact' },

  // Main Categories
  { name: 'Air Filters', type: 'Category', href: '/categories/air-filters' },
  { name: 'Air Cleaning', type: 'Category', href: '/categories/air-cleaning' },
  { name: 'Laboratory Furniture', type: 'Category', href: '/categories/laboratory-furniture' },
  { name: 'Production Machinery', type: 'Category', href: '/categories/production-machinery' },
  { name: 'Laboratory Equipment', type: 'Category', href: '/categories/laboratory-equipment' },
  { name: 'Clean Room', type: 'Category', href: '/categories/sterile-processing' },
  { name: 'HVAC Systems', type: 'Category', href: '/categories/hvac-systems' },

  // Subcategories & Products - Air Filters
  { name: 'HEPA Filters (H13/H14)', type: 'Subcategory', href: '/filters/hepa' },
  { name: 'HEPA Filter', type: 'Product', href: '/product/hepa-filter' },
  { name: 'H13 H14 Mini Pleat HEPA Filter for Pharmaceutical Industry', type: 'Product', href: '/product/h13-h14-mini-pleat-hepa-filter-pharmaceutical' },
  { name: 'Gel Seal HEPA Filter Polyurethane Gel Sealed High Efficiency Air Filter For Cleanroom', type: 'Product', href: '/product/gel-seal-hepa-filter-polyurethane-cleanroom' },
  { name: 'Pre Filters', type: 'Subcategory', href: '/filters/pre' },
  { name: 'Panel Pre Filter', type: 'Product', href: '/product/panel-pre-filter' },
  { name: 'Fiberglass Panel Pre Filter for Paint Booth', type: 'Product', href: '/product/fiberglass-panel-pre-filter-paint-booth' },
  { name: 'High Temperature Resistant Coarse Air Filter for Baked Oven', type: 'Product', href: '/product/high-temperature-coarse-air-filter-baked-oven' },
  { name: 'G4/MERV8 Galvanized Frame Pleated Pre Filter', type: 'Product', href: '/product/g4-merv8-galvanized-frame-pleated-pre-filter' },
  { name: 'Disposable Pleated Pre Filter', type: 'Product', href: '/product/disposable-pleated-pre-filter' },
  { name: 'Activated Carbon Filters', type: 'Subcategory', href: '/filters/carbon' },
  { name: 'Pleated Activated Carbon Odor Removal Air Filter', type: 'Product', href: '/product/pleated-activated-carbon-odor-removal-air-filter' },
  { name: 'Bag Filters', type: 'Subcategory', href: '/filters/bag' },
  { name: 'F5-F9 Synthetic Multi Pocket Filter', type: 'Product', href: '/product/f5-f9-synthetic-multi-pocket-filter' },
  { name: 'Glass Fiber Compact Multi-pocket Bag Filter', type: 'Product', href: '/product/glass-fiber-compact-multi-pocket-bag-filter' },
  { name: 'V-Bank Filters', type: 'Subcategory', href: '/filters/v-bank' },
  { name: 'Galvanized Frame V-Type HEPA Filter', type: 'Product', href: '/product/galvanized-frame-v-type-hepa-filter' },
  { name: 'HV Combined HEPA Filter', type: 'Product', href: '/product/hv-combined-hepa-filter' },
  { name: 'V-Bank Compact Filter', type: 'Product', href: '/product/v-bank-compact-filter' },
  { name: 'Box & Panel Filters', type: 'Subcategory', href: '/filters/box-panel' },
  { name: 'Box Type HEPA Separator Filter', type: 'Product', href: '/product/box-type-hepa-separator-filter' },
  { name: 'Washable Filters', type: 'Subcategory', href: '/filters/washable' },
  { name: 'Washed Pre Filter', type: 'Product', href: '/product/washed-pre-filter' },
  { name: 'Permanent And Washable Aluminum Pre Filter', type: 'Product', href: '/product/permanent-and-washable-aluminum-pre-filter' },
  { name: 'Washable Nylon Mesh Pre Filter', type: 'Product', href: '/product/washable-nylon-mesh-pre-filter' },

  // Subcategories - Air Cleaning
  { name: 'Laminar Air Flow (LAF) Hoods', type: 'Subcategory', href: '/air/laminar-flow' },
  { name: 'Biosafety Cabinets Class II', type: 'Subcategory', href: '/air/biosafety-cabinets' },
  { name: 'Fume Hoods & Extraction', type: 'Subcategory', href: '/air/fume-hoods' },
  { name: 'Pass Boxes (Dynamic/Static)', type: 'Subcategory', href: '/air/pass-boxes' },
  { name: 'Air Showers', type: 'Subcategory', href: '/air/air-showers' },
  { name: 'Sampling Booths', type: 'Subcategory', href: '/air/sampling-booths' },
  { name: 'Dispensing Booths', type: 'Subcategory', href: '/air/dispensing-booths' },

  // Subcategories - Laboratory Furniture
  { name: 'SS 316L Lockers', type: 'Subcategory', href: '/furniture/ss-lockers' },
  { name: 'Laboratory Cupboards', type: 'Subcategory', href: '/furniture/cupboards' },
  { name: 'Modular Workstations', type: 'Subcategory', href: '/furniture/workstations' },
  { name: 'Island Work Tables', type: 'Subcategory', href: '/furniture/island-tables' },
  { name: 'Garment Storage', type: 'Subcategory', href: '/furniture/garment-storage' },

  // Subcategories - Production Machinery
  { name: 'Tablet Presses', type: 'Subcategory', href: '/machinery/tablet' },
  { name: 'Capsule Filling Machines', type: 'Subcategory', href: '/machinery/capsule' },
  { name: 'Liquid Filling Lines', type: 'Subcategory', href: '/machinery/liquid' },
  { name: 'Tray Dryers', type: 'Subcategory', href: '/machinery/tablet/tray-dryer' },
  { name: 'Colloid Mills', type: 'Subcategory', href: '/machinery/liquid/colloid-mill' },

  // Subcategories - Laboratory Equipment
  { name: 'HPLC Systems', type: 'Subcategory', href: '/science/chromatography/hplc' },
  { name: 'UV Spectrophotometers', type: 'Subcategory', href: '/science/chromatography/uv' },
  { name: 'Stability Chambers', type: 'Subcategory', href: '/science/general/stability-chamber' },
  { name: 'Dissolution Testers', type: 'Subcategory', href: '/science/tablet/dissolution' },
  { name: 'Autoclaves', type: 'Subcategory', href: '/science/microbiological/autoclave' },

  // Subcategories - Sterile Processing
  { name: 'Cleanroom Panels', type: 'Subcategory', href: '/sterile/panels' },
  { name: 'Hermetically Sealed Doors', type: 'Subcategory', href: '/sterile/doors' },
  { name: 'Epoxy Flooring', type: 'Subcategory', href: '/sterile/flooring' },

  // Subcategories - HVAC
  { name: 'AHU (Air Handling Units)', type: 'Subcategory', href: '/hvac/ahu' },
  { name: 'Chillers (Air/Water Cooled)', type: 'Subcategory', href: '/hvac/chillers' },
  { name: 'Dehumidification Systems', type: 'Subcategory', href: '/hvac/dehumidifiers' }
];

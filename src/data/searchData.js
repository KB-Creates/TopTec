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
  { name: 'HEPA Filters', type: 'Subcategory', href: '/filters/hepa' },
  { name: 'HEPA Filter', type: 'Product', href: '/product/hepa-filter' },
  { name: 'Mini Pleat HEPA Filter', type: 'Product', href: '/product/mini-pleat-hepa-filter' },
  { name: 'Pre Filters', type: 'Subcategory', href: '/filters/pre' },
  { name: 'Panel Pre Filter', type: 'Product', href: '/product/panel-pre-filter' },
  { name: 'Fiberglass Panel Pre Filter for Paint Booth', type: 'Product', href: '/product/fiberglass-panel-pre-filter-paint-booth' },
  { name: 'High Temperature Resistant Coarse Air Filter for Baked Oven', type: 'Product', href: '/product/high-temperature-coarse-air-filter-baked-oven' },
  { name: 'G4/MERV8 Galvanized Frame Pleated Pre Filter', type: 'Product', href: '/product/g4-merv8-galvanized-frame-pleated-pre-filter' },
  { name: 'Disposable Pleated Pre Filter', type: 'Product', href: '/product/disposable-pleated-pre-filter' },
  { name: 'Carbon/Activated Carbon Filters', type: 'Subcategory', href: '/filters/carbon' },
  { name: 'HVAC Activated Carbon Pocket Filter', type: 'Product', href: '/product/hvac-activated-carbon-pocket-filter' },
  { name: 'Bag Filters', type: 'Subcategory', href: '/filters/bag' },
  { name: 'F5-F9 Synthetic Multi Pocket Filter', type: 'Product', href: '/product/f5-f9-synthetic-multi-pocket-filter' },
  { name: 'Glass Fiber Compact Multi-pocket Bag Filter', type: 'Product', href: '/product/glass-fiber-compact-multi-pocket-bag-filter' },
  { name: 'V-Bank Filters', type: 'Subcategory', href: '/filters/v-bank' },
  { name: 'Galvanized Frame V-Type HEPA Filter', type: 'Product', href: '/product/galvanized-frame-v-type-hepa-filter' },
  { name: 'HV Combined HEPA Filter', type: 'Product', href: '/product/hv-combined-hepa-filter' },
  { name: 'V-Bank Compact Filter', type: 'Product', href: '/product/v-bank-compact-filter' },
  { name: 'Box & Panel Filters', type: 'Subcategory', href: '/filters/box-panel' },
  { name: 'Washable Filters', type: 'Subcategory', href: '/filters/washable' },
  { name: 'Washed Pre Filter', type: 'Product', href: '/product/washed-pre-filter' },
  { name: 'Terminal HEPA Box', type: 'Subcategory', href: '/filters/terminal-hepa' },
  { name: 'HEPA Housing Box', type: 'Product', href: '/product/hepa-housing-box' },

  // Subcategories - Air Cleaning
  { name: 'Laminar Air Flow (LAF) Hoods', type: 'Subcategory', href: '/air/laminar-flow' },
  { name: 'Biosafety Cabinets Class II', type: 'Subcategory', href: '/air/biosafety-cabinets' },
  { name: 'Fume Hoods & Extraction', type: 'Subcategory', href: '/air/fume-hoods' },
  { name: 'Fume Hood', type: 'Product', href: '/product/fume-hood' },
  { name: 'Air Purifiers', type: 'Subcategory', href: '/air/purifiers' },
  { name: 'Air Purifier', type: 'Product', href: '/product/air-purifier' },
  { name: 'Pass Boxes (Dynamic/Static)', type: 'Subcategory', href: '/air/pass-boxes' },
  { name: 'Pass Boxes (Dynamic & Static)', type: 'Product', href: '/product/pass-boxes' },
  { name: 'Air Showers', type: 'Subcategory', href: '/air/air-showers' },
  { name: 'Air Shower', type: 'Product', href: '/product/air-shower-standard' },
  { name: 'Sampling Booths', type: 'Subcategory', href: '/air/sampling-booths' },
  { name: 'Dispensing Booths', type: 'Subcategory', href: '/air/dispensing-booths' },
  { name: 'Fan Filter Units (FFU)', type: 'Subcategory', href: '/air/ffu' },
  { name: 'Fan Filter Unit (FFU)', type: 'Product', href: '/product/fan-filter-unit' },
  { name: 'Pharma Doors', type: 'Subcategory', href: '/air/doors' },

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

  // Subcategories & Products - Laboratory Equipment
  { name: 'Chromatography Equipment', type: 'Subcategory', href: '/science/chromatography' },
  { name: 'HPLC Systems', type: 'Subcategory', href: '/science/chromatography/hplc' },
  { name: 'HPLC', type: 'Product', href: '/product/hplc' },
  { name: 'General Laboratory Equipment', type: 'Subcategory', href: '/science/general' },
  { name: 'Water Baths', type: 'Subcategory', href: '/science/general/water-bath' },
  { name: 'Thermostatic Water Bath', type: 'Product', href: '/product/thermostatic-water-bath-dk98-iia' },

  // Subcategories - Sterile Processing
  { name: 'Cleanroom Panels', type: 'Subcategory', href: '/sterile/panels' },
  { name: 'Hermetically Sealed Doors', type: 'Subcategory', href: '/sterile/doors' },
  { name: 'Epoxy Flooring', type: 'Subcategory', href: '/sterile/flooring' },

  // Subcategories - HVAC
  { name: 'AHU (Air Handling Units)', type: 'Subcategory', href: '/hvac/ahu' },
  { name: 'Chillers (Air/Water Cooled)', type: 'Subcategory', href: '/hvac/chillers' },
  { name: 'Dehumidification Systems', type: 'Subcategory', href: '/hvac/dehumidifiers' }
];

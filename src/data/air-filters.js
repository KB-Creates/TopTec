export const airFiltersProducts = [
  {
    slug: 'hepa-filter',
    name: 'HEPA Filter',
    category: 'Air Filters',
    subcategory: 'HEPA Filters',
    subcategorySlug: '/filters/hepa',
    description: 'HEPA (High-Efficiency Particulate Air) filters are a type of air filter designed to remove at least 99.97% of airborne particles 0.3 micrometers (µm) in diameter. They are widely used in cleanrooms, hospitals, pharmaceutical facilities, and HVAC systems to maintain high air quality. Our HEPA filters are constructed with high-quality micro glass fiber media and can be manufactured with various frame materials and sealing options to meet specific application requirements.',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/thumbnail-720-tiny.jpg',
    features: [
      'Efficiencies: 95%, 99%, 99.97% and 99.995% (H13/H14 as per BS EN 1822:2009)',
      'Frame Options: Galvanized Steel, Aluminized Steel, Stainless Steel (SUS)',
      'Frame Types: No Header (NH), Single Header (SH), Double Header (DH)',
      'Media: Dense Micro Glass Fiber with Corrugated Aluminum Foil Separators',
      'Sealants: HT Silicon (HT-250) or Ceramic / Glass Fiber Wrap (HT-350)',
      'Gasket: HT Foam / HT Rope (250°C) or PTFE White Gasket (350°C)',
      'UL Classified Flammability & 100% RH Relative Humidity Tolerance'
    ],
    specs: {
      'Efficiency': '95% to 99.995% @ 0.3 µm (H13/H14)',
      'Media Type': 'Micro Glass Fiber',
      'Separator': 'Corrugated Aluminum Foil',
      'Frame Material': 'Galvanized / Aluminized / Stainless Steel',
      'Frame Type': 'NH, SH, DH (Header Options)',
      'Sealant Type': 'HT Silicon / Ceramic Potting',
      'Max Operating Temp': '250°C (HT-250) / 350°C (HT-350)',
      'Peak Temp Resistance': 'Up to 400°C',
      'Final Resistance': '500 Pa (2.0" W.G.)',
      'Flammability': 'UL Classified',
      'Max Humidity': '100% RH'
    },
    technicalTable: {
      headers: ['Model / Series', 'Frame Material', 'Max Temp (°C)', 'Sealant', 'Gasket', 'Max Humidity'],
      rows: [
        ['HT-250 Series', 'Galvanized / Aluminized / SS', '250°C', 'HT Silicon', 'HT Foam / Rope', '100% RH'],
        ['HT-350 Series', 'Stainless Steel (SUS)', '350°C (Peak 400°C)', 'Ceramic / Glass Fiber', 'PTFE (White)', '100% RH'],
      ]
    }
  },
  {
    slug: 'v-type-hepa-filter',
    name: 'V-Type HEPA Filter',
    category: 'Air Filters',
    subcategory: 'V-Bank Filters',
    subcategorySlug: '/filters/v-bank',
    description: 'The V-Type HEPA Filter features a double-layer filter material structure for layered filtration. Built with high-strength galvanized steel frame, it offers high airflow capacity, low pressure drop, high dust-holding capacity, and high moisture & chemical resistance up to 300°C operating environments.',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/201909101442246985.jpg',
    features: [
      'Uniform texture with double-layer filter media structure for layered filtration',
      'Steel rigid frame construction for high structural stiffness',
      'Filter Efficiency Options: E11, H13 (99.99%), and H14 (99.995%)',
      'High specific surface area with large dust-holding capacity and minimal resistance',
      'High hydrophobicity providing exceptional moisture and corrosion resistance',
      'High temperature resistance up to 300°C operating environments',
      'Ideal for cleanrooms, pharmaceutical HVAC systems, and AHU air intake units'
    ],
    specs: {
      'Efficiency Ratings': 'E11, H13 (99.99%), H14 (99.995%)',
      'Media Type': 'Double-Layer Micro Glass Fiber',
      'Frame Material': 'Galvanized Steel / Stainless Steel',
      'Design': 'V-Bank / V-Type Box Module',
      'Max Operating Temp': '300°C',
      'Corrosion Resistance': 'High Chemical & Moisture Resistance',
      'Resistance Range': '230 Pa - 250 Pa @ Nominal Airflow'
    },
    technicalTable: {
      headers: ['Actual Size (HxWxD mm)', 'Filter Efficiency', 'Air Flow / Pressure Drop (m³/h / Pa)', 'Media Area (m²)'],
      rows: [
        ['610*610*292', 'E11', '4000 / 250', '20.8'],
        ['305*610*292', 'E11', '2000 / 250', '10.4'],
        ['610*610*292', 'H13', '3400 / 230', '20.8'],
        ['305*610*292', 'H13', '1700 / 230', '10.4'],
        ['610*610*292', 'H14', '3400 / 250', '20.8'],
        ['305*610*292', 'H14', '1700 / 250', '10.4'],
      ]
    }
  },
  {
    slug: 'pleated-air-filter',
    name: 'Pleated Air Filter',
    category: 'Air Filters',
    subcategory: 'Activated Carbon Filters',
    subcategorySlug: '/filters/carbon',
    description: 'The Pleated Air Filter is designed for high-efficiency gas-phase filtration and deodorization. Featuring a rich pore structure with a large specific surface area, it provides exceptional adsorption capacity for harmful gases (such as formaldehyde, toluene, and VOCs) with low airflow resistance and low service cost.',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/201909060948298944.jpg',
    features: [
      'Rich pore structure with large specific surface area for maximum gas adsorption',
      'Strong adsorption capacity for harmful gases including formaldehyde, toluene, and VOCs',
      'Excellent deodorizing result for pharmaceutical, lab, and commercial ventilation',
      'High chemical stability combined with superior mechanical strength',
      'Available in 2" and 4" standard depth models',
      'Fits all standard front-access frames and side-access housings',
      'Disposable design producing little to no dust with low service cost'
    ],
    specs: {
      'Target Contaminants': 'Formaldehyde, Toluene, VOCs, Odors & Chemical Vapors',
      'Filter Media': 'Synthetic Fiber Impregnated with Activated Carbon',
      'Frame Options': 'Cardboard / Beverage Board / Aluminum / GI Frame',
      'Thickness / Depth': '2" (50mm) and 4" (100mm) models',
      'Housings Fit': 'Standard Front & Side Access Housings',
      'Dust Generation': 'Little to No Dusting',
      'Airflow Resistance': 'Low Pressure Drop'
    },
    technicalTable: {
      headers: ['Depth Model', 'Target Gas Adsorption', 'Dust Generation', 'Housing Compatibility', 'Service Type'],
      rows: [
        ['2" Model (50mm)', 'Formaldehyde, Toluene, VOCs, Odors', 'Little to No Dust', 'Front & Side Access Frames', 'Disposable / Low Cost'],
        ['4" Model (100mm)', 'Formaldehyde, Toluene, VOCs, Odors', 'Little to No Dust', 'Front & Side Access Frames', 'Disposable / Low Cost'],
      ]
    }
  },
  {
    slug: 'hv-combined-bag-filter',
    name: 'HV Combined Bag Filter',
    category: 'Air Filters',
    subcategory: 'Bag Filters',
    subcategorySlug: '/filters/bag',
    description: 'The HV Combined Bag Filter (V Bank HVAC Filter) is engineered with a double-layer filtration material structure for high-efficiency layered purification. Featuring a galvanized steel casing and V-bank design, it provides exceptional airflow capacity, low pressure drop, high dust-holding power, and moisture resistance up to 300°C.',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/1-2-f5-f9-medium-replacement-air-filter_01m.jpg',
    features: [
      'Uniform texture with double-layer filtration material structure for layered purification',
      'Heavy-duty metal frame housing with high expansion strength and filter stiffness',
      'Filter Efficiency Ratings: E11, H13 (99.99%), and H14 (99.995%)',
      'Large specific surface area with high dust power and reduced airflow resistance',
      'High hydrophobicity offering excellent water, moisture, and corrosion opposition',
      'High heat range resistance up to 300°C operating environments',
      'Suitable for HVAC air handling units, cleanroom pre-filtration, and industrial exhaust'
    ],
    specs: {
      'Efficiency Ratings': 'E11, H13 (99.99%), H14 (99.995%)',
      'Media Type': 'Double-Layer Micro Glass Fiber',
      'Frame Material': 'Galvanized Steel / Stainless Steel',
      'Module Design': 'HV Combined V-Bank Casing',
      'Max Operating Temp': '300°C',
      'Corrosion Resistance': 'Robust Chemical & Moisture Resistance',
      'Pressure Drop': '230 Pa - 250 Pa @ Nominal Airflow'
    },
    technicalTable: {
      headers: ['Actual Size (HxWxD mm)', 'Filter Efficiency', 'Air Flow / Pressure Drop (m³/h / Pa)', 'Area (m²)'],
      rows: [
        ['610*610*292', 'E11', '4000 / 250', '20.8'],
        ['305*610*292', 'E11', '2000 / 250', '10.4'],
        ['610*610*292', 'H13', '3400 / 230', '20.8'],
        ['305*610*292', 'H13', '1700 / 230', '10.4'],
        ['610*610*292', 'H14', '3400 / 250', '20.8'],
        ['305*610*292', 'H14', '1700 / 250', '10.4'],
      ]
    }
  },
  {
    slug: 'panel-pre-filter',
    name: 'Panel Pre Filter',
    category: 'Air Filters',
    subcategory: 'Pre Filters',
    subcategorySlug: '/filters/pre',
    description: 'The Panel Pre Filter is engineered as a primary filter for HVAC systems operating under high airflow capacity requirements. Constructed with flat synthetic media and two-side coated wire mesh support, it captures coarse dust particles above 2 microns. It features a washable, reusable media design for low maintenance and extended operational lifespan.',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/201909060954520552.jpg',
    features: [
      'Flat synthetic filter media with two-side coated wire mesh for rigid structural support',
      'Primary HVAC system filtration capturing airborne dust particles above 2 microns',
      'Washable and replaceable media design for eco-friendly, reusable service',
      'High air volume capacity with minimal initial pressure drop',
      'Exceptional mechanical strength preventing sagging under high air velocity',
      'High dust-holding capacity extending the lifespan of secondary HEPA filters',
      'Easy installation with individually tested quality compliance label on each unit'
    ],
    specs: {
      'Particle Capture Size': 'Above 2 microns (G1 - G4 Efficiency)',
      'Media Type': 'Flat Synthetic Fiber',
      'Media Support': 'Double-sided Coated Wire Mesh',
      'Frame Options': 'Aluminum Alloy / Galvanized Iron (GI)',
      'Airflow Capacity': 'High Air Volume Rating',
      'Reusability': 'Washable & Media Replaceable',
      'Pressure Drop': 'Low Initial Air Resistance'
    },
    technicalTable: {
      headers: ['Frame Material', 'Media Support', 'Particle Capture', 'Reusability', 'Installation Type'],
      rows: [
        ['Aluminum Alloy / GI Frame', 'Double-sided Coated Wire Mesh', '> 2.0 Micron Dust', 'Washable & Reusable Media', 'Standard HVAC Front / Side Grid'],
      ]
    }
  },
  {
    slug: 'washed-pre-filter',
    name: 'Washed Pre Filter',
    category: 'Air Filters',
    subcategory: 'Washable / Reusable Filters',
    subcategorySlug: '/filters/washable',
    description: 'The Washed Pre Filter (Extended Surface Washable Pre Filter) is a high-performance washable and reusable pre-filter engineered for air conditioning, industrial workshops, and large-scale air compressor intake systems. Designed to protect secondary HEPA filters from heavy dust accumulation, its durable metal frame allows media replacement while the media itself can be washed 1-2 times.',
    image: '/images/washed-pre-filter.jpg',
    features: [
      'Extended surface area design maximizing air volume and dust-holding capacity',
      'Washable & reusable filter media (can be washed 1-2 times per lifecycle)',
      'Durable rigid metal frame retaining structure while media can be replaced independently',
      'Efficiency ratings available in MERV 6, MERV 7, MERV 8, and MERV 9',
      'Extends operational lifespan of downstream secondary and final HEPA filters',
      'Ideal for industrial workshops, HVAC air intake, and large-scale air compressors',
      'Simple installation with lightweight, rigid construction'
    ],
    specs: {
      'Efficiency Ratings': 'MERV 6, MERV 7, MERV 8, MERV 9',
      'Media Type': 'Extended Surface Synthetic Washable Media',
      'Frame Material': 'Extruded Aluminum / Galvanized Steel',
      'Reusability': 'Media Washable 1-2 Times / Replaceable Media Pack',
      'Airflow Resistance': 'Low Pressure Drop',
      'Applications': 'HVAC Return Air, Industrial Workshops, Air Compressors'
    },
    technicalTable: {
      headers: ['Efficiency Rating', 'Media Type', 'Frame Type', 'Washability', 'Application'],
      rows: [
        ['MERV 6 - MERV 9', 'Extended Surface Synthetic', 'Aluminum / GI Frame', 'Washable (1-2x) & Replaceable', 'HVAC Intake / Industrial Workshops'],
      ]
    }
  },
  // {
  //   slug: 'v-bank-compact-filter',
  //   name: 'V-Bank Compact Filter',
  //   category: 'Air Filters',
  //   subcategory: 'V-Bank Filters',
  //   subcategorySlug: '/filters/v-bank',
  //   description: 'The V-Bank Compact Filter in an all-plastic frame features wet-laid micro fine fiber media in a unique pleat-in-pleat V-bank configuration with up to 200 sq. ft. of media area. Delivering large volume airflow, high dust-holding capacity, and water resistance, it offers significant energy savings with a low average pressure drop.',
  //   image: 'https://toptec.pk/wp-content/uploads/2024/07/201909101442246985.jpg',
  //   features: [
  //     'Wet-laid micro fine fiber media in unique pleat-in-pleat V-bank design (up to 200 sq ft media area)',
  //     '100% all-plastic frame construction, completely incinerable and environmentally friendly',
  //     'Filter Classes: M6, F7, F8, F9, H10, H11, H13, and H14',
  //     'Compact construction engineered for large volume airflow rates',
  //     'Self-supporting, rigid structure allowing multi-directional airflow & flexible installation',
  //     'Water-resistant media with 100% relative humidity tolerance',
  //     'Individually factory-tested with compliance label indicating airflow, pressure drop, and efficiency'
  //   ],
  //   specs: {
  //     'Filter Classes': 'M6, F7, F8, F9, H10, H11, H13, H14',
  //     'Frame Material': '100% Rigid Plastic (Incinerable)',
  //     'Frame Types': 'Single Flange / Box Type',
  //     'Filter Media': 'Fine Fiberglass Paper / Polypropylene Fiber',
  //     'Separator': 'Hot Melt Bead',
  //     'Sealant': 'Polyurethane',
  //     'Max Operating Temp': '80°C (170°F)',
  //     'Final Resistance': '500 Pa (2.0" W.G.)',
  //     'Flammability': 'UL Classified',
  //     'Max Humidity': '100% RH'
  //   },
  //   technicalTable: {
  //     headers: ['Filter Class', 'Frame Material', 'Frame Type', 'Max Temp', 'Incinerability', 'Max Humidity'],
  //     rows: [
  //       ['M6 - F9 (Medium)', '100% Rigid Plastic', 'Single Flange / Box Type', '80°C', 'Fully Incinerable', '100% RH'],
  //       ['H10 - H14 (HEPA)', '100% Rigid Plastic', 'Single Flange / Box Type', '80°C', 'Fully Incinerable', '100% RH'],
  //     ]
  //   }
  // },
  {
    slug: 'h13-h14-mini-pleat-hepa-filter-pharmaceutical',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/1-3-1-hepa-purifier-replacement-air-filter_01m.jpg',
    name: 'H13 H14 Mini Pleat HEPA Filter for Pharmaceutical Industry',
    category: 'Air Filters',
    subcategory: 'HEPA Filters',
    subcategorySlug: '/filters/hepa',
    description: 'The H13 H14 Mini Pleat HEPA Filter is specifically designed for terminal filtration in pharmaceutical, hospital, electronic, and cleanroom air conditioning systems. Constructed with wet-laid microfine glass paper and hot-melt bead separators, each filter is scan-tested according to EN 1822 standards for 99.99% to 99.995% efficiency.',
    features: [
      'Individually scan-tested as per EN 1822-1, 4 & 5 standards for HEPA/ULPA efficiency',
      'Filter Efficiency: H13 (99.99%) & H14 (99.995%) at 0.3 micron particle sizes',
      'Media: Wet-laid microfine fiberglass paper with hot-melt bead separators',
      'Frame Options: Extruded Aluminum, Galvanized Steel, or MDF',
      'Seal Options: Box Type, Gel Seal, Reverse Gel Seal, or Knife Edge design',
      'Continuous foamed polyurethane or neoprene gasket for leak-free sealing',
      'Applied in pharmaceutical cleanrooms, hospital operating suites, and semiconductor fabs'
    ],
    specs: {
      'Efficiency Grade': 'H13 (99.99%) / H14 (99.995%) @ 0.3 µm',
      'Testing Standard': 'EN 1822-1, 4 & 5 Scan Tested',
      'Media Type': 'Wet-Laid Microfine Fiberglass',
      'Separator': 'Hot-Melt Bead',
      'Frame Material': 'Extruded Aluminum / GI / MDF',
      'Frame Sealing Types': 'Box, Gel Seal, Reverse Gel Seal, Knife Edge',
      'Max Operating Temp': '80°C (170°F)',
      'Initial Resistance': '≤ 160 Pa @ Nominal Airflow',
      'Final Resistance': '600 Pa (2.4" W.G.)',
      'Flammability': 'UL Classified',
      'Max Humidity': '100% RH'
    },
    technicalTable: {
      headers: ['Dimensions (WxHxD mm)', 'Rated Airflow (m³/h)', 'Initial Resistance (Pa)', 'Efficiency (%)'],
      rows: [
        ['305 × 305 × 35', '110', '≤ 160', '99.99%'],
        ['610 × 610 × 35', '450', '≤ 160', '99.99%'],
        ['915 × 610 × 35', '680', '≤ 160', '99.99%'],
        ['305 × 305 × 50', '180', '≤ 160', '99.99%'],
        ['610 × 610 × 50', '700', '≤ 160', '99.99%'],
        ['915 × 610 × 50', '1100', '≤ 160', '99.99%'],
        ['305 × 305 × 69', '250', '≤ 160', '99.99%'],
        ['610 × 610 × 69', '1000', '≤ 160', '99.99%'],
        ['915 × 610 × 69', '1500', '≤ 160', '99.99%'],
        ['305 × 305 × 80', '300', '≤ 160', '99.99%'],
        ['610 × 610 × 80', '1300', '≤ 160', '99.99%'],
      ]
    }
  },
  // {
  //   slug: 'gel-seal-hepa-filter-polyurethane-cleanroom',
  //   name: 'Gel Seal HEPA Filter Polyurethane Gel Sealed High Efficiency Air Filter For Cleanroom',
  //   category: 'Air Filters',
  //   subcategory: 'HEPA Filters',
  //   subcategorySlug: '/filters/hepa',
  //   description: 'The Gel Seal HEPA Filter is a zero-leakage high-efficiency particulate air filter engineered for cleanroom ceiling ducted modules and knife-edge housings. Featuring built-in frame gel grooves filled with non-flowing, non-hardening polyurethane gel sealant (available in Standard Gel 80mm and Reverse Gel 75mm/93mm depths), it provides thorough air bypass elimination with efficiencies up to 99.9995%.',
  //   image: '/images/gel-seal-hepa-filter-polyurethane-cleanroom.png',
  //   features: [
  //     'Built-in frame gel groove with non-flowing, non-hardening polyurethane gel for zero-leakage sealing',
  //     'Dual structural types: Standard Gel Seal (80mm frame depth) and Reverse Gel Seal (75mm/93mm frame depth)',
  //     'Reverse Gel design supports indoor-side disassembly & maintenance without pipeline dismantling',
  //     'High filtration efficiencies: 99.99%, 99.995%, and 99.9995% (H13, H14, U15 grades)',
  //     'Extruded anodized aluminum rigid frame with hot-melt glue spacing (no metal corrosion risk)',
  //     'UL Classified fire safety certification with 100% relative humidity resistance at 80°C constant temp',
  //     'Perfect replacement for permanent ceiling ducted air filtration modules and knife-edge housings'
  //   ],
  //   specs: {
  //     'Efficiency Grades': '99.99%, 99.995%, 99.9995% (H13 / H14 / U15)',
  //     'Sealing Mechanism': 'Polyurethane Gel (Non-flowing / Non-hardening)',
  //     'Frame Material': 'Extruded Anodized Aluminum',
  //     'Frame Types': 'Standard Gel Seal & Reverse Gel Seal',
  //     'Frame Depths': 'Standard: 80mm (3-1/8"); Reverse Gel: 75mm (3"), 93mm (3-7/8")',
  //     'Media Type': 'Wet-Laid Microfine Glass Paper',
  //     'Separator': 'Hot-Melt Glue Spacing',
  //     'Max Operating Temp': '80°C (170°F)',
  //     'Final Resistance': '600 Pa (2.4" W.G.)',
  //     'Flame Rating': 'UL Classified Fire Safety',
  //     'Max Humidity': '100% RH'
  //   },
  //   technicalTable: {
  //     headers: ['Frame Classification', 'Frame Depth (mm)', 'Sealing Method', 'Efficiency Options', 'Max Temp & Humidity'],
  //     rows: [
  //       ['Standard Gel Seal', '80 mm (3-1/8")', 'Polyurethane Gel Groove', '99.99% / 99.995% / 99.9995%', '80°C / 100% RH'],
  //       ['Reverse Gel Seal', '75 mm / 93 mm', 'Rear Gel Groove (Indoor Maint.)', '99.99% / 99.995% / 99.9995%', '80°C / 100% RH'],
  //     ]
  //   }
  // },
  {
    slug: 'box-type-hepa-separator-filter',
    name: 'Box Type HEPA Separator Filter',
    category: 'Air Filters',
    subcategory: 'Box & Panel Filters',
    subcategorySlug: '/filters/box-panel',
    description: 'The Box Type HEPA Separator Filter features corrugated aluminum separators and a rigid galvanized steel box frame to provide uniform face velocity and high dust-holding capacity. Available in F6, F7, and F8 efficiency classes, it is engineered for HVAC air conditioning systems and preparatory filtration in cleanrooms.',
    image: '/images/box-type-hepa-separator-filter.png',
    features: [
      'Corrugated aluminum foil separators ensuring uniform air distribution across filter face',
      'High versatility with large filtration surface area, big airflow capacity, and high efficiency',
      'Galvanized steel rigid box frame with 100% factory inspection testing',
      'Available in F6, F7, and F8 filter efficiency ratings',
      'Extremely high dust-holding capacity with low pressure drop (75 Pa - 135 Pa at nominal airflow)',
      'Ideal for preparatory filtration in cleanrooms and commercial HVAC air conditioning systems'
    ],
    specs: {
      'Efficiency Ratings': 'F6, F7, F8',
      'Frame Construction': 'Galvanized Steel Rigid Box Frame',
      'Separator Material': 'Corrugated Aluminum Foil',
      'Filter Media': 'Deep Pleated Glass Fiber',
      'Airflow Resistance': '75 Pa (F6), 110 Pa (F7), 135 Pa (F8)',
      'Quality Control': '100% Factory Inspection Scan Tested',
      'Primary Applications': 'Preparatory Cleanroom Filtration, HVAC Systems'
    },
    technicalTable: {
      headers: ['Actual Size HxWxD (mm)', 'Filter Efficiency', 'Air Flow / Pressure Drop (m³/h / Pa)', 'Unit Volume (m³)'],
      rows: [
        ['610*610*292', 'F6', '3400 / 75', '0.11'],
        ['305*610*292', 'F6', '1700 / 75', '0.05'],
        ['610*610*292', 'F7', '3400 / 110', '0.11'],
        ['305*610*292', 'F7', '1700 / 110', '0.05'],
        ['610*610*292', 'F8', '3400 / 135', '0.11'],
        ['305*610*292', 'F8', '1700 / 135', '0.05'],
      ]
    }
  },
  {
    slug: 'f5-f9-synthetic-multi-pocket-filter',
    name: 'F5-F9 Synthetic Multi Pocket Filter',
    category: 'Air Filters',
    subcategory: 'Bag Filters',
    subcategorySlug: '/filters/bag',
    description: 'The F5-F9 Synthetic Multi Pocket Filter (Bag Filter) is constructed with Meltblown PP synthetic media and extruded aluminum or galvanized steel headers. Offering a large filtration surface area with low airflow resistance, high dust holding capacity, and low energy consumption, it is widely applied in commercial HVAC systems, cleanroom air supply, automotive plants, and public buildings.',
    image: '/images/f5-f9-synthetic-multi-pocket-filter.png',
    features: [
      'Multi-pocket design maximizing effective filtration surface area and dust-holding capacity',
      'High-grade Meltblown PP synthetic filter media ensuring long operational lifespan',
      'Frame Options: Heavy-duty Extruded Aluminum or Galvanized Steel header casing',
      'Filter Grades EN779: F5 (45%), F6 (65%), F7 (85%), and F8 (90%)',
      'Color-coded media options for easy grade identification (F5 White, F6 Green, F7 Light Pink, F8 Yellow)',
      'Low initial airflow resistance with recommended final pressure drop of 450 Pa',
      'Operating temperature tolerance up to ≤ 70°C and humidity up to ≤ 90% RH'
    ],
    specs: {
      'Filter Grades': 'F5, F6, F7, F8, F9 (EN779 Standard)',
      'Media Material': 'Meltblown Polypropylene (PP)',
      'Frame Material': 'Extruded Aluminum / Galvanized Steel Header',
      'Pocket Configurations': '4, 5, 6, 8 Pockets',
      'Operating Temp': '≤ 70°C',
      'Operating Humidity': '≤ 90% RH',
      'Recommended Final Resistance': '450 Pa',
      'Applications': 'HVAC Master Filter, Cleanroom Supply, Automotive, Hotels & Offices'
    },
    technicalTable: {
      headers: ['Size W*H*D (mm)', 'Pocket Qty', 'Airflow (m³/h)', 'Initial / Final Resistance (Pa)', 'Efficiency (EN779)', 'Color'],
      rows: [
        ['592*592*600', '8 Pockets', '3400', '< 45 Pa / < 400 Pa', 'F5 (45%)', 'White'],
        ['592*592*600', '6 Pockets', '3400', '< 50 Pa / < 400 Pa', 'F5 (45%)', 'White'],
        ['592*592*600', '8 Pockets', '3400', '< 65 Pa / < 400 Pa', 'F6 (65%)', 'Green'],
        ['592*592*600', '6 Pockets', '3400', '< 75 Pa / < 400 Pa', 'F6 (65%)', 'Green'],
        ['592*592*600', '8 Pockets', '3400', '< 80 Pa / < 400 Pa', 'F7 (85%)', 'Light Pink'],
        ['592*592*600', '6 Pockets', '3400', '< 85 Pa / < 400 Pa', 'F7 (85%)', 'Light Pink'],
        ['592*592*600', '8 Pockets', '3400', '< 100 Pa / < 400 Pa', 'F8 (90%)', 'Yellow'],
      ]
    }
  },
  {
    slug: 'glass-fiber-compact-multi-pocket-bag-filter',
    name: 'Glass Fiber Compact Multi-pocket Bag Filter',
    category: 'Air Filters',
    subcategory: 'Bag Filters',
    subcategorySlug: '/filters/bag',
    description: 'The Glass Fiber Compact Multi-pocket Bag Filter is built with high-porosity glass fiber media and robust header frames, providing high temperature resistance up to 150°C. Engineered without formaldehyde additions for eco-friendly operation, it offers stable filtration efficiency, low clogging rates, and full compliance with EN779:2012 and ISO 16890:2016 standards.',
    image: '/images/glass-fiber-compact-multi-pocket-bag-filter.png',
    features: [
      'High porosity glass fiber media with high dust holding capacity and low airflow resistance',
      'High temperature resistance up to 150°C for demanding ventilation environments',
      'Zero formaldehyde additions — environmentally safe and non-toxic construction',
      'Compliant with EN779-2012 and ISO 16890-2016 international testing standards',
      'Low clogging rate and high efficiency stability over prolonged service life',
      'Color-coded filter media for grade identification (F5 Orange, F6 Green, F7 Pink, F8 Yellow)',
      'Ideal for secondary or back-end filtration in air conditioning and dust removal systems'
    ],
    specs: {
      'Standards Compliance': 'EN779:2012 & ISO 16890:2016',
      'Media Material': 'High Porosity Micro Glass Fiber',
      'Max Temperature': '150°C',
      'Formaldehyde Content': '0% (Formaldehyde Free)',
      'Filter Grades': 'F5, F6, F7, F8',
      'Pocket Options': '3, 5, 6 Pockets',
      'Recommended Final Resistance': '400 Pa',
      'Applications': 'Secondary Ventilation, HVAC Back-End, Dust Removal Systems'
    },
    technicalTable: {
      headers: ['Size W*H*D (mm)', 'Pocket Qty', 'Airflow (m³/h)', 'Initial / Final Pressure (Pa)', 'Efficiency (EN779)', 'Color'],
      rows: [
        ['592*592*600', '6 Pockets', '3400', '< 55 Pa / < 400 Pa', 'F5 (45%)', 'Orange'],
        ['492*592*600', '5 Pockets', '2800', '< 55 Pa / < 400 Pa', 'F5 (45%)', 'Orange'],
        ['592*592*600', '6 Pockets', '3400', '< 85 Pa / < 400 Pa', 'F6 (65%)', 'Green'],
        ['492*592*600', '5 Pockets', '2800', '< 85 Pa / < 400 Pa', 'F6 (65%)', 'Green'],
        ['592*592*600', '6 Pockets', '3400', '< 150 Pa / < 400 Pa', 'F7 (85%)', 'Pink'],
        ['492*592*600', '5 Pockets', '2800', '< 150 Pa / < 400 Pa', 'F7 (85%)', 'Pink'],
        ['592*592*600', '6 Pockets', '2700', '< 175 Pa / < 400 Pa', 'F8 (90%)', 'Yellow'],
        ['492*592*600', '5 Pockets', '2250', '< 180 Pa / < 400 Pa', 'F8 (90%)', 'Yellow'],
      ]
    }
  },
  {
    slug: 'fiberglass-panel-pre-filter-paint-booth',
    name: 'Fiberglass Panel Pre Filter for Paint Booth',
    category: 'Air Filters',
    subcategory: 'Pre Filters',
    subcategorySlug: '/filters/pre',
    description: 'The Fiberglass Panel Pre Filter for Paint Booth features graduated density continuous filament glass fiber media with cross wire reinforcement. Engineered for overspray collection and coarse particle capture above 5 microns, it withstands temperatures up to 150°F (65°C) and provides high dust-holding capacity in spray booths, commercial HVAC, and industrial facilities.',
    image: '/images/fiberglass-panel-pre-filter-paint-booth.png',
    features: [
      'Graduated density glass fiber media structure for progressive depth loading & maximum dust holding',
      'Engineered for paint booths, spray booths, auto body shops, and industrial ventilation',
      'Captures coarse airborne particles ≥ 5 µm with 85% filtration efficiency (G3 Filter Class)',
      'Cross wire metal grid support ensuring rigid structural integrity without media compression',
      'Heat resistance withstands continuous operating temperatures up to 150°F (65°C)',
      'Available in pre-cut pads, full rolls, and rigid panel pre-filter configurations',
      'Versatile application across hospitals, airports, hotels, offices, and manufacturing plants'
    ],
    specs: {
      'Filter Class': 'G3 (EN779 Standard)',
      'Particle Capture': '≥ 5.0 Micron Particles',
      'Filtration Efficiency': '85%',
      'Media Structure': 'Graduated Density Fiberglass',
      'Media Format': 'Pre-cut Pads, Rolls, Rigid Panel',
      'Max Operating Temp': '150°F (65°C)',
      'Initial Pressure Drop': '< 63 Pa',
      'Final Pressure Drop': '< 150 Pa',
      'Applications': 'Paint Booths, Auto Body, Commercial & Industrial HVAC'
    },
    technicalTable: {
      headers: ['Dimension (mm)', 'Rated Airflow (m³/h)', 'Initial Pressure (Pa)', 'Final Pressure (Pa)', 'Target Particle (µm)', 'Efficiency', 'Filter Class'],
      rows: [
        ['595 * 595 * 46', '2000', '< 63 Pa', '< 150 Pa', '≥ 5 µm', '85%', 'G3'],
        ['495 * 495 * 46', '1700', '< 63 Pa', '< 150 Pa', '≥ 5 µm', '85%', 'G3'],
        ['295 * 595 * 46', '1000', '< 63 Pa', '< 150 Pa', '≥ 5 µm', '85%', 'G3'],
      ]
    }
  },
  {
    slug: 'high-temperature-coarse-air-filter-baked-oven',
    name: 'High Temperature Resistant Coarse Air Filter for Baked Oven',
    category: 'Air Filters',
    subcategory: 'Pre Filters',
    subcategorySlug: '/filters/pre',
    description: 'The High Temperature Resistant Coarse Air Filter is engineered for long-term continuous operation up to 400°C in heat ovens, baked ovens, and painting hot stoves across the pharmaceutical and automotive industries. Built with incombustible, chemical-resistant glass fiber media and aluminum frame casing, it delivers large airflow capacity with exceptionally low initial pressure drop.',
    image: '/images/high-temperature-coarse-air-filter-baked-oven.png',
    features: [
      'Engineered for long-term operation under extreme temperatures up to 400°C',
      'Incombustible glass fiber filter media with excellent chemical & corrosion resistance',
      'Low moisture absorption ensuring stable structural performance in thermal environments',
      'Large airflow volume rating (up to 3400 m³/h) with minimal initial resistance (< 35 Pa)',
      'G4 Filter Class rating with 85% - 90% filtration efficiency for particles ≥ 5 µm',
      'Applied in pharmaceutical heat ovens, automotive baked paint ovens, and hot stoves'
    ],
    specs: {
      'Filter Class': 'G4 (EN779 Standard)',
      'Max Operating Temp': '400°C (Continuous Long Period)',
      'Combustibility': 'Incombustible',
      'Particle Capture': '≥ 5.0 Micron Particles',
      'Filtration Efficiency': '85% - 90%',
      'Chemical & Moisture Resistance': 'Excellent / Low Moisture Absorbing',
      'Initial Pressure Drop': '< 35 Pa - < 55 Pa',
      'Final Pressure Drop': '< 250 Pa',
      'Primary Applications': 'Pharmaceutical Ovens, Automotive Bake Ovens, Painting Hot Stoves'
    },
    technicalTable: {
      headers: ['Dimension (mm)', 'Rated Airflow (m³/h)', 'Initial Pressure (Pa)', 'Final Pressure (Pa)', 'Target Particle (µm)', 'Efficiency', 'Filter Class'],
      rows: [
        ['595 * 595 * 46', '3400', '< 35 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['295 * 595 * 46', '1700', '< 35 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['295 * 595 * 25', '1700', '< 55 Pa', '< 250 Pa', '≥ 5 µm', '85%', 'G4'],
        ['595 * 595 * 25', '3400', '< 55 Pa', '< 250 Pa', '≥ 5 µm', '85%', 'G4'],
      ]
    }
  },
  {
    slug: 'g4-merv8-galvanized-frame-pleated-pre-filter',
    name: 'G4/MERV8 Galvanized Frame Pleated Pre Filter',
    category: 'Air Filters',
    subcategory: 'Pre Filters',
    subcategorySlug: '/filters/pre',
    description: 'The G4/MERV8 Galvanized Frame Pleated Pre Filter features high dust-holding capacity washable synthetic pleated media housed in a heavy-duty galvanized steel rigid frame. Engineered for high airflow and minimal pressure drop, it provides 90% filtration efficiency for particles ≥ 5 microns in commercial HVAC and dust removal systems.',
    image: '/images/g4-merv8-galvanized-frame-pleated-pre-filter.png',
    features: [
      'Heavy-duty rigid galvanized steel frame providing maximum structural stiffness and neat appearance',
      'Washable & reusable synthetic pleated media design for extended service lifespan and lower operational cost',
      'High dust holding capacity with large effective filtration surface area',
      'G4 / MERV 8 rating delivering 90% filtration efficiency for coarse dust particles ≥ 5 µm',
      'Large airflow capacity (up to 3400 m³/h) with low initial pressure drop (55 Pa - 85 Pa)',
      'Available in 25mm, 46mm, and 96mm standard depth configurations',
      'Ideal for pre-filtration in commercial air conditioning, AHU units, and industrial dust collection'
    ],
    specs: {
      'Filter Efficiency Grade': 'G4 / MERV 8 (EN779 Standard)',
      'Filtration Efficiency': '90% @ ≥ 5.0 µm',
      'Reusability': 'Washable & Reusable Media',
      'Frame Construction': 'Galvanized Steel Rigid Frame',
      'Available Depths': '25mm (1"), 46mm (2"), 96mm (4")',
      'Initial Pressure Drop': '< 55 Pa (25mm), < 75 Pa (46mm), < 85 Pa (96mm)',
      'Final Pressure Drop': '< 250 Pa',
      'Applications': 'HVAC AHU Pre-Filtration, Ventilation, Industrial Dust Removal'
    },
    technicalTable: {
      headers: ['Dimension (mm)', 'Rated Airflow (m³/h)', 'Initial Pressure (Pa)', 'Final Pressure (Pa)', 'Target Particle (µm)', 'Efficiency', 'Filter Class'],
      rows: [
        ['595 * 595 * 25', '2400', '< 55 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['495 * 495 * 25', '1650', '< 55 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['295 * 595 * 25', '1200', '< 55 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['595 * 595 * 46', '3400', '< 75 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['495 * 495 * 46', '2400', '< 75 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['295 * 595 * 46', '1700', '< 75 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['595 * 595 * 96', '3400', '< 85 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['495 * 495 * 96', '2400', '< 85 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['295 * 595 * 96', '1700', '< 85 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
      ]
    }
  },
  {
    slug: 'disposable-pleated-pre-filter',
    name: 'Disposable Pleated Pre Filter',
    category: 'Air Filters',
    subcategory: 'Pre Filters',
    subcategorySlug: '/filters/pre',
    description: 'The Disposable Pleated Pre Filter (Disposable Pleated Panel Filter) is designed for straightforward assembly with low resistance and high dust-holding capacity. Featuring a sturdy double-wall frame constructed from moisture-resistant beverage board, galvanized steel, or aluminum, it provides G2/G4 grade filtration across residential, commercial, and industrial HVAC systems.',
    image: '/images/disposable-pleated-pre-filter.png',
    features: [
      'Sturdy double-wall frame design constructed from moisture-resistant beverage board, GI steel, or aluminum',
      'Low initial resistance with high airflow capacity and low energy consumption',
      'Straightforward assembly for quick, hassle-free installation in standard filter holding frames',
      'Filter Efficiency Grades: G2 / G4 delivering 90% filtration efficiency for particles ≥ 5 µm',
      'Moisture-resistant construction preventing frame warping in high humidity environments',
      'Available in 25mm (1"), 46mm (2"), and 96mm (4") depth configurations',
      'Versatile pre-filter application for HVAC systems, spray booths, and industrial air handlers'
    ],
    specs: {
      'Filter Grades': 'G2 / G4 (EN779 Standard)',
      'Filtration Efficiency': '90% @ ≥ 5.0 µm',
      'Frame Options': 'Moisture-resistant Beverage Board Cardboard / GI / Aluminum',
      'Structure': 'Sturdy Double-wall Frame Design',
      'Available Depths': '25mm (1"), 46mm (2"), 96mm (4")',
      'Initial Pressure Drop': '< 55 Pa (25mm), < 75 Pa (46mm), < 85 Pa (96mm)',
      'Final Pressure Drop': '< 250 Pa',
      'Applications': 'HVAC Pre-Filtration, Spray Booths, Residential, Commercial & Industrial Air Systems'
    },
    technicalTable: {
      headers: ['Dimension (mm)', 'Rated Airflow (m³/h)', 'Initial Pressure (Pa)', 'Final Pressure (Pa)', 'Target Particle (µm)', 'Efficiency', 'Filter Class'],
      rows: [
        ['595 * 595 * 25', '2400', '< 55 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['495 * 495 * 25', '1650', '< 55 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['295 * 595 * 25', '1200', '< 55 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['595 * 595 * 46', '3400', '< 75 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['495 * 495 * 46', '2400', '< 75 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['295 * 595 * 46', '1700', '< 75 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['595 * 595 * 96', '3400', '< 85 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['495 * 495 * 96', '2400', '< 85 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
        ['295 * 595 * 96', '1700', '< 85 Pa', '< 250 Pa', '≥ 5 µm', '90%', 'G4'],
      ]
    }
  },
  {
    slug: 'permanent-and-washable-aluminum-pre-filter',
    name: 'Permanent And Washable Aluminum Pre Filter',
    category: 'Air Filters',
    subcategory: 'Washable / Reusable Filters',
    subcategorySlug: '/filters/washable',
    description: 'The Permanent And Washable Aluminum Pre Filter is built from premium expanded and bonded aluminum media with a rear layer of corrugated aluminum for high airflow support. Rustproof, repeatedly washable, and resistant to acid, alkali, and high temperatures up to 300°C, it captures large dust, oil, and moisture upstream to protect downstream HEPA and pleated filters.',
    image: '/images/permanent-and-washable-aluminum-pre-filter.png',
    features: [
      'Heavy-duty 100% all-aluminum construction — permanent, rustproof, and repeatedly washable',
      'Multi-layer expanded & bonded aluminum media (3-layer 21mm and 7-layer 46mm configurations)',
      'Rear layer of expanded & corrugated aluminum supporting media under high airflow velocities (up to 4200 m³/h)',
      'High temperature resistance up to 300°C with strong acid and alkali chemical resistance',
      'Captures large dust particles ≥ 10 µm, grease, oil mist, and moisture with ultra-low resistance (< 15 Pa)',
      'Extends the operational lifespan of downstream HEPA and secondary pleated air filters',
      'Ideal for kitchen grease exhaust, high fire protection areas, HVAC air intake, and industrial dust removal'
    ],
    specs: {
      'Filter Level': 'G2 (EN779 Standard)',
      'Filtration Efficiency': '≥ 70% @ ≥ 10 µm',
      'Reusability': 'Permanent, Repeatedly Washable & Rustproof',
      'Media Structure': 'Multi-layer Expanded & Bonded Aluminum (3 & 7 Layers)',
      'Max Operating Temp': '300°C',
      'Chemical Resistance': 'Strong Acid & Alkali Resistance',
      'Initial Pressure Drop': '< 15 Pa (21mm), < 45 Pa (46mm)',
      'Final Pressure Drop': '< 200 Pa',
      'Primary Applications': 'Moisture & Oil Mist Removal, High Fire Risk Areas, High Temp HVAC Pre-Filtration'
    },
    technicalTable: {
      headers: ['Specification Size (mm)', 'Rated Air Volume (m³/h)', 'Initial Pressure (Pa)', 'Final Pressure (Pa)', 'Filtered Objects (µm)', 'Efficiency', 'Layer Count', 'Filtration Level'],
      rows: [
        ['595 * 595 * 21', '4200', '< 15 Pa', '< 200 Pa', '≥ 10 µm', '≥ 70%', '3 Layers', 'G2'],
        ['495 * 495 * 21', '3000', '< 15 Pa', '< 200 Pa', '≥ 10 µm', '≥ 70%', '3 Layers', 'G2'],
        ['295 * 595 * 21', '2200', '< 15 Pa', '< 200 Pa', '≥ 10 µm', '≥ 70%', '3 Layers', 'G2'],
        ['595 * 595 * 46', '4200', '< 45 Pa', '< 200 Pa', '≥ 10 µm', '≥ 70%', '7 Layers', 'G2'],
        ['495 * 495 * 46', '3000', '< 45 Pa', '< 200 Pa', '≥ 10 µm', '≥ 70%', '7 Layers', 'G2'],
        ['295 * 595 * 46', '2200', '< 45 Pa', '< 200 Pa', '≥ 10 µm', '≥ 70%', '7 Layers', 'G2'],
      ]
    }
  },
  {
    slug: 'washable-nylon-mesh-pre-filter',
    name: 'Washable Nylon Mesh Pre Filter',
    category: 'Air Filters',
    subcategory: 'Washable / Reusable Filters',
    subcategorySlug: '/filters/washable',
    description: 'The Washable Nylon Mesh Pre Filter is a durable primary air filter built with high-density woven nylon mesh and a lightweight aluminum frame. Designed to withstand acid and alkali environments while allowing repeated washing, it offers ultra-low airflow resistance (< 2 Pa) and large airflow volume capacity for central air conditioning and residential ventilation.',
    image: '/images/washable-nylon-mesh-pre-filter.png',
    features: [
      'High-density woven nylon mesh filter media allowing repeated washing with long service life',
      'Ultra-low initial resistance (< 2 Pa) with maximum airflow velocity capacity up to 5400 m³/h',
      'Strong acid and alkali chemical resistance ideal for aggressive ventilation environments',
      'Lightweight rigid aluminum alloy frame with cross-wire support grid',
      'First-stage primary filtration for central air conditioning and residential HVAC systems',
      'Available in 10mm and 21mm ultra-thin profile options',
      'Simple maintenance — easily cleaned with water spray or air blowing'
    ],
    specs: {
      'Media Material': 'High Density Woven Nylon Mesh',
      'Frame Material': 'Aluminum Alloy Rigid Frame',
      'Reusability': 'Repeatedly Washable & Long Lifespan',
      'Chemical Resistance': 'Acid & Alkali Resistant',
      'Thickness Profile': '10mm / 21mm Ultra-thin',
      'Rated Air Velocity': '4.0 m/s',
      'Initial Pressure Drop': '< 2 Pa',
      'Maximum Airflow Rate': 'Up to 5400 m³/h',
      'Primary Applications': 'Central Air Conditioning First-Stage Pre-Filtration, Family Air Conditioners, Industrial Ventilation'
    },
    technicalTable: {
      headers: ['Length (mm)', 'Width (mm)', 'Thickness (mm)', 'Air Velocity (m/s)', 'Initial Pressure (Pa)', 'Rated Airflow (m³/h)'],
      rows: [
        ['595', '595', '10 / 21 mm', '4.0 m/s', '< 2 Pa', '5400 m³/h'],
        ['495', '595', '10 / 21 mm', '4.0 m/s', '< 2 Pa', '5000 m³/h'],
        ['495', '495', '10 / 21 mm', '4.0 m/s', '< 2 Pa', '4500 m³/h'],
        ['295', '595', '10 / 21 mm', '4.0 m/s', '< 2 Pa', '3000 m³/h'],
      ]
    }
  }
];

export const airFiltersProducts = [
  {
    slug: 'hepa-filter',
    name: 'HEPA Filter',
    category: 'Air Filters',
    subcategory: 'HEPA Filters',
    subcategorySlug: '/filters/hepa',
    description: 'HEPA (High-Efficiency Particulate Air) filters are a type of air filter designed to remove at least 99.97% of airborne particles 0.3 micrometers (µm) in diameter. They are widely used in cleanrooms, hospitals, pharmaceutical facilities, and HVAC systems to maintain high air quality. Our HEPA filters are constructed with high-quality micro glass fiber media and can be manufactured with various frame materials and sealing options to meet specific application requirements.',
    image: '/images/hepa-filter.jpg',
    features: [
      'Available in five efficiencies on 0.3 micron size particles: (99.97%, 99.995% HEPA) and (90% , 99%, 99.9% Sub-HEPA )',
      'Standard and high capacity models',
      'Multiple cell side options',
      'Factory tested for efficiency and performance'
    ],
    specs: {
      'Item NO.': 'TTH-100',
      'Optional Thickness': '80 ~ 292mm',
      'Separator': '120g/m² offset paper / 0.035mm aluminum foil',
      'Gasket': 'Pu endless gasket / EVA',
      'Sealant': 'Pu two-component polyurethane glue',
      'Frame': 'Aluminum / GI / SUS',
      'Media': 'Micro glass fiber',
      'Efficiency': 'H13 / H14',
      'Max Temperature': '70°C ~ 150°C',
      'Max Humidity': '100%'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)'],
      rows: [
        ['TTH-001', '305*610*150', '750', '6.32', '1.12'],
        ['TTH-002', '610*610*150', '1500', '13.33', '1.12'],
        ['TTH-003', '610*305*292', '1600', '13.87', '2.39'],
        ['TTH-004', '610*610*292', '3400', '29.25', '2.54'],
        ['TTH-017', '305*610*292', '1600', '13.87', '2.39'],
        ['TTH-018', '610*610*292', '3400', '29.25', '2.54'],
        ['TTH-019', '610*915*292', '5000', '43.87', '2.49'],
        ['TTH-020', '610*1220*292', '6800', '58.49', '2.54'],
      ]
    }
  },
  {
    slug: 'mini-pleat-hepa-filter',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/1-3-1-hepa-purifier-replacement-air-filter_01m.jpg',
    name: 'Mini Pleat HEPA Filter',
    category: 'Air Filters',
    subcategory: 'HEPA Filters',
    subcategorySlug: '/filters/hepa',
    description: 'The Mini Pleat HEPA Filter is specifically designed for terminal filtration in pharmaceutical, hospital, electronic, and cleanroom air conditioning systems. Constructed with wet-laid microfine glass paper and hot-melt bead separators, each filter is scan-tested according to EN 1822 standards for 99.99% to 99.995% efficiency.',
    features: [
      'High efficiency, good sealing, low resistance, long life-span, and light weight, convenient installation and replacement.'
    ],
    specs: {
      'Item NO.': 'TTH-200',
      'Optional Thickness': '38 ~ 120mm',
      'Separator': 'Hot melt bead',
      'Gasket': 'Pu endless gasket / EVA',
      'Sealant': 'Pu two-component polyurethane glue',
      'Frame': 'Aluminum / GI / SUS',
      'Media': 'Micro glass fiber',
      'Efficiency': 'E10 / E11 / E12 / H13 / H14 / U15 / U16 / U17',
      'Max Temperature': '70°C',
      'Max Humidity': '100%'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)'],
      rows: [
        ['TTH-001', '610*305*69', '500', '4.92', '0.75'],
        ['TTH-002', '610*610*69', '1000', '9.84', '0.75'],
        ['TTH-003', '915*610*69', '1500', '14.77', '0.75'],
        ['TTH-004', '610*305*69', '500', '4.92', '0.75'],
        ['TTH-005', '610*610*69', '1000', '9.84', '0.75'],
        ['TTH-006', '915*610*69', '1500', '14.77', '0.75'],
        ['TTH-007', '610*305*96', '750', '7.69', '1.12'],
        ['TTH-008', '610*610*96', '1500', '15.38', '1.12'],
        ['TTH-009', '915*610*96', '2250', '23.07', '1.12'],
        ['TTH-010', '1220*610*96', '3000', '30.76', '1.12'],
      ]
    }
  },
  {
    slug: 'bag-filter',
    name: 'Bag Filter',
    category: 'Air Filters',
    subcategory: 'Bag Filters',
    subcategorySlug: '/filters/bag',
    description: 'The Bag Filter is engineered with a double-layer filtration material structure for high-efficiency layered purification. Featuring a galvanized steel casing and V-bank design, it provides exceptional airflow capacity, low pressure drop, high dust-holding power, and moisture resistance up to 300°C.',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/1-2-f5-f9-medium-replacement-air-filter_01m.jpg',
    features: [
      'Large dust holding capacity and stable performance, cost-effective, affordable.'
    ],
    specs: {
      'Item NO.': 'TTB-300',
      'Optional Thickness': 'Aluminum: 21, 25, 46 GI: 25',
      'Pocket type': 'Sewing bag / Ultrasonic bag',
      'Media': 'Synthetic fiber / Non-woven fabrics',
      'Efficiency': 'F5, F6, F7, F8, F9',
      'Max Temperature': '50°C',
      'Max Humidity': '100%'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)', 'Pocket Numbers'],
      rows: [
        ['TTB-001', '287*287*381', '600', '0.89', '2.02', '3'],
        ['TTB-002', '592*592*381', '2050', '3.18', '1.62', '6'],
        ['TTB-003', '287*592*500', '1350', '2.10', '2.21', '3'],
        ['TTB-004', '287*592*500', '1750', '2.68', '2.86', '4'],
        ['TTB-005', '490*592*500', '2250', '3.48', '2.15', '5'],
        ['TTB-006', '592*592*500', '2700', '4.17', '2.14', '6'],
        ['TTB-007', '592*592*500', '3500', '5.37', '2.77', '8'],
        ['TTB-008', '592*592*500', '4250', '6.56', '3.37', '10'],
      ]
    }
  },
  {
    slug: 'pleated-air-filter',
    name: 'Pleated Air Filter',
    category: 'Air Filters',
    subcategory: 'Pre Filters',
    subcategorySlug: '/filters/pre',
    description: 'The Pleated Air Filter is designed for high-efficiency gas-phase filtration and deodorization. Featuring a rich pore structure with a large specific surface area, it provides exceptional adsorption capacity for harmful gases (such as formaldehyde, toluene, and VOCs) with low airflow resistance and low service cost.',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/201909060948298944.jpg',
    features: [
      'The filter is designed to deliver consistent and reliable filtration performance even under extreme heat conditions, providing clean and purified air or gas.'
    ],
    specs: {
      'Item NO.': 'TTP-400',
      'Optional Thickness': '17~96 mm',
      'Frame': 'Extruded aluminum (< 200°C) / Stainless steel (> 200°C)',
      'Media': 'Synthetic',
      'Max Temperature': '150°C',
      'Max Humidity': '100%',
      'Face guard': 'Customized'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)'],
      rows: [
        ['TTP-001', '594*289*21', '750', '0.28', '1.21'],
        ['TTP-003', '594*492*21', '1550', '0.58', '1.22'],
        ['TTP-004', '594*289*46', '1050', '0.40', '1.70'],
        ['TTP-005', '594*492*46', '1800', '0.67', '1.71'],
        ['TTP-006', '594*594*46', '2200', '0.81', '1.73'],
        ['TTP-009', '594*594*69', '3000', '1.11', '2.36'],
        ['TTP-012', '594*594*80', '3450', '1.28', '2.72'],
        ['TTP-013', '594*289*96', '1550', '0.58', '2.51'],
        ['TTP-014', '594*492*96', '2650', '0.97', '2.52'],
        ['TTP-015', '594*594*96', '3150', '1.17', '2.48'],
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
      'Washable , Replaceable filter media. High strength, large air volume, small resistance, high capacity of dust.'
    ],
    specs: {
      'Item NO.': 'TTPF-500',
      'Optional Thickness': '10 / 17 / 21 / 25 mm',
      'Frame': 'Aluminum / GI',
      'Media': 'Synthetic fiber',
      'Max Temperature': '50°C',
      'Max Humidity': '100%',
      'Face guard': 'Square mesh / Grid mesh / Sprayed metal net'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)', 'Efficiency'],
      rows: [
        ['TTPF-001', '594*289*10', '1200', '0.19', '1.50', 'G1-G2'],
        ['TTPF-002', '594*492*10', '2100', '0.31', '1.50', 'G1-G2'],
        ['TTPF-003', '594*594*10', '2500', '0.37', '1.50', 'G1-G2'],
        ['TTPF-004', '594*289*15', '1200', '0.19', '2.00', 'G1-G2'],
        ['TTPF-005', '594*492*15', '2100', '0.31', '2.00', 'G1-G2'],
        ['TTPF-006', '594*594*15', '2500', '0.37', '2.00', 'G1-G2'],
        ['TTPF-007', '594*289*21', '1550', '0.19', '2.54', 'G1-G2'],
        ['TTPF-008', '594*492*21', '2650', '0.31', '2.54', 'G1-G2'],
        ['TTPF-009', '594*594*21', '3250', '0.37', '2.54', 'G1-G2'],
      ]
    }
  },
  {
    slug: 'washed-pre-filter',
    name: 'Washed Pre Filter',
    category: 'Air Filters',
    subcategory: 'Washable Filters',
    subcategorySlug: '/filters/washable',
    description: 'The Washed Pre Filter (Extended Surface Washable Pre Filter) is a high-performance washable and reusable pre-filter engineered for air conditioning, industrial workshops, and large-scale air compressor intake systems. Designed to protect secondary filtration systems from heavy dust accumulation, its durable metal frame allows media replacement while the media itself can be washed 1-2 times.',
    image: '/images/washed-pre-filter.jpg',
    features: [
      'Reused after cleaning by water',
      'Reused of frame'
    ],
    specs: {
      'Item NO.': 'TTWF-600',
      'Optional Thickness': '46~96 mm',
      'Frame': 'Aluminum / GI',
      'Media': 'Synthetic fiber',
      'Efficiency': 'G1 / G2 / G3 / G4',
      'Max Temperature': '50°C',
      'Max Humidity': '100%'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)'],
      rows: [
        ['TTWF-001', '594*289*46', '1150', '0.42', '1.86'],
        ['TTWF-002', '594*492*46', '1850', '0.69', '1.76'],
        ['TTWF-003', '594*594*46', '2250', '0.83', '1.77'],
        ['TTWF-004', '594*289*69', '1300', '0.47', '2.10'],
        ['TTWF-005', '594*492*69', '2100', '0.77', '2.00'],
        ['TTWF-006', '594*594*69', '2500', '0.92', '1.97'],
        ['TTWF-007', '594*289*96', '1750', '0.64', '2.83'],
        ['TTWF-008', '594*492*96', '2850', '1.05', '2.71'],
        ['TTWF-009', '594*594*96', '3400', '1.26', '2.68'],
      ]
    }
  },
  {
    slug: 'v-type-bank-filter',
    name: 'V-Type Bank Filter',
    category: 'Air Filters',
    subcategory: 'V-Bank Filters',
    subcategorySlug: '/filters/v-bank',
    description: 'The V-Type Bank Filter features a double-layer filter material structure for layered filtration. Built with high-strength galvanized steel frame, it offers high airflow capacity, low pressure drop, high dust-holding capacity, and high moisture & chemical resistance up to 300°C operating environments.',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/201909101442246985.jpg',
    features: [
      'The V-bank filter offers advantages such as increased surface area, high dust-holding capacity, low airflow resistance, and customizable efficiency.'
    ],
    specs: {
      'Item NO.': 'TTVB-700',
      'Optional Thickness': '292 / 400mm',
      'Separator': 'Hot melt bead',
      'Gasket': 'EVA / EPDM',
      'Sealant': 'Pu two-component polyurethane glue',
      'Frame': 'Plastic frame',
      'Media': 'Micron glass fiber',
      'Efficiency': 'F6 / F7 / F8 / F9 / H10 / H11 / H12',
      'Max Temperature': '70°C',
      'Max Humidity': '100%'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)', 'Media (Pcs)'],
      rows: [
        ['TTVB-001', '287*287*292', '750', '4.58', '2.53', '4'],
        ['TTVB-002', '490*287*292', '1300', '8.13', '2.57', '4'],
        ['TTVB-003', '592*287*292', '1600', '9.91', '2.62', '4'],
        ['TTVB-004', '287*490*292', '1100', '6.87', '2.17', '6'],
        ['TTVB-005', '490*490*292', '2000', '12.20', '2.31', '6'],
        ['TTVB-006', '592*490*292', '2400', '14.87', '2.30', '6'],
        ['TTVB-007', '287*592*292', '1650', '9.16', '2.70', '8'],
        ['TTVB-008', '490*592*292', '2650', '16.26', '2.68', '8'],
        ['TTVB-009', '592*592*292', '3400', '19.83', '2.69', '8'],
      ]
    }
  },
  {
    slug: 'hepa-housing-box',
    name: 'HEPA Housing Box',
    category: 'Air Filters',
    subcategory: 'Terminal HEPA Box',
    subcategorySlug: '/filters/terminal-hepa',
    description: "HEPA filter housing boxes are critical components in creating sterile environments by providing secure enclosures for HEPA filters. These boxes ensure that filters perform efficiently and maintain the highest levels of air purity. We specialize in designing and manufacturing top-quality HEPA filter housings that meet the demanding specifications of various industries requiring ultra-clean air.",
    image: '/images/hepa-housing-box.png',
    features: [
      "Critical components in creating sterile environments by providing secure enclosures for HEPA filters.",
      "Ensures that filters perform efficiently and maintain the highest levels of air purity.",
      "Designed and manufactured with top-quality materials to meet demanding ultra-clean room specifications.",
      "Airtight casing and precision leak-free clamping mechanism prevent bypass leakage.",
      "Integrated perforated diffusion plate ensures uniform, non-turbulent laminar air distribution.",
      "Equipped with test ports for DOP/PAO aerosol challenge and differential pressure monitoring."
    ],
    specs: {
      'Product Name': 'HEPA Housing Box (Terminal Ceiling Module)',
      'Category': 'Air Filters / Terminal Filtration',
      'Housing Material': 'Cold-rolled steel powder coated / Stainless Steel SUS 304 / 316L',
      'Compatible Filters': 'Standard & Mini-Pleat HEPA / Sub-HEPA / ULPA Filters',
      'Diffuser Face': 'Perforated screen / Swirl diffuser plate',
      'Sealing Type': 'Mechanical clamp / Gel seal / Endless PU gasket',
      'Inlet Connection': 'Top or side circular / rectangular duct collar with damper option',
      'Test Ports': 'Upstream aerosol injection port and static pressure test port',
      'Applications': 'Pharmaceutical Cleanrooms, Sterile Operating Theaters, Semiconductor Labs, Isolation Wards'
    }
  },
  {
    slug: 'hvac-activated-carbon-pocket-filter',
    name: 'HVAC Activated Carbon Pocket Filter',
    category: 'Air Filters',
    subcategory: 'Carbon/Activated Carbon Filters',
    subcategorySlug: '/filters/carbon',
    description: 'Combine the advantages of bag filter and activated carbon to increase the filtration area while effectively removing particulate matter and harmful gases in the air.',
    image: '/images/hvac-activated-carbon-pocket-filter.png',
    // features: [
    //   'Combine the advantages of bag filter and activated carbon to increase the filtration area while effectively removing particulate matter and harmful gases in the air.',
    //   'High-grade activated carbon filter media for effective adsorption of odors, VOCs, and gaseous contaminants.',
    //   'Multi-pocket bag structure provides expanded surface area with high dust and gas holding capacity.',
    //   'Sturdy frame with precision sewing bag pocket type construction.',
    //   'G4 efficiency rating for simultaneous coarse particulate filtration and air purification.'
    // ],
    specs: {
      'Item NO.': 'TTC-700',
      'Optional Thickness': '21~46 mm',
      'Media': 'Activated carbon filter',
      'Efficiency': 'G4',
      'Pocket type': 'Sewing bag',
      'Max Temperature': '50°C',
      'Max Humidity': '100%'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)', 'Pocket Numbers'],
      rows: [
        ['TTC-001', '287*592*381', '1450', '1.58', '2.37', '3'],
        ['TTC-002', '592*592*381', '2850', '3.18', '2.26', '6'],
        ['TTC-003', '287*592*381', '1850', '2.04', '3.02', '4'],
        ['TTC-004', '592*592*381', '3700', '4.09', '2.93', '8'],
        ['TTC-005', '287*592*500', '1850', '2.08', '3.02', '3'],
        ['TTC-006', '592*592*500', '3750', '4.17', '2.97', '6'],
        ['TTC-009', '287*592*500', '2250', '2.49', '3.68', '3'],
        ['TTC-010', '592*592*600', '4500', '5.01', '3.57', '6'],
        ['TTC-011', '287*592*600', '2900', '3.21', '4.74', '4'],
        ['TTC-012', '592*592*600', '5800', '6.44', '4.60', '8'],
      ]
    }
  },
  {
    slug: 'hvac-activated-carbon-pocket-filter',
    name: 'HVAC Activated Carbon Pocket Filter',
    category: 'Air Filters',
    subcategory: 'Carbon/Activated Carbon Filters',
    subcategorySlug: '/filters/carbon',
    description: 'Combine the advantages of bag filter and activated carbon to increase the filtration area while effectively removing particulate matter and harmful gases in the air.',
    image: '/images/hvac-activated-carbon-pocket-filter.png',
    features: [
      'Combine the advantages of bag filter and activated carbon to increase the filtration area while effectively removing particulate matter and harmful gases in the air.',
      'High-grade activated carbon filter media for effective adsorption of odors, VOCs, and gaseous contaminants.',
      'Multi-pocket bag structure provides expanded surface area with high dust and gas holding capacity.',
      'Sturdy frame with precision sewing bag pocket type construction.',
      'G4 efficiency rating for simultaneous coarse particulate filtration and air purification.'
    ],
    specs: {
      'Item NO.': 'KLC-KP7-C',
      'Optional Thickness': '21~46 mm',
      'Media': 'Activated carbon filter',
      'Efficiency': 'G4',
      'Pocket type': 'Sewing bag',
      'Max Temperature': '50°C',
      'Max Humidity': '100%'
    },
    technicalTable: {
      headers: ['Model NO.', 'Actual Size HxWxD (mm)', 'Air Flow (m³/h)', 'Media Area Flow (m²)', 'Velocity (m/s)', 'Pocket Numbers'],
      rows: [
        ['KP7-C-001', '287*592*381', '1450', '1.58', '2.37', '3'],
        ['KP7-C-002', '592*592*381', '2850', '3.18', '2.26', '6'],
        ['KP7-C-003', '287*592*381', '1850', '2.04', '3.02', '4'],
        ['KP7-C-004', '592*592*381', '3700', '4.09', '2.93', '8'],
        ['KP7-C-005', '287*592*500', '1850', '2.08', '3.02', '3'],
        ['KP7-C-006', '592*592*500', '3750', '4.17', '2.97', '6'],
        ['KP7-C-009', '287*592*500', '2250', '2.49', '3.68', '3'],
        ['KP7-C-010', '592*592*600', '4500', '5.01', '3.57', '6'],
        ['KP7-C-011', '287*592*600', '2900', '3.21', '4.74', '4'],
        ['KP7-C-012', '592*592*600', '5800', '6.44', '4.60', '8'],
      ]
    }
  }
];

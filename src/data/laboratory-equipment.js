export const laboratoryEquipmentProducts = [
  {
    slug: 'hplc',
    name: 'HPLC',
    category: 'Laboratory Equipment',
    subcategory: 'Chromatography Equipment',
    subcategorySlug: '/science/chromatography',
    description: "High Performance Liquid Chromatography (HPLC), or LC, separates, identifies, and measures dissolved compounds in a liquid sample. A pump moves a liquid solvent (mobile phase) through a separation column (stationary phase), separating the injected sample's components so a detector can quantify each one on a chromatogram. Ultra High Performance Liquid Chromatography (UHPLC) provides the same precise analysis at much higher speeds.",
    image: '/images/hplc.jpg',
    features: [
      "Separates, identifies, and measures dissolved compounds in a liquid sample.",
      "A pump moves a liquid solvent (mobile phase) through a separation column (stationary phase), separating the injected sample's components so a detector can quantify each one on a chromatogram.",
      "Ultra High Performance Liquid Chromatography (UHPLC) provides the same precise analysis at much higher speeds.",
      "High-pressure solvent delivery pumps for stable, pulse-free mobile phase flow.",
      "Automated autosampler module with high injection reproducibility and minimal carryover.",
      "Thermostatted column compartment providing consistent temperature stability during separations."
    ],
    specs: {
      'Product Type': 'High Performance Liquid Chromatography (HPLC / UHPLC) System',
      'Category': 'Chromatography Equipment',
      'Separation Technique': 'Liquid Chromatography (Isocratic & Gradient Delivery)',
      'Detector': 'UV-Vis Absorbance Detector / Photodiode Array (PDA)',
      'Sample Injection': 'Automated Precision Autosampler / Manual Injector',
      'Column Compartment': 'Thermostatted Column Oven for precise retention time reproducibility',
      'Pump System': 'Dual Reciprocating Plunger High-Pressure Delivery Pump',
      'Applications': 'Pharmaceutical Quality Control, Assay & Dissolution Testing, Chemical Analysis'
    }
  },
  {
    slug: 'thermostatic-water-bath-dk98-iia',
    name: 'Thermostatic Water Bath',
    category: 'Laboratory Equipment',
    subcategory: 'Water Bath',
    subcategorySlug: '/science/general/water-bath',
    brand: 'FAITHFUL',
    model: 'DK-98-IIA',
    description: 'Used for precision constant temperature and auxiliary. This device is widely used for evaporation, drying, concentration and constant temperature heating in the school laboratory, food processing, oil factory, biochemistry, agriculture and etc.',
    image: '/images/thermostatic-water-bath.png',
    features: [
      'Cold-rolling steel spraying exterior for high durability and corrosion resistance.',
      'Stainless steel inner tank and cover ensuring long service life and easy cleaning.',
      'Intelligent temperature control instrument adopts PID control with dual digital display.',
      'Comprehensive digital functions: operation timing (0-9999 min), fixed value operation, automatic stop, over-temperature alarm, power-off compensation, power failure memory, error correction, and menu lock.',
      'Flexible configuration options: available in 1-hole, 2-hole, 4-hole, 6-hole, and 8-hole configurations across single and double rows.',
      'Custom production available to meet specific laboratory capacity and testing requirements.'
    ],
    specs: {
      'Brand': 'FAITHFUL',
      'Model Series': 'DK-98-IIA',
      'Temperature Range': 'Room Temp. +5 ~ 100°C',
      'Temperature Motion': '±0.5°C',
      'Temperature Sensitivity': '≤ ±1°C',
      'Display Error': '≤ ±2.5°C',
      'Voltage': '200-240V / 100-120V (50/60Hz)',
      'Exterior Material': 'Cold-rolling steel spraying exterior',
      'Chamber & Cover': 'Stainless steel inner tank and cover',
      'Controller': 'PID Microprocessor digital temperature controller',
      'Timing Range': '0 - 9999 min (fixed value, auto-stop, over-temp alarm)',
      'Available Configurations': '1 hole, 1 row & 2 holes, 1 row & 4 holes, 1 row & 6 holes, 2 rows & 4 holes, 2 rows & 6 holes, 2 rows & 8 holes'
    },
    technicalTable: {
      headers: ['Model', 'Configuration', 'Power', 'Chamber Size (mm)', 'Product Size (mm)', 'Net / Gross Wt.'],
      rows: [
        ['DK-98-(II)A', '1 Hole', '400W', '168*168*120', '360*240*190', '3.3 / 4.3 kg'],
        ['DK-98-(II)A', '1 Row & 2 Holes', '500W', '325*168*120', '510*240*190', '5.0 / 6.5 kg'],
        ['DK-98-(II)A', '1 Row & 4 Holes', '1000W', '653*168*120', '830*380*190', '7.0 / 8.0 kg'],
        ['DK-98-(II)A', '1 Row & 6 Holes', '1500W', '945*168*120', '1100*250*215', '12.0 / 14.0 kg'],
        ['DK-98-(II)A', '2 Rows & 4 Holes', '1000W', '325*325*120', '510*380*190', '6.5 / 7.7 kg'],
        ['DK-98-(II)A', '2 Rows & 6 Holes', '1500W', '480*325*120', '670*380*190', '8.6 / 9.3 kg'],
        ['DK-98-(II)A', '2 Rows & 8 Holes', '2000W', '635*325*120', '830*380*190', '9.0 / 10.0 kg'],
      ]
    }
  }
];

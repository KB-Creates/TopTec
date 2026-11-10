/**
 * Bi-directional HVAC & refrigeration capacity conversion helpers.
 */
export const CONVERSION_FACTORS = {
  kw: 1,
  btu: 0.0002930710386613453,
  kcal: 0.0011630003081951,
  ton: 3.51685452531256,
  hp: 2.75,
  'sq.m.': 0.34375,
};

export const CALCULATOR_FIELDS = [
  {
    id: 'kw',
    unit: 'kw',
    label: 'KW',
    fullName: 'Kilowatts',
    unitSuffix: 'kW',
    placeholder: 'e.g. 10',
  },
  {
    id: 'ton',
    unit: 'ton',
    label: 'TON',
    fullName: 'Tons of Refrigeration',
    unitSuffix: 'TR',
    placeholder: 'e.g. 2.84',
  },
  {
    id: 'btu',
    unit: 'btu',
    label: 'BTU',
    fullName: 'BTU per Hour',
    unitSuffix: 'BTU/h',
    placeholder: 'e.g. 34121',
  },
  {
    id: 'kcal',
    unit: 'kcal',
    label: 'KCAL',
    fullName: 'Kilocalories per Hour',
    unitSuffix: 'kcal/h',
    placeholder: 'e.g. 8598',
  },
  {
    id: 'hp',
    unit: 'hp',
    label: 'HP',
    fullName: 'Nominal Horsepower',
    unitSuffix: 'HP',
    placeholder: 'e.g. 3.64',
  },
  {
    id: 'sqm',
    unit: 'sq.m.',
    label: 'SQ.M.',
    fullName: 'Cooling Area Coverage',
    unitSuffix: 'm²',
    placeholder: 'e.g. 29.1',
  },
];

export const QUICK_PRESETS = [
  { label: '1 TR', unit: 'ton', value: '1' },
  { label: '5 TR', unit: 'ton', value: '5' },
  { label: '10 TR', unit: 'ton', value: '10' },
  { label: '10 kW', unit: 'kw', value: '10' },
  { label: '50 m²', unit: 'sq.m.', value: '50' },
  { label: '100 m²', unit: 'sq.m.', value: '100' },
];

export const INITIAL_CALCULATOR_VALUES = {
  kw: '',
  btu: '',
  kcal: '',
  ton: '',
  hp: '',
  'sq.m.': '',
};

export function formatConvertedNumber(num) {
  if (!Number.isFinite(num)) return '';
  if (num === 0) return '0';
  const roundedNum = num % 1 === 0 ? num.toString() : num.toFixed(4);
  return parseFloat(roundedNum).toString();
}

export function calculateConvertedValues(sourceUnit, rawValue) {
  if (rawValue === '' || rawValue === null || rawValue === undefined) {
    return { ...INITIAL_CALCULATOR_VALUES };
  }

  const inputValue = parseFloat(rawValue);
  if (Number.isNaN(inputValue)) {
    return {
      ...INITIAL_CALCULATOR_VALUES,
      [sourceUnit]: String(rawValue),
    };
  }

  const sourceFactor = CONVERSION_FACTORS[sourceUnit];
  if (!sourceFactor) {
    return { ...INITIAL_CALCULATOR_VALUES };
  }

  const updated = {};
  for (const field of CALCULATOR_FIELDS) {
    if (field.unit === sourceUnit) {
      updated[field.unit] = String(rawValue);
    } else {
      const targetFactor = CONVERSION_FACTORS[field.unit];
      const result = (inputValue * sourceFactor) / targetFactor;
      updated[field.unit] = formatConvertedNumber(result);
    }
  }

  return updated;
}

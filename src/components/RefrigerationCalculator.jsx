import React, { useState } from 'react';
import { RotateCcw, Calculator, Copy, Check, Mail } from 'lucide-react';
import {
  CALCULATOR_FIELDS,
  INITIAL_CALCULATOR_VALUES,
  calculateConvertedValues,
} from '../utils/refrigerationCalculator';

const QUICK_PRESETS = [
  { label: '1 TR', unit: 'ton', value: '1' },
  { label: '5 TR', unit: 'ton', value: '5' },
  { label: '10 TR', unit: 'ton', value: '10' },
  { label: '10 kW', unit: 'kw', value: '10' },
  { label: '50 m²', unit: 'sq.m.', value: '50' },
  { label: '100 m²', unit: 'sq.m.', value: '100' },
];

const RefrigerationCalculator = () => {
  const [values, setValues] = useState(INITIAL_CALCULATOR_VALUES);
  const [activeUnit, setActiveUnit] = useState(null);
  const [copiedUnit, setCopiedUnit] = useState(null);

  const hasAnyValue = Object.values(values).some((val) => val !== '');

  const handleInputChange = (unit, rawValue) => {
    setActiveUnit(rawValue === '' ? null : unit);
    setValues(calculateConvertedValues(unit, rawValue));
  };

  const handlePresetClick = (preset) => {
    setActiveUnit(preset.unit);
    setValues(calculateConvertedValues(preset.unit, preset.value));
  };

  const handleClear = () => {
    setValues({ ...INITIAL_CALCULATOR_VALUES });
    setActiveUnit(null);
    setCopiedUnit(null);
  };

  const handleCopy = async (unit, value) => {
    if (!value || !navigator?.clipboard) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopiedUnit(unit);
      setTimeout(() => setCopiedUnit((prev) => (prev === unit ? null : prev)), 1600);
    } catch {
      // Ignore clipboard failures in restricted contexts
    }
  };

  const buildQuoteMailto = () => {
    const subject = 'HVAC Sizing & Refrigeration Load Inquiry';
    if (!hasAnyValue) {
      return `mailto:caretoptec@gmail.com?subject=${encodeURIComponent(subject)}`;
    }
    const summaryLines = CALCULATOR_FIELDS.map(
      (f) => `- ${f.label} (${f.fullName}): ${values[f.unit] || '0'} ${f.unitSuffix}`
    ).join('\n');
    const body = `Hello TopTec HVAC Engineering Team,\n\nI would like a quotation / technical consultation based on the following cooling capacity calculation:\n\n${summaryLines}\n\nFacility / Room Details:\n- Application (Cleanroom / Pharma / Commercial):\n- Target Temperature & RH:\n`;
    return `mailto:caretoptec@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white rounded-3xl sm:rounded-4xl border border-gray-100 shadow-[0_20px_50px_rgba(32,33,36,0.06)] overflow-hidden">
      {/* Card Top Bar */}
      <div className="px-5 py-5 sm:px-8 sm:py-7 bg-linear-to-r from-[#F8F9FA] via-white to-[#F8F9FA] border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#4A93C4] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#4A93C4]/25">
              <Calculator size={22} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#202124] normal-case tracking-tight leading-snug">
                Cooling Capacity &amp; Unit Converter
              </h2>
              <p className="text-xs sm:text-sm text-[#5f6368] font-light mt-0.5">
                Type into any box below — all other units recalculate automatically
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClear}
            disabled={!hasAnyValue}
            className={`self-start sm:self-auto h-10 px-4 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shrink-0 ${
              hasAnyValue
                ? 'bg-white text-[#202124] border border-gray-200 hover:border-[#4A93C4] hover:text-[#4A93C4] shadow-2xs cursor-pointer active:scale-95'
                : 'bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed'
            }`}
          >
            <RotateCcw size={14} />
            Clear All
          </button>
        </div>

        {/* Quick Presets */}
        <div className="mt-5 pt-4 border-t border-gray-100/80 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5f6368] mr-1">
            Quick Presets:
          </span>
          {QUICK_PRESETS.map((preset) => {
            const isSelected =
              activeUnit === preset.unit && values[preset.unit] === preset.value;
            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => handlePresetClick(preset)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer active:scale-95 ${
                  isSelected
                    ? 'bg-[#4A93C4] text-white shadow-xs'
                    : 'bg-white text-[#3c4043] border border-gray-200/90 hover:border-[#4A93C4] hover:text-[#4A93C4]'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="p-5 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {CALCULATOR_FIELDS.map((field) => {
            const isActive = activeUnit === field.unit;
            const currentValue = values[field.unit];
            const isCopied = copiedUnit === field.unit;

            return (
              <div
                key={field.id}
                className={`group rounded-2xl p-4 sm:p-4.5 border transition-all duration-200 ${
                  isActive
                    ? 'bg-[#4A93C4]/[0.04] border-[#4A93C4] shadow-sm shadow-[#4A93C4]/10'
                    : 'bg-[#F8F9FA]/80 border-gray-200/75 hover:border-gray-300 hover:bg-white focus-within:bg-white focus-within:border-[#4A93C4] focus-within:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <label
                    htmlFor={field.id}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#202124] tracking-wide cursor-pointer"
                  >
                    <span>{field.label}</span>
                    {isActive && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#4A93C4] text-white">
                        Source
                      </span>
                    )}
                  </label>
                  <span className="text-[11px] sm:text-xs text-[#5f6368] truncate">
                    {field.fullName}
                  </span>
                </div>

                <div className="relative flex items-center">
                  <input
                    id={field.id}
                    type="number"
                    step="any"
                    inputMode="decimal"
                    data-unit={field.unit}
                    value={currentValue}
                    onChange={(e) => handleInputChange(field.unit, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full h-12 pl-3.5 pr-22 rounded-xl border border-gray-200/90 bg-white text-base sm:text-lg font-semibold tabular-nums text-[#202124] placeholder:text-gray-300 placeholder:font-normal outline-none focus:border-[#4A93C4] focus:ring-3 focus:ring-[#4A93C4]/15 transition-all"
                  />

                  <div className="absolute right-2.5 flex items-center gap-1.5">
                    {currentValue !== '' && (
                      <button
                        type="button"
                        onClick={() => handleCopy(field.unit, currentValue)}
                        title={`Copy ${field.label} value`}
                        aria-label={`Copy ${field.label} value`}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#4A93C4] hover:bg-blue-50 transition-colors cursor-pointer"
                      >
                        {isCopied ? (
                          <Check size={14} className="text-emerald-600" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    )}
                    <span className="px-2 py-1 rounded-md bg-gray-100 text-[11px] font-bold text-[#5f6368] select-none pointer-events-none">
                      {field.unitSuffix}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleClear}
            className="h-12 px-6 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-[#4A93C4] text-[#202124] hover:text-[#4A93C4] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw size={16} />
            Clear
          </button>

          <a
            href={buildQuoteMailto()}
            className="h-12 px-6 sm:px-7 rounded-xl bg-[#4A93C4] hover:bg-[#3b7ba8] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#4A93C4]/25 active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Mail size={16} />
            {hasAnyValue ? 'Share Specs for HVAC Quote' : 'Request HVAC Sizing Quote'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RefrigerationCalculator;

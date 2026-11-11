import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Gauge,
  Building2,
} from 'lucide-react';
import RefrigerationCalculator from '../../../components/RefrigerationCalculator';

const CONVERSION_TABLE = [
  {
    base: '1 TON (TR)',
    kw: '3.5169 kW',
    btu: '12,000 BTU/h',
    kcal: '3,023.95 kcal/h',
    note: 'Standard refrigeration ton',
  },
  {
    base: '1 KW',
    kw: '1 kW',
    btu: '3,412.14 BTU/h',
    kcal: '859.85 kcal/h',
    note: '0.2843 TR · 0.3636 HP',
  },
  {
    base: '1 HP',
    kw: '2.75 kW',
    btu: '9,383.39 BTU/h',
    kcal: '2,364.57 kcal/h',
    note: 'Nominal ~8 SQ.M. coverage',
  },
  {
    base: '1 SQ.M.',
    kw: '0.3438 kW',
    btu: '1,172.92 BTU/h',
    kcal: '295.57 kcal/h',
    note: '343.75 W/m² load baseline',
  },
];

const RefrigerationCalculatorPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Refrigeration Calculator | TopTec HVAC & Cleanroom Systems';
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[#4A93C4]/20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-26 sm:pb-12 md:pt-28 lg:pt-32 lg:pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202124] tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-5">
              Refrigeration <span className="text-[#4A93C4]">Calculator</span>
            </h1>

            <p className="text-[#5f6368] text-sm sm:text-base lg:text-lg leading-relaxed font-light max-w-3xl">
              Instantly convert cooling capacity across{' '}
              <strong className="font-semibold text-[#202124]">KW</strong>,{' '}
              <strong className="font-semibold text-[#202124]">TON (TR)</strong>,{' '}
              <strong className="font-semibold text-[#202124]">BTU/h</strong>,{' '}
              <strong className="font-semibold text-[#202124]">KCAL/h</strong>,{' '}
              <strong className="font-semibold text-[#202124]">HP</strong>, and estimated floor area in{' '}
              <strong className="font-semibold text-[#202124]">SQ.M.</strong> when planning chillers, AHUs, and cleanroom HVAC systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white relative">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Interactive Calculator + Reference Datasheet */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              <RefrigerationCalculator />

              {/* Conversion Equivalence Table */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
                <div className="px-5 py-4 sm:px-7 sm:py-5 border-b border-gray-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#4A93C4] flex items-center justify-center shrink-0">
                      <Gauge size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#202124] normal-case tracking-normal">
                        Conversion Factor Reference
                      </h3>
                      <p className="text-xs text-[#5f6368] font-light">
                        Standard thermal &amp; area equivalencies used by this tool
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#F8F9FA] text-[#5f6368] border-b border-gray-100">
                        <th className="py-3 px-4 sm:px-6 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
                          Base Unit
                        </th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
                          Kilowatts
                        </th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
                          BTU / Hr
                        </th>
                        <th className="py-3 px-4 sm:px-6 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONVERSION_TABLE.map((row, idx) => (
                        <tr
                          key={row.base}
                          className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]/50'}
                        >
                          <td className="py-3.5 px-4 sm:px-6 font-bold text-[#4A93C4] whitespace-nowrap border-b border-gray-100/70">
                            {row.base}
                          </td>
                          <td className="py-3.5 px-4 font-semibold tabular-nums text-[#202124] whitespace-nowrap border-b border-gray-100/70">
                            {row.kw}
                          </td>
                          <td className="py-3.5 px-4 font-semibold tabular-nums text-[#202124] whitespace-nowrap border-b border-gray-100/70">
                            {row.btu}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-[#5f6368] whitespace-nowrap border-b border-gray-100/70">
                            {row.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column: Engineering Guidance & CTA */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 sm:space-y-8">
              {/* Quick Usage Guide */}
              <div className="bg-[#F8F9FA] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#202124] normal-case tracking-normal mb-5">
                  How It Works
                </h3>

                <ol className="space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'Enter Any Known Metric',
                      desc: 'Type your cooling load in KW, TON, BTU/h, KCAL/h, HP, or room area in SQ.M. — or tap a quick preset.',
                    },
                    {
                      step: '02',
                      title: 'Read Instant Conversions',
                      desc: 'Every other field updates live with precision rounding and one-click copy icons for spec sheets.',
                    },
                    {
                      step: '03',
                      title: 'Request Cleanroom Sizing',
                      desc: 'Send your converted load directly to TopTec engineers for custom AHU, chiller, or dehumidifier selection.',
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-3.5 items-start">
                      <span className="w-7 h-7 rounded-lg bg-white border border-gray-200/80 text-[#4A93C4] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#202124] normal-case tracking-normal mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#5f6368] font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Engineering Support Card */}
              <div className="bg-[#202124] rounded-3xl sm:rounded-4xl p-6 sm:p-8 lg:p-9 text-white relative overflow-hidden shadow-2xl shadow-gray-300/60">
                <div className="absolute top-8 right-8 w-24 h-24 bg-[#4A93C4] rounded-full blur-[60px] opacity-30 pointer-events-none"></div>
                <h3 className="text-lg sm:text-xl font-bold mb-5 uppercase">
                  Cleanroom HVAC Engineering
                </h3>

                <div className="space-y-4 mb-7">
                  <div className="flex gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#4A93C4] shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      Pharmaceutical cleanrooms require precise air change rates (ACH), HEPA pressure-drop allowances, and tight RH tolerances beyond simple area rules.
                    </p>
                  </div>
                  <div className="flex gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#4A93C4] shrink-0">
                      <Building2 size={18} />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      Our technical team delivers full psychrometric heat-load calculations, AHUs, chillers, and BMS integration tailored to ISO 14644 &amp; cGMP.
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    to="/categories/hvac-systems"
                    className="w-full h-11 px-5 bg-white/10 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/15 transition-all text-xs sm:text-sm"
                  >
                    Explore HVAC Systems
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefrigerationCalculatorPage;

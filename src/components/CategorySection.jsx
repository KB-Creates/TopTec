import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    title: 'Air Filters', 
    desc: 'High-efficiency particulate, pre, and carbon filters for HVAC, AHU, cleanrooms, and sterile labs.',
    slug: 'air-filters',
    image: '/images/airfilters.png'
  },
  { 
    title: 'Air Cleaning', 
    desc: 'Advanced biosafety cabinets, fume hoods, and laminar airflow systems for ISO clean environments.',
    slug: 'air-cleaning',
    image: '/images/flow hood.jpg'
  },
  { 
    title: 'Laboratory Furniture', 
    desc: 'Durable SS 316L and powder-coated modular workbenches, cabinets, and trolleys for modern labs.',
    slug: 'laboratory-furniture',
    image: '/images/labfurniture.jpg'
  },
  { 
    title: 'Production Machinery', 
    desc: 'Reliable tablet section, capsule filling, and liquid syrup section machinery for manufacturers.',
    slug: 'production-machinery',
    image: '/images/production-machinery.jpg'
  },
  { 
    title: 'Laboratory Equipment', 
    desc: 'Precision analytical instruments, HPLC systems, and testing apparatus for strict quality control.',
    slug: 'laboratory-equipment',
    image: '/images/hplc.jpg'
  },
  { 
    title: 'Clean Room', 
    desc: 'Turnkey modular cleanroom panels, airtight doors, interlock systems, and cleanroom LED lighting.',
    slug: 'sterile-processing',
    image: '/images/cleanroom-modular-panel.jpg'
  },
  { 
    title: 'HVAC', 
    desc: 'Precision air handling units, dehumidifiers, and environmental control systems for pharma plants.',
    slug: 'hvac-systems',
    image: '/images/hvac-ahu.jpg'
  },
];

const CategoryCard = ({ cat, idx, total, scrollYProgress, isMobile }) => {
  const start = idx / total;
  const targetScale = 1 - (total - 1 - idx) * 0.03;
  const scale = useTransform(scrollYProgress, [start, 1], [1, targetScale]);

  return (
    <Motion.div
      style={
        isMobile
          ? {
              scale,
              top: `${76 + idx * 8}px`,
              zIndex: idx + 1,
            }
          : undefined
      }
      className={`sticky md:static origin-top md:h-full ${
        idx < 4
          ? 'lg:col-span-3'
          : idx === 6
            ? 'md:col-span-2 lg:col-span-4'
            : 'lg:col-span-4'
      }`}
    >
      <Link
        to={`/categories/${cat.slug}`}
        className="bg-white bg-linear-to-br from-white via-[#FAFBFD] to-[#EEF5FA] py-10 px-8 rounded-3xl border border-gray-200/80 hover:border-[#4A93C4]/40 shadow-[0_12px_30px_-10px_rgba(32,33,36,0.12)] md:shadow-sm hover:shadow-xl hover:shadow-[#4A93C4]/10 transition-all duration-300 group cursor-pointer flex flex-col items-start justify-center text-left min-h-60 sm:min-h-55 md:min-h-0 h-full relative overflow-hidden"
      >
        {/* Right-Masked Category Image Background */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-3/4 pointer-events-none overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 12%, rgba(0,0,0,0.45) 55%, transparent 94%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 12%, rgba(0,0,0,0.45) 55%, transparent 94%)',
          }}
        >
          <img
            src={cat.image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-[0.26] group-hover:opacity-[0.4] group-hover:scale-105 transition-all duration-500 mix-blend-multiply"
          />
        </div>

        {/* Soft Left Scrim to Keep Copy Sharp */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-white/95 via-white/75 to-transparent pointer-events-none"
        />

        <h3 className="text-xl font-semibold text-[#202124] mb-3 group-hover:text-[#4A93C4] transition-colors relative z-10">
          {cat.title}
        </h3>
        <p className="text-[#5f6368] text-sm leading-relaxed relative z-10">
          {cat.desc}
        </p>
        <div className="text-[#4A93C4] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 absolute top-5 right-6 z-10">
          <ArrowUpRight size={18} />
        </div>
      </Link>
    </Motion.div>
  );
};

const CategorySection = () => {
  const gridRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ['start 76px', 'end 364px'],
  });

  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-x-clip">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4A93C4]/5 rounded-l-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-widest mb-4 block">
                Quality Control Expert
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
                Clean Room & <br /> 
                <span className="text-[#4A93C4]">Industrial Engineering.</span>
              </h2>
            </div>
            <p className="text-[#5f6368] text-lg max-w-sm">
              Serving pharmaceuticals, nutraceuticals, and medical device industries with high-quality engineering and manufacturing services since 2016.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-6 pb-4 md:pb-0"
          >
            {categories.map((cat, idx) => (
              <CategoryCard
                key={cat.slug}
                cat={cat}
                idx={idx}
                total={categories.length}
                scrollYProgress={scrollYProgress}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

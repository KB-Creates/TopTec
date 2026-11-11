import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { allProducts } from '../data';

const featuredSlugs = [
  'cleanroom-modular-panel',
  'laminar-flow-hood',
  'qc-laboratory-furniture-workstation',
  'hepa-filter',
  'hplc',
  'fume-hood',
  'central-island-laboratory-workbench',
  'cleanroom-electronic-door-interlock-system',
  'hepa-housing-box',
  'thermostatic-water-bath-dk98-iia',
  'pass-boxes',
  'stainless-steel-3-tier-cleanroom-trolley',
];

const products = featuredSlugs
  .map((slug) => allProducts.find((item) => item.slug === slug))
  .filter(Boolean)
  .slice(0, 12);

const ProductCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Featured Machinery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Quality Engineering <br />
              <span className="text-[#4A93C4]">You Can Trust.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-gray-200 text-gray-400 hover:text-[#4A93C4] hover:border-[#4A93C4] hover:bg-gray-50 transition-all cursor-pointer"
              aria-label="Previous products"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-gray-200 text-gray-400 hover:text-[#4A93C4] hover:border-[#4A93C4] hover:bg-gray-50 transition-all cursor-pointer"
              aria-label="Next products"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container - Equal-height grid track matching Category/Subcategory ProductCard sizing */}
        <div 
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[calc(100%-24px)] sm:auto-cols-[calc(50%-16px)] lg:auto-cols-[calc(33.333%-29px)] xl:auto-cols-[calc(22.222%-30px)] gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <ProductCard 
              key={product.slug || product.name} 
              product={product} 
              className="snap-start"
            />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default ProductCarousel;

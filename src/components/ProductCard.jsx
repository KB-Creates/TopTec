import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, className = "" }) => {
  const slug = product.slug || product.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
  
  return (
    <div className={`group bg-white border border-gray-100 rounded-xl sm:rounded-2xl flex flex-col h-full hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden ${className}`}>
      <Link to={`/product/${slug}`} className="cursor-pointer flex flex-col flex-1 h-full">
        {/* Image Container */}
        <div className="relative aspect-square shrink-0 bg-gray-100 overflow-hidden">
          <img 
            src={product.image || "/slider/cleanroom-hall.jpg"} 
            alt={product.name} 
            className="w-full h-full object-cover" 
          />
          {/* <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-[#4A93C4] text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-[#4A93C4]/20 border border-white/20 flex items-center justify-center">
              Premium Grade
            </span>
          </div> */}
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-6 flex flex-col grow">
          <div className="mb-2.5 sm:mb-4">
            <h3 className="text-[12px] sm:text-[14px] leading-snug font-bold text-[#202124] mb-1 sm:mb-2 group-hover:text-[#4A93C4] transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed line-clamp-2">
              {product.description || product.specs}
            </p>
          </div>

          <div className="mt-auto pt-3 sm:pt-6 border-t border-gray-50 flex items-center justify-between gap-1.5 sm:gap-4">
            <div className="flex flex-col shrink-0">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                <span className="text-[9px] sm:text-[11px] font-bold text-[#202124] whitespace-nowrap">Available</span>
              </div>
            </div>
            
            <div className="h-7 sm:h-10 px-2.5 sm:px-5 bg-gray-50 text-[#202124] rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-bold group-hover:bg-[#202124] group-hover:text-white transition-all flex items-center gap-1 sm:gap-2 whitespace-nowrap shrink-0">
              View Specs
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

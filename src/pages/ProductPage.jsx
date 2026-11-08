import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Settings, 
  Maximize2,
  Mail
} from 'lucide-react';

import { getProductBySlug } from '../data';

const ProductPage = () => {
  const { slug } = useParams();
  
  const product = getProductBySlug(slug) || {
    name: slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Premium Equipment',
    category: 'Technical Solutions',
    description: 'High-performance pharmaceutical grade equipment designed for precision, durability, and compliance with global standards.',
    image: '/slider/cleanroom-hall.jpg',
    features: [
      'Full GMP Compliance',
      'Stainless Steel Grade 316L',
      'Precision Engineered Components',
      'Integrated Control Systems',
      'Energy Efficient Operation'
    ],
    specs: {
      'Material': 'SS 316L / SS 304',
      'Compliance': 'GMP / FDA / WHO',
      'Warranty': '24 Months',
      'Service': '24/7 Global Support',
      'Origin': 'Technologically Advanced'
    }
  };

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Premium Header/Nav Spacer */}
      <div className="h-24 sm:h-32"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Breadcrumbs & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <Link 
            to={-1} 
            className="flex items-center gap-2 text-sm font-bold text-[#5f6368] hover:text-[#4A93C4] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Catalog
          </Link>
        </div>

        {/* Hero Product Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Product Image Display */}
          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-[#F8F9FA] shadow-2xl shadow-gray-200/50 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto aspect-square object-cover"
              />
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#202124] shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 size={20} />
              </button>
            </div>
            
            {/* Aesthetic Underlay */}
            <div className="absolute -inset-4 bg-linear-to-br from-[#4A93C4]/10 to-transparent z-0 rounded-[3rem] blur-2xl opacity-50"></div>
          </div>

          {/* Right: Product Basic Info & CTA */}
          <div className="flex flex-col">            
            <h1 className="text-[16px] md:text-[20px] lg:text-[25px] font-bold text-[#202124] mb-4 leading-tight tracking-tight">
              {product.name}
            </h1>
            
            <p className="text-[14px] lg:text-[16px] text-[#5f6368] leading-relaxed mb-6 font-light italic border-l-4 border-[#4A93C4]/20 pl-6">
              "{product.description}"
            </p>

            <div>
              <a 
                href={`mailto:caretoptec@gmail.com?subject=${encodeURIComponent(`Quote Request: ${product.name}`)}`} 
                className="h-14 sm:h-11 px-6 sm:px-8 bg-[#202124] text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-[#4A93C4] transition-all duration-500 shadow-xl shadow-gray-200 hover:shadow-[#4A93C4]/30 active:scale-95 flex items-center justify-center gap-3 group text-sm sm:text-base cursor-pointer w-fit"
              >
                <Mail size={18} />
                Request a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Performance & Overview Section */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">Product Details</h2>
            <div className="h-px bg-gray-100 grow mx-4 sm:mx-8 hidden sm:block"></div>
          </div>

          {/* Product Key Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-8 max-w-4xl space-y-2">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#202124] leading-relaxed">
                  <span className="text-[#4A93C4] font-bold text-lg leading-tight shrink-0">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Product Specifications Table */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="mb-10 max-w-4xl overflow-hidden rounded-xl border border-gray-100 shadow-xs">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <tr 
                      key={key} 
                      className={i % 2 === 0 ? "bg-[#F7F7F8]" : "bg-white"}
                    >
                      <td className="py-3 px-5 text-xs sm:text-sm font-medium text-[#5f6368] w-2/5 border-b border-gray-100/60 align-top">
                        {key} :
                      </td>
                      <td className="py-3 px-5 text-xs sm:text-sm font-semibold text-[#202124] border-b border-gray-100/60 whitespace-pre-line">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Technical / Model Sizing Specifications Table */}
          {product.technicalTable && product.technicalTable.headers && (
            <div className="mb-12 max-w-4xl">
              <h3 className="text-base sm:text-lg font-bold text-[#202124] mb-3">Model Specifications</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#4A93C4] text-white">
                      {product.technicalTable.headers.map((header, i) => (
                        <th key={i} className="py-3 px-4 font-semibold text-xs whitespace-nowrap">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.technicalTable.rows.map((row, i) => (
                      <tr 
                        key={i} 
                        className={i % 2 === 0 ? "bg-white" : "bg-[#F7F7F8]"}
                      >
                        {row.map((cell, j) => (
                          <td key={j} className="py-3 px-4 text-[#202124] border-b border-gray-100/60 whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}     
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

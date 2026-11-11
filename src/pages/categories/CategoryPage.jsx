import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Microscope, ArrowRight, Building2, LayoutGrid, Mail } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

const CategoryPage = ({ 
  title, 
  description, 
  icon, 
  image, 
  subcategories = [], 
  products = []
}) => {
  const PRODUCTS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [title]);

  return (
    <div className="min-h-screen bg-white selection:bg-[#4A93C4]/20">
      {/* Ultra-Premium Hero Section */}
      <section className="relative pt-24 pb-8 sm:pt-26 md:pt-28 md:pb-10 lg:pt-32 lg:pb-10 overflow-hidden">
        {/* Advanced Background System */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-[#F8F9FA] to-white"></div>
          <div className="absolute top-[-20%] left-0 w-full sm:w-250 h-150 bg-linear-to-r from-[#4A93C4]/10 to-transparent rounded-full blur-[120px] opacity-60"></div>
          
          {/* Animated Background Shapes */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 sm:top-40 left-[5%] sm:left-[10%] w-32 sm:w-64 h-32 sm:h-64 bg-[#4A93C4]/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 sm:top-60 right-[5%] sm:right-[15%] w-40 sm:w-80 h-40 sm:h-80 bg-[#4A93C4]/5 rounded-full blur-3xl"
          ></motion.div>
          
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#202124 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start">

              <div className="max-w-xl w-full">
                <div className="mb-6 sm:mb-8">
                  <h1 
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#202124] tracking-[-0.04em] leading-[1.1]"
                  >
                    {title.split(' ').map((word, i) => (
                      <span key={i} className={i === 1 ? "text-[#4A93C4]" : ""}>
                         {word}{' '}
                      </span>
                    ))}
                  </h1>
                </div>
                
                <p className="text-[#5f6368] text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-10 font-light whitespace-pre-line">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
                  <a 
                    href="mailto:caretoptec@gmail.com" 
                    className="h-8 sm:h-11 px-4 sm:px-6 bg-[#202124] text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-[#4A93C4] transition-all duration-500 shadow-xl shadow-gray-200 hover:shadow-[#4A93C4]/30 active:scale-95 flex items-center justify-center gap-3 group text-sm sm:text-base cursor-pointer"
                  >
                    <Mail size={18} />
                    Request Quotation
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Category Image */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative z-10 rounded-4xl sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#4A93C4]/20 border-4 sm:border-8 border-white bg-linear-to-b from-[#8ebfed] via-[#c2daf2] to-[#edf3fa] flex items-center justify-center">
                {image ? (
                  <img 
                    src={image} 
                    alt={title} 
                    className={`w-full h-auto ${typeof image === 'string' && image.endsWith('.png') ? 'object-contain p-2 sm:p-4' : 'object-cover'} aspect-4/3`} 
                  />
                ) : (
                  <div className="bg-linear-to-br from-gray-50 to-gray-100 aspect-4/3 flex items-center justify-center">
                    {React.cloneElement(icon, { size: 80, className: "text-gray-200/50 sm:hidden" })}
                    {React.cloneElement(icon, { size: 120, className: "text-gray-200/50 hidden sm:block" })}
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-[#202124]/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#4A93C4]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#4A93C4]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Content with Premium Grid */}
      <section className="pt-4 pb-16 md:pt-6 md:pb-24 lg:pt-6 lg:pb-28 bg-white relative">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Products & Subcats */}
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
              <div>
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#202124]">Products</h2>
                  <div className="h-px bg-gray-100 grow mx-4 sm:mx-8 hidden sm:block"></div>
                </div>
                
                {products.length > 0 ? (
                  <>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                      {currentProducts.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                      ))}
                    </div>
                  {totalPages > 1 && (
                    <div className="mt-8 sm:mt-12 flex justify-center items-center gap-2">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentPage(index + 1);
                            window.scrollTo({ top: 400, behavior: 'smooth' });
                          }}
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl font-bold flex items-center justify-center transition-all ${
                            currentPage === index + 1 
                              ? 'bg-[#4A93C4] text-white shadow-lg shadow-[#4A93C4]/30' 
                              : 'bg-white text-gray-500 border border-gray-100 hover:border-[#4A93C4] hover:text-[#4A93C4]'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  )}
                  </>
                ) : (
                  <div className="bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-4xl sm:rounded-[3rem] p-8 sm:p-20 flex flex-col items-center justify-center text-center shadow-sm group hover:shadow-xl hover:shadow-[#4A93C4]/5 transition-all duration-700">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-[#4A93C4] mb-6 sm:mb-8 shadow-inner border border-gray-50 group-hover:scale-110 transition-transform">
                      <Zap size={32} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#202124] mb-3 sm:mb-4">Portfolio Update in Progress</h3>
                    <p className="text-gray-500 max-w-md text-base sm:text-lg leading-relaxed">
                      We are currently digitizing our latest collection of pharmaceutical-grade equipment. Please contact us for the immediate technical specifications of our full range.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Info */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="sticky top-24 space-y-8 lg:space-y-10">
                <div className="bg-[#202124] rounded-4xl sm:rounded-[2.5rem] p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl shadow-gray-400">
                  <div className="absolute top-10 right-10 w-20 h-20 bg-[#4A93C4] rounded-full blur-[60px] opacity-30 animate-pulse"></div>
                  <h3 className="text-2xl sm:text-[28px] font-bold mb-6 sm:mb-8 leading-tight uppercase">Our Expertise</h3>
                  <div className="space-y-6 sm:space-y-8">
                    {[
                      { icon: <Building2 size={24} />, title: "Cleanroom Innovation", desc: "Modular designs providing absolute environmental control." },
                      { icon: <ShieldCheck size={24} />, title: "Pharma Equipment", desc: "Advanced interlocking technology ensuring zero-contamination." },
                      { icon: <Microscope size={24} />, title: "QC Lab Equipments", desc: "High-precision apparatus for stringent quality control." },
                      { icon: <LayoutGrid size={24} />, title: "Lab Furnitures", desc: "Technical and ergonomic solutions for modern laboratories." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 sm:gap-5 group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-[#4A93C4] shrink-0 group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-500">
                          {React.cloneElement(item.icon, { size: 20, className: "sm:hidden" })}
                          {React.cloneElement(item.icon, { size: 24, className: "hidden sm:block" })}
                        </div>
                        <div>
                          <h4 className="font-bold text-base sm:text-lg mb-1 leading-tight">{item.title}</h4>
                          <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 sm:mt-12">
                    <Link to="/contact" className="w-full h-11 bg-[#4A93C4] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3b7ba8] transition-all text-sm sm:text-base">
                      Custom Application Quote
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CategoryPage;

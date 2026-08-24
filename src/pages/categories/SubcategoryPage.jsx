import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Layers, Mail, MessageSquare, ShieldCheck, Building2, Microscope, LayoutGrid, Zap, Filter } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import { getSubcategoryData, subcategoriesRegistry } from '../../data/subcategoriesData';
import { getProductsBySubcategory } from '../../data/index';

const SubcategoryPage = () => {
  const location = useLocation();
  const params = useParams();
  
  // Resolve pathname or dynamic parameters
  const currentPath = location.pathname;
  const subcategoryInfo = getSubcategoryData(currentPath);

  const {
    title = 'Subcategory',
    parentCategory = 'Category',
    parentCategorySlug = '',
    description = '',
    children = []
  } = subcategoryInfo || {};

  // Fetch products matching this subcategory
  const products = getProductsBySubcategory(subcategoryInfo);

  // Get sibling subcategories under the same parent category
  const siblingSubcategories = Object.entries(subcategoriesRegistry)
    .filter(([path, data]) => data.parentCategory === parentCategory && path !== currentPath)
    .map(([path, data]) => ({ name: data.title, href: path }));

  const PRODUCTS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${title} | TopTec Cleanroom & Lab Equipment`;
  }, [currentPath, title]);

  return (
    <div className="min-h-screen bg-white selection:bg-[#4A93C4]/20">
      {/* Hero Section */}
      <section className="relative pt-42 pb-16 md:pt-32 md:pb-24 lg:pt-42 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-[#F8F9FA] to-white"></div>
          <div className="absolute top-[-20%] left-0 w-full sm:w-250 h-150 bg-linear-to-r from-[#4A93C4]/10 to-transparent rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-100 to-transparent"></div>
          
          <motion.div 
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] w-64 h-64 bg-[#4A93C4]/5 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-[15%] w-80 h-80 bg-[#4A93C4]/5 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#202124 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#5f6368] mb-6 sm:mb-10 bg-white/60 backdrop-blur-sm px-4 sm:px-6 py-2.5 rounded-full border border-gray-100 shadow-xs w-fit box-border max-w-full">
              <Link to="/" className="hover:text-[#4A93C4] transition-colors shrink-0">Home</Link>
              <ChevronRight size={10} className="text-gray-300 shrink-0" />
              <Link to="/categories/air-filters" className="hover:text-[#4A93C4] transition-colors shrink-0">Categories</Link>
              <ChevronRight size={10} className="text-gray-300 shrink-0" />
              {parentCategorySlug ? (
                <Link to={`/categories/${parentCategorySlug}`} className="hover:text-[#4A93C4] transition-colors shrink-0">{parentCategory}</Link>
              ) : (
                <span className="text-gray-400 shrink-0">{parentCategory}</span>
              )}
              <ChevronRight size={10} className="text-gray-300 shrink-0" />
              <span className="text-[#4A93C4] truncate max-w-35 sm:max-w-none">{title}</span>
            </div>

            {/* Title & Badge */}
            <div className="flex flex-col gap-4 mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4A93C4]/10 text-[#4A93C4] text-xs font-bold uppercase tracking-wider w-fit">
                <Filter size={14} />
                <span>Specialized Subcategory</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#202124] tracking-[-0.03em] leading-[1.15]">
                {title}
              </h1>
            </div>

            <p className="text-[#5f6368] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 font-light">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="mailto:caretoptec@gmail.com" 
                className="h-14 sm:h-16 px-8 bg-[#202124] text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-[#4A93C4] transition-all duration-500 shadow-xl shadow-gray-200 hover:shadow-[#4A93C4]/30 active:scale-95 flex items-center justify-center gap-3 group text-sm sm:text-base cursor-pointer"
              >
                <Mail size={18} />
                Request Specification & Quote
              </a>
              <Link 
                to="/contact" 
                className="h-14 sm:h-16 px-8 bg-white text-[#202124] border border-gray-200 rounded-xl sm:rounded-2xl font-semibold hover:border-[#4A93C4] hover:text-[#4A93C4] transition-all duration-500 active:scale-95 flex items-center justify-center gap-3 text-sm sm:text-base"
              >
                <MessageSquare size={18} />
                Consult Our Technical Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Products & Nested Subcategories */}
            <div className="lg:col-span-8 flex flex-col gap-14 md:gap-20">
              
              {/* Nested Sub-subcategories (if any, e.g. for tablet machines or chromatography) */}
              {children.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#202124]">Sub-Category Sections</h2>
                    <div className="h-px bg-gray-100 grow mx-6 hidden sm:block"></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {children.map((child, idx) => (
                      <Link 
                        key={idx}
                        to={child.href}
                        className="group p-6 bg-gray-50/70 border border-gray-100 rounded-2xl hover:border-[#4A93C4]/30 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#4A93C4] shadow-xs group-hover:bg-[#4A93C4] group-hover:text-white transition-colors">
                            <Layers size={18} />
                          </div>
                          <span className="font-bold text-[#202124] text-sm sm:text-base group-hover:text-[#4A93C4] transition-colors">{child.name}</span>
                        </div>
                        <ArrowRight size={18} className="text-gray-400 group-hover:text-[#4A93C4] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Section */}
              <div>
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#202124]">Available Products</h2>
                  <div className="h-px bg-gray-100 grow mx-4 sm:mx-8 hidden sm:block"></div>
                  <span className="text-[#4A93C4] font-bold text-xs sm:text-sm tracking-widest uppercase">{products.length} Items</span>
                </div>

                {products.length > 0 ? (
                  <>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                      {currentProducts.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                      ))}
                    </div>
                    {totalPages > 1 && (
                      <div className="mt-10 sm:mt-14 flex justify-center items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrentPage(index + 1);
                              window.scrollTo({ top: 350, behavior: 'smooth' });
                            }}
                            className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center transition-all cursor-pointer ${
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
                  <div className="bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 sm:p-16 flex flex-col items-center justify-center text-center shadow-xs">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#4A93C4] mb-6 shadow-inner border border-gray-100">
                      <Zap size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#202124] mb-3">Custom Technical Solutions Available</h3>
                    <p className="text-gray-500 max-w-md text-sm sm:text-base leading-relaxed mb-6">
                      Detailed product data sheets for this subcategory are available directly upon request. Our technical team delivers custom engineered solutions.
                    </p>
                    <a 
                      href="mailto:caretoptec@gmail.com" 
                      className="px-6 py-3 bg-[#4A93C4] text-white rounded-xl text-sm font-semibold hover:bg-[#3b7ba8] transition-colors inline-flex items-center gap-2"
                    >
                      Inquire Directly
                      <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </div>

              {/* Sibling Subcategories */}
              {siblingSubcategories.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#202124]">Related in {parentCategory}</h2>
                    <div className="h-px bg-gray-100 grow mx-6 hidden sm:block"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {siblingSubcategories.map((sub, i) => (
                      <Link 
                        key={i} 
                        to={sub.href}
                        className="px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-xs sm:text-sm font-semibold text-gray-700 hover:bg-[#4A93C4] hover:text-white hover:border-[#4A93C4] transition-all duration-300 shadow-xs"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Sticky Sidebar Info */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="sticky top-28 space-y-8">
                
                {/* Expertise Box */}
                <div className="bg-[#202124] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-gray-400">
                  <div className="absolute top-10 right-10 w-20 h-20 bg-[#4A93C4] rounded-full blur-[60px] opacity-30 animate-pulse"></div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 leading-tight uppercase">TopTec Assurance</h3>
                  <div className="space-y-6">
                    {[
                      { icon: <ShieldCheck size={20} />, title: "GMP & ISO Certified", desc: "Designed strictly to meet global pharma compliance standards." },
                      { icon: <Building2 size={20} />, title: "Turnkey Integration", desc: "Seamless compatibility with cleanroom wall & HVAC systems." },
                      { icon: <Microscope size={20} />, title: "Precision Tested", desc: "Rigorous factory acceptance testing (FAT) before dispatch." },
                      { icon: <LayoutGrid size={20} />, title: "Custom Specs", desc: "Custom dimensions and metallurgy engineered to client specs." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#4A93C4] shrink-0 group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base mb-1 leading-tight">{item.title}</h4>
                          <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <Link to="/contact" className="w-full h-12 bg-[#4A93C4] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3b7ba8] transition-all text-sm">
                      Get Expert Advice
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Return to Category Box */}
                {parentCategorySlug && (
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Parent Category</span>
                    <h4 className="text-lg font-bold text-[#202124]">{parentCategory}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Explore the full inventory, specs, and cleanroom applications across the entire {parentCategory} catalog.
                    </p>
                    <Link 
                      to={`/categories/${parentCategorySlug}`} 
                      className="mt-2 text-xs font-bold uppercase tracking-wider text-[#4A93C4] hover:underline flex items-center gap-1"
                    >
                      View All {parentCategory} Products
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SubcategoryPage;

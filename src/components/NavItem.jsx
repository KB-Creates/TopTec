import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const DropdownItem = ({ item, isCompact = false, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [flipLeft, setFlipLeft] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const itemRef = useRef(null);

  const hasSub = item.subcategories && item.subcategories.length > 0;
  const subCount = item.subcategories?.length || 0;
  const isNestedMultiCol = subCount >= 9;

  const handleMouseEnter = () => {
    if (hasSub && itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const flyoutWidth = isNestedMultiCol ? 500 : 256;
      const estRows = isNestedMultiCol ? Math.ceil(subCount / 2) : subCount;
      const estHeight = Math.min(estRows * 42 + 24, window.innerHeight - 130);
      setFlipLeft(rect.right + flyoutWidth > window.innerWidth - 16);
      setOpenUpward(rect.top + estHeight > window.innerHeight - 16);
    }
    setIsHovered(true);
  };

  return (
    <div
      ref={itemRef}
      className={`relative ${isCompact ? 'h-full' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={item.href}
        onClick={onSelect}
        className={`flex items-center justify-between text-[13px] text-[#3c4043] hover:text-[#4A93C4] transition-colors group uppercase font-medium ${
          isCompact
            ? 'h-full px-3.5 py-2.5 rounded-lg border border-gray-100 hover:border-[#4A93C4]/40 hover:bg-[#4A93C4]/5'
            : 'px-4 py-2.5 hover:bg-gray-50'
        }`}
      >
        <span className="flex-1 mr-2">{item.name}</span>
        {hasSub && (
          <ChevronRight size={14} className="text-gray-400 group-hover:text-[#4A93C4] shrink-0" />
        )}
      </Link>

      <AnimatePresence>
        {hasSub && isHovered && (
          <motion.div
            initial={{ opacity: 0, x: flipLeft ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: flipLeft ? 10 : -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute z-50 ${openUpward ? 'bottom-0' : 'top-0'} ${
              flipLeft ? 'right-full pr-1' : 'left-full pl-1'
            } ${isNestedMultiCol ? 'w-[500px] max-w-[calc(100vw-2rem)]' : 'w-64'}`}
          >
            <div
              className={`bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] border border-gray-100 max-h-[calc(100vh-130px)] overflow-y-auto ${
                isNestedMultiCol ? 'p-3 grid grid-cols-2 gap-2' : 'py-2'
              }`}
            >
              {item.subcategories.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.href}
                  onClick={onSelect}
                  className={`flex items-center justify-between text-[13px] text-[#3c4043] hover:text-[#4A93C4] transition-colors uppercase font-medium ${
                    isNestedMultiCol
                      ? 'h-full px-3.5 py-2.5 rounded-lg border border-gray-100 hover:border-[#4A93C4]/40 hover:bg-[#4A93C4]/5'
                      : 'px-4 py-2.5 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex-1">{sub.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const containerRef = useRef(null);

  const hasSubcategories = item.subcategories && item.subcategories.length > 0;
  const subCount = item.subcategories?.length || 0;
  const hasNestedChildren = item.subcategories?.some(
    (sub) => sub.subcategories && sub.subcategories.length > 0
  );
  const isMultiCol = !hasNestedChildren && subCount >= 9;

  const handleMouseEnter = () => {
    if (hasSubcategories && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      let menuWidth = 256;
      if (isMultiCol) {
        menuWidth = subCount >= 16 ? (window.innerWidth >= 1280 ? 800 : 580) : 560;
      }
      setAlignRight(rect.left + menuWidth > window.innerWidth - 16);
    }
    setIsOpen(true);
  };

  const widthClass = !isMultiCol
    ? 'w-64'
    : subCount >= 16
      ? 'w-[580px] xl:w-[800px] max-w-[calc(100vw-2rem)]'
      : 'w-[560px] max-w-[calc(100vw-2rem)]';

  const panelClass = !isMultiCol
    ? 'py-2'
    : subCount >= 16
      ? 'p-3 grid grid-cols-2 xl:grid-cols-3 gap-2'
      : 'p-3 grid grid-cols-2 gap-2';

  const scrollClass = hasNestedChildren ? '' : 'max-h-[calc(100vh-130px)] overflow-y-auto';

  return (
    <div 
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsOpen(false)}
    >
      {item.href.startsWith('/') && !item.href.includes('#') ? (
        <Link 
          to={item.href}
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-1 px-2.5 py-2 cursor-pointer text-[13px] font-medium uppercase transition-all tracking-wide outline-none whitespace-nowrap ${
            isOpen ? 'text-[#4A93C4]' : 'text-[#3c4043] hover:text-[#4A93C4]'
          }`}
        >
          {item.name}
          {hasSubcategories && (
            <ChevronDown 
              size={12} 
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#4A93C4]' : ''}`} 
            />
          )}
        </Link>
      ) : (
        <a 
          href={item.href}
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-1 px-2.5 py-2 cursor-pointer text-[13px] font-medium uppercase transition-all tracking-wide outline-none whitespace-nowrap ${
            isOpen ? 'text-[#4A93C4]' : 'text-[#3c4043] hover:text-[#4A93C4]'
          }`}
        >
          {item.name}
          {hasSubcategories && (
            <ChevronDown 
              size={12} 
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#4A93C4]' : ''}`} 
            />
          )}
        </a>
      )}

      <AnimatePresence>
        {hasSubcategories && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-full pt-2 z-50 ${alignRight ? 'right-0' : 'left-0'} ${widthClass}`}
          >
            <div className={`bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-gray-100 ${panelClass} ${scrollClass}`}>
              {item.subcategories.map((sub, idx) => (
                <DropdownItem
                  key={idx}
                  item={sub}
                  isCompact={isMultiCol}
                  onSelect={() => setIsOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavItem;

import { airFiltersProducts } from './air-filters';
import { airCleaningProducts } from './air-cleaning';
import { hvacSystemsProducts } from './hvac-systems';
import { laboratoryEquipmentProducts } from './laboratory-equipment';
import { laboratoryFurnitureProducts } from './laboratory-furniture';
import { productionMachineryProducts } from './production-machinery';
import { sterileProcessingProducts } from './sterile-processing';

export const allProducts = [
  ...airFiltersProducts,
  ...airCleaningProducts,
  ...hvacSystemsProducts,
  ...laboratoryEquipmentProducts,
  ...laboratoryFurnitureProducts,
  ...productionMachineryProducts,
  ...sterileProcessingProducts
];

// Helper to get products by category
export const getProductsByCategory = (categoryName) => {
  if (!categoryName) return allProducts;
  return allProducts.filter(p => p.category && p.category.toLowerCase().includes(categoryName.toLowerCase()));
};

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return allProducts.find(p => p.slug === slug);
};

// Helper to filter products for a subcategory by keywords and parent category
export const getProductsBySubcategory = (subcategoryInfo) => {
  if (!subcategoryInfo) return allProducts;
  
  const { parentCategory, keywords = [], path = '' } = subcategoryInfo;
  
  // Filter products by parent category first if available
  let categoryProducts = allProducts;
  if (parentCategory) {
    const matching = getProductsByCategory(parentCategory);
    if (matching.length > 0) {
      categoryProducts = matching;
    }
  }

  // 1. If products explicitly match this subcategory by subcategorySlug or subcategory title, prioritize exact matches
  if (path) {
    const exactMatches = categoryProducts.filter(p => 
      p.subcategorySlug === path || 
      (p.subcategorySlug && path.startsWith(p.subcategorySlug)) ||
      (p.subcategory && subcategoryInfo.title && p.subcategory.toLowerCase() === subcategoryInfo.title.toLowerCase())
    );
    if (exactMatches.length > 0) {
      return exactMatches;
    }
  }

  if (keywords.length === 0) return categoryProducts;

  // Filter products that match any of the keywords in name, slug, or features,
  // excluding products assigned to a different subcategory
  const matchedProducts = categoryProducts.filter(product => {
    if (path && product.subcategorySlug && product.subcategorySlug !== path && !path.startsWith(product.subcategorySlug)) {
      return false;
    }
    const textToSearch = `${product.name} ${product.slug} ${product.description || ''} ${(product.features || []).join(' ')}`.toLowerCase();
    return keywords.some(kw => textToSearch.includes(kw.toLowerCase()));
  });

  // If keyword filter matched specific products, return them; otherwise fallback to category products
  return matchedProducts.length > 0 ? matchedProducts : categoryProducts;
};


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
  
  const { parentCategory, keywords = [] } = subcategoryInfo;
  
  // Filter products by parent category first if available
  let categoryProducts = allProducts;
  if (parentCategory) {
    const matching = getProductsByCategory(parentCategory);
    if (matching.length > 0) {
      categoryProducts = matching;
    }
  }

  if (keywords.length === 0) return categoryProducts;

  // Filter products that match any of the keywords in name, slug, or features
  const matchedProducts = categoryProducts.filter(product => {
    const textToSearch = `${product.name} ${product.slug} ${product.description || ''} ${(product.features || []).join(' ')}`.toLowerCase();
    return keywords.some(kw => textToSearch.includes(kw.toLowerCase()));
  });

  // If keyword filter matched specific products, return them; otherwise fallback to category products
  return matchedProducts.length > 0 ? matchedProducts : categoryProducts;
};


export interface Product {
  id: number;
  slug: string;
  name: string;
  brand: string;
  shortDescription: string;
  description: string;
  price: number;
  comparePrice?: number;
  rating: number;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
  category: Category;
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  volume?: string;
}

export type Category = 'shaving' | 'beard' | 'skincare' | 'hair' | 'sets';

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'shaving', label: 'Shaving' },
  { id: 'beard', label: 'Beard Care' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'hair', label: 'Hair Care' },
  { id: 'sets', label: 'Gift Sets' },
];

export const products: Product[] = [
  {
    id: 1,
    slug: 'proraso-eucalyptus-pre-shave',
    name: 'Eucalyptus Pre-Shave Cream',
    brand: 'Proraso',
    shortDescription: 'Refreshing pre-shave with eucalyptus & menthol',
    description: 'A classic Italian formula that opens pores, softens stubble, and creates the perfect base for a close, comfortable shave. Eucalyptus oil and menthol provide a refreshing, cooling sensation.',
    price: 250,
    comparePrice: 320,
    rating: 4.8,
    reviewCount: 142,
    imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/Proraso/jpg/shave/krem-do-britjya-proraso-pre-shave-cream-refreshing-eucalyptus-100-ml-zarva-1-600x600.webp',
    imageAlt: 'Proraso Eucalyptus Pre-Shave Cream 100ml',
    category: 'shaving',
    tags: ['pre-shave', 'eucalyptus', 'refreshing'],
    isBestSeller: true,
    inStock: true,
    volume: '100 ml',
  },
  {
    id: 2,
    slug: 'proraso-nourish-pre-shave',
    name: 'Nourishing Pre-Shave Cream',
    brand: 'Proraso',
    shortDescription: 'For tough stubble — oat & green tea formula',
    description: 'Specially designed for thick, coarse beards. Oatmeal extract and green tea nourish and condition even the most challenging bristles for an effortless, irritation-free shave.',
    price: 285,
    rating: 4.6,
    reviewCount: 89,
    imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/Proraso/jpg/shave/krem-do-britya-dlya-jestkoi-schetini-proraso-nourish-new-zarva-1-600x600.webp',
    imageAlt: 'Proraso Nourishing Pre-Shave Cream',
    category: 'shaving',
    tags: ['pre-shave', 'nourishing', 'coarse-beard'],
    inStock: true,
    volume: '100 ml',
  },
  {
    id: 3,
    slug: 'proraso-sensitive-pre-shave',
    name: 'Anti-Irritation Pre-Shave',
    brand: 'Proraso',
    shortDescription: 'White line — for sensitive skin',
    description: 'The White Line is Proraso\'s answer to sensitive skin. Aloe vera and green tea minimize redness and razor burn, making every shave a pleasure.',
    price: 285,
    rating: 4.7,
    reviewCount: 211,
    imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/Proraso/jpg/shave/krem-do-holinnya-chutlyvoyi-shkiry-proraso-white-line-anti-irritation-100-ml-zarva-1-600x600.webp',
    imageAlt: 'Proraso White Line Anti-Irritation Pre-Shave',
    category: 'shaving',
    tags: ['sensitive', 'aloe-vera', 'anti-irritation'],
    inStock: true,
    volume: '100 ml',
    isNew: true,
  },
  {
    id: 4,
    slug: 'american-crew-shave-oil',
    name: 'Ultra Gliding Shave Oil',
    brand: 'American Crew',
    shortDescription: 'Precision blade glide — 50ml concentrate',
    description: 'A few drops is all it takes. This ultra-concentrated shave oil creates an invisible barrier between blade and skin, delivering a surgically close shave without nicks or irritation.',
    price: 770,
    comparePrice: 920,
    rating: 4.9,
    reviewCount: 376,
    imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/american_crew/beard-shave/maslo-do-britya-american-crew-ultra-gliding-shave-oil-50-ml-zarva-600x600.webp',
    imageAlt: 'American Crew Ultra Gliding Shave Oil 50ml',
    category: 'shaving',
    tags: ['shave-oil', 'precision', 'close-shave'],
    isBestSeller: true,
    inStock: true,
    volume: '50 ml',
  },
  {
    id: 5,
    slug: 'ginger-pink-beard-set',
    name: 'Beard Care Gift Set',
    brand: 'Barbers',
    shortDescription: 'Ginger & Pink Pepper — complete beard ritual',
    description: 'The ultimate beard care collection featuring beard oil, balm, and shampoo infused with warm ginger and pink pepper. Perfect for gifting or treating yourself to a complete grooming ritual.',
    price: 698,
    comparePrice: 890,
    rating: 4.8,
    reviewCount: 94,
    imageSrc: 'https://barbers.ua/content/images/10/892x891l80mc0/podarunkovyi-nabir-dlia-dohliadu-za-borodoiu-ginger-pink-papper-barbers-59908245283958.webp',
    imageAlt: 'Ginger & Pink Pepper Beard Care Gift Set',
    category: 'sets',
    tags: ['gift-set', 'beard', 'ginger'],
    isBestSeller: true,
    inStock: true,
    isNew: true,
  },
  {
    id: 6,
    slug: 'bluebeards-pre-shave-oil',
    name: 'Pre-Shave Oil',
    brand: 'The Bluebeards Revenge',
    shortDescription: 'Barber-grade pre-shave oil — 100ml',
    description: 'Trusted by professional barbers worldwide. This rich pre-shave oil conditions facial hair and skin, ensuring the smoothest, most comfortable shave imaginable.',
    price: 540,
    rating: 4.5,
    reviewCount: 67,
    imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/BBR/jpg/shave/maslo-do-britya-the-bluebeards-revenge-pre-shave-oil-100-ml-zarva-1-600x600.webp',
    imageAlt: 'The Bluebeards Revenge Pre-Shave Oil 100ml',
    category: 'shaving',
    tags: ['pre-shave', 'barber-grade', 'professional'],
    inStock: true,
    volume: '100 ml',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isBestSeller || p.isNew).slice(0, 4);
}

import Link from 'next/link'
import { CATEGORIES } from '../lib/data/products'

const CATEGORY_IMAGES: Record<string, string> = {
  shaving: 'https://zarva.com.ua/image/cachewebp/catalog/Proraso/jpg/shave/krem-do-britjya-proraso-pre-shave-cream-refreshing-eucalyptus-100-ml-zarva-1-600x600.webp',
  beard: 'https://barbers.ua/content/images/10/892x891l80mc0/podarunkovyi-nabir-dlia-dohliadu-za-borodoiu-ginger-pink-papper-barbers-59908245283958.webp',
  skincare: 'https://zarva.com.ua/image/cachewebp/catalog/Proraso/jpg/shave/krem-do-holinnya-chutlyvoyi-shkiry-proraso-white-line-anti-irritation-100-ml-zarva-1-600x600.webp',
  hair: 'https://barbers.ua/content/images/16/50x40l80nn0/56326200899508.webp',
  sets: 'https://barbers.ua/content/images/10/892x891l80mc0/podarunkovyi-nabir-dlia-dohliadu-za-borodoiu-ginger-pink-papper-barbers-59908245283958.webp',
}

export default function CategoryStrip() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Browse by Category</p>
          <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--obsidian)', letterSpacing: '-0.02em' }}>
            Find Your Ritual
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group relative aspect-square overflow-hidden"
              style={{ background: 'var(--obsidian)' }}
            >
              <img
                src={CATEGORY_IMAGES[cat.id]}
                alt={cat.label}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 text-center">
                <span className="font-display text-white font-semibold text-sm leading-tight">{cat.label}</span>
                <span
                  className="mt-1.5 font-mono text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: 'var(--gold)' }}
                >
                  Shop →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

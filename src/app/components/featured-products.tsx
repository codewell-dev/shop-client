import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { getFeaturedProducts } from '../lib/data/products'
import ProductCard from './product-card'

export default function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-24 px-6" style={{ background: 'var(--parchment)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Curated Selection</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-none" style={{ color: 'var(--obsidian)', letterSpacing: '-0.02em' }}>
              Featured<br /><em style={{ fontStyle: 'italic' }}>Products</em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--smoke)' }}>
            Hand-picked by our in-house barbers. Only the best makes it onto this shelf.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <ProductCard product={product} priority={i < 2} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link href="/products" className="btn btn-outline btn-lg group">
            View All Products
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

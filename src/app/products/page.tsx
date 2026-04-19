'use client'

import { useState, useMemo } from 'react'
import { products, CATEGORIES, Category } from '../lib/data/products'
import ProductCard from '../components/product-card'
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all')
  const [sortBy, setSortBy] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category === activeCategory)

    switch (sortBy) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break
      case 'price-desc': list.sort((a, b) => b.price - a.price); break
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break
      default:           list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
    }
    return list
  }, [activeCategory, sortBy])

  return (
    <div style={{ background: 'var(--parchment)', minHeight: '100vh' }}>
      {/* Page hero */}
      <div
        className="relative pt-32 pb-16 px-6 text-center"
        style={{ background: 'var(--obsidian)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://thesalonbarbershop.ch/wp-content/uploads/2023/02/Home_banner_orig.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10">
          <p className="section-label mb-4">The Collection</p>
          <h1
            className="font-display text-white font-bold leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            All Products
          </h1>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {products.length} premium grooming essentials
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`btn btn-sm ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline'}`}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn btn-sm ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none font-mono text-xs tracking-widest uppercase pl-4 pr-10 py-3 border outline-none cursor-pointer"
              style={{
                background: '#fff',
                border: '1px solid var(--mist)',
                color: 'var(--obsidian)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'var(--smoke)' }} />
          </div>
        </div>

        {/* Results count */}
        <p className="font-mono text-xs mb-8" style={{ color: 'var(--ash)', letterSpacing: '0.1em' }}>
          Showing {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          {activeCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === activeCategory)?.label}`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${Math.min(i * 60, 400)}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-display text-4xl mb-4" style={{ color: 'var(--ash)' }}>∅</p>
            <p className="font-mono text-sm" style={{ color: 'var(--smoke)' }}>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

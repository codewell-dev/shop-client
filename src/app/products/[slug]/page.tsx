'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { StarIcon } from '@heroicons/react/20/solid'
import { ShoppingBagIcon, HeartIcon, ArrowLeftIcon, CheckIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { getProductBySlug, products } from '../../lib/data/products'
import ProductCard from '../../components/product-card'

interface Props { params: { slug: string } }

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
  const discount = product.comparePrice
    ? Math.round((1 - product.price / product.comparePrice) * 100)
    : null

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  return (
    <div style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10">
          <Link href="/" className="font-mono text-xs tracking-widest uppercase transition-colors" style={{ color: 'var(--ash)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--obsidian)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--ash)')}
          >Home</Link>
          <span style={{ color: 'var(--mist)' }}>/</span>
          <Link href="/products" className="font-mono text-xs tracking-widest uppercase transition-colors" style={{ color: 'var(--ash)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--obsidian)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--ash)')}
          >Products</Link>
          <span style={{ color: 'var(--mist)' }}>/</span>
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--obsidian)' }}>{product.name}</span>
        </nav>

        {/* Main product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-white overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && <span className="badge badge-new">New Arrival</span>}
              {product.isBestSeller && <span className="badge badge-dark">Bestseller</span>}
              {discount && <span className="badge badge-gold">−{discount}%</span>}
            </div>
            {/* Wishlist */}
            <button
              onClick={() => setWishlisted(!wishlisted)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white shadow-md transition-all hover:scale-110"
              aria-label="Wishlist"
            >
              <HeartIcon
                className="w-5 h-5"
                style={{ color: wishlisted ? '#e00' : 'var(--smoke)', fill: wishlisted ? '#e00' : 'none' }}
              />
            </button>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {/* Brand & category */}
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                {product.brand}
              </p>
              <span className="badge badge-dark" style={{ background: 'var(--cream)', color: 'var(--smoke)' }}>
                {product.category}
              </span>
            </div>

            <h1
              className="font-display font-bold mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--obsidian)', letterSpacing: '-0.02em' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map(n => (
                  <StarIcon key={n} className="w-4 h-4" style={{ color: n <= Math.round(product.rating) ? 'var(--gold)' : 'var(--mist)' }} />
                ))}
              </div>
              <span className="font-mono text-xs" style={{ color: 'var(--smoke)' }}>
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--smoke)', borderBottom: '1px solid var(--mist)', paddingBottom: '2rem' }}>
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-3xl font-bold" style={{ color: 'var(--obsidian)' }}>
                ₴{product.price}
              </span>
              {product.comparePrice && (
                <>
                  <span className="text-base line-through" style={{ color: 'var(--ash)' }}>₴{product.comparePrice}</span>
                  <span className="badge badge-gold">Save ₴{product.comparePrice - product.price}</span>
                </>
              )}
            </div>

            {/* Volume */}
            {product.volume && (
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-xs" style={{ color: 'var(--smoke)' }}>Volume:</span>
                <span className="badge badge-dark">{product.volume}</span>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--smoke)' }}>Qty</span>
              <div className="flex items-center border" style={{ borderColor: 'var(--mist)' }}>
                <button
                  className="qty-btn"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                >−</button>
                <span className="w-10 text-center text-sm font-semibold" style={{ color: 'var(--obsidian)' }}>{qty}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQty(q => q + 1)}
                >+</button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`btn flex-1 ${added ? 'btn-gold' : 'btn-primary'} btn-lg transition-all`}
              >
                {added ? (
                  <><CheckIcon className="w-5 h-5" /> Added to Cart</>
                ) : (
                  <><ShoppingBagIcon className="w-5 h-5" /> Add to Cart</>
                )}
              </button>
              <button className="btn btn-outline btn-lg">
                Buy Now
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t" style={{ borderColor: 'var(--mist)' }}>
              {[
                { icon: TruckIcon, label: 'Free Delivery', sub: 'On orders over ₴1200' },
                { icon: ShieldCheckIcon, label: '30-Day Returns', sub: 'Hassle-free guarantee' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 p-3" style={{ background: 'var(--cream)' }}>
                  <Icon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--obsidian)' }}>{label}</p>
                    <p className="text-xs" style={{ color: 'var(--smoke)' }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section>
            <div className="flex items-center gap-6 mb-10">
              <div>
                <p className="section-label mb-2">You May Also Like</p>
                <h2 className="font-display text-3xl font-bold" style={{ color: 'var(--obsidian)', letterSpacing: '-0.02em' }}>
                  Related Products
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

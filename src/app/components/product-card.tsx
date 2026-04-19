'use client'

import Link from 'next/link'
import { StarIcon } from '@heroicons/react/20/solid'
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline'
import { Product } from '../lib/data/products'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority }: ProductCardProps) {
  const discount = product.comparePrice
    ? Math.round((1 - product.price / product.comparePrice) * 100)
    : null

  return (
    <Link href={`/products/${product.slug}`} className="product-card block group">
      {/* Image area */}
      <div className="card-img aspect-square bg-white">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="badge badge-new">New</span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="badge badge-dark">Bestseller</span>
          )}
          {discount && (
            <span className="badge badge-gold">−{discount}%</span>
          )}
        </div>
        {/* Wishlist */}
        <button
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
          onClick={e => { e.preventDefault(); e.stopPropagation() }}
          aria-label="Add to wishlist"
        >
          <HeartIcon className="w-4 h-4" style={{ color: 'var(--smoke)' }} />
        </button>
        {/* Hover CTA */}
        <div className="card-actions">
          <button
            className="btn btn-gold btn-sm w-full"
            onClick={e => { e.preventDefault(); e.stopPropagation() }}
          >
            <ShoppingBagIcon className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-white border-t" style={{ borderColor: 'var(--mist)' }}>
        <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--ash)' }}>
          {product.brand}
        </p>
        <h3 className="font-display text-sm font-semibold leading-snug mb-2 group-hover:text-gold transition-colors" style={{ color: 'var(--obsidian)' }}>
          {product.name}
          {product.volume && (
            <span className="ml-1 font-body font-normal" style={{ color: 'var(--smoke)', fontSize: '0.7rem' }}>
              {product.volume}
            </span>
          )}
        </h3>
        <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--smoke)' }}>
          {product.shortDescription}
        </p>
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[1,2,3,4,5].map(n => (
              <StarIcon key={n} className="w-3.5 h-3.5" style={{ color: n <= Math.round(product.rating) ? 'var(--gold)' : 'var(--mist)' }} />
            ))}
          </div>
          <span className="font-mono text-xs" style={{ color: 'var(--smoke)' }}>({product.reviewCount})</span>
        </div>
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-display text-base font-bold" style={{ color: 'var(--obsidian)' }}>
            ₴{product.price}
          </span>
          {product.comparePrice && (
            <span className="text-xs line-through" style={{ color: 'var(--ash)' }}>₴{product.comparePrice}</span>
          )}
        </div>
      </div>
    </Link>
  )
}

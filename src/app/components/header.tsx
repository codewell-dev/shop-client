'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { CATEGORIES } from '../lib/data/products'

const NAV_LINKS = [
  { label: 'Shop', href: '/products' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top announcement bar */}
      <div className="marquee-track py-2">
        <div className="marquee-inner">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="flex items-center font-mono text-xs font-semibold tracking-widest uppercase px-12">
              Free shipping on orders over ₴1200
              <span className="mx-10 opacity-40">✦</span>
              Premium Men's Grooming
              <span className="mx-10 opacity-40">✦</span>
              New Arrivals In Stock
              <span className="mx-10 opacity-40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <span style={{ fontFamily: 'var(--font-display)', color: 'var(--obsidian)', fontSize: '0.9rem', fontWeight: 900, letterSpacing: '-0.04em' }}>G</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.08em' }}>
            GROMVAULT
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.16em' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <button className="hidden lg:flex text-white/70 hover:text-white transition-colors" aria-label="Search">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
          <Link href="/login" className="hidden lg:flex text-white/70 hover:text-white transition-colors" aria-label="Account">
            <UserIcon className="w-5 h-5" />
          </Link>
          <Link href="#" className="relative flex text-white/70 hover:text-white transition-colors" aria-label="Cart">
            <ShoppingBagIcon className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold" style={{ background: 'var(--gold)', color: 'var(--obsidian)' }}>
                {cartCount}
              </span>
            )}
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 flex flex-col animate-scale-in" style={{ background: 'var(--carbon)' }}>
            <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <span style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em' }}>GROMVAULT</span>
              <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white">
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <p className="section-label mb-6">Navigation</p>
              <ul className="space-y-1">
                {NAV_LINKS.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-3 text-sm font-medium text-white/80 hover:text-white transition-colors border-b"
                      style={{ borderColor: 'rgba(255,255,255,0.06)', letterSpacing: '0.06em' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="section-label mt-10 mb-6">Categories</p>
              <ul className="space-y-1">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <Link
                      href={`/products?category=${cat.id}`}
                      className="block py-3 text-sm text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="px-6 py-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <Link href="/login" className="btn btn-outline-white w-full justify-center" onClick={() => setMobileOpen(false)}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

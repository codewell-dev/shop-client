'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!bgRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.04)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero-section">
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: 'url(https://thesalonbarbershop.ch/wp-content/uploads/2023/02/Home_banner_orig.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.04)',
        }}
      />
      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Decorative grain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        zIndex: 2,
      }} />

      {/* Content */}
      <div className="hero-content flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-20">
        {/* Eyebrow */}
        <div className="animate-fade-up flex items-center gap-4 mb-8">
          <div className="h-px w-12" style={{ background: 'var(--gold)', opacity: 0.6 }} />
          <span className="section-label">Est. 2024 — Premium Grooming</span>
          <div className="h-px w-12" style={{ background: 'var(--gold)', opacity: 0.6 }} />
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-100 font-display text-white mb-6 leading-none"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em', maxWidth: '900px' }}
        >
          The Art of{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Refined</em>
          <br />Grooming
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up delay-200 text-white/60 mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '520px', fontWeight: 300 }}
        >
          Curated essentials for the modern gentleman. Professional-grade products trusted by master barbers worldwide.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-4">
          <Link href="/products" className="btn btn-gold btn-lg">
            Shop Collection
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link href="#about" className="btn btn-outline-white btn-lg">
            Our Story
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up delay-500 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/40 animate-shimmer" />
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10" style={{ background: 'rgba(13,13,13,0.7)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 divide-x" style={{ divideColor: 'rgba(255,255,255,0.08)' }}>
          {[
            { value: '99%', label: 'Customer Satisfaction' },
            { value: '16+', label: 'Years of Expertise' },
            { value: '50+', label: 'Premium Brands' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6">
              <span className="font-display text-2xl font-bold" style={{ color: 'var(--gold)' }}>{stat.value}</span>
              <span className="font-mono text-white/40 text-xs tracking-widest uppercase mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

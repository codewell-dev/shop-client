'use client'

import { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSent(true) }
  }

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label mb-5">The Inner Circle</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--obsidian)', letterSpacing: '-0.02em' }}>
          Stay in the Know
        </h2>
        <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--smoke)' }}>
          New arrivals, exclusive offers, and expert grooming guides — delivered to your inbox, no spam.
        </p>
        {sent ? (
          <div className="py-4">
            <p className="font-display text-lg" style={{ color: 'var(--gold)' }}>✦ Welcome to the vault.</p>
            <p className="text-sm mt-1" style={{ color: 'var(--smoke)' }}>You're on the list. Expect good things.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1 text-sm py-3.5 px-4 border outline-none"
              style={{ border: '1px solid var(--mist)', fontFamily: 'var(--font-body)', background: '#fff' }}
            />
            <button type="submit" className="btn btn-primary flex items-center gap-2">
              Subscribe
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

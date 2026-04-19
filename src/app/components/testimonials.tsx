const REVIEWS = [
  { name: 'Marcus H.', role: 'Master Barber, Berlin', text: 'Finally a store that curates like a professional would. The Proraso line here is always fresh and the service is exceptional.', rating: 5 },
  { name: 'Dmitri V.', role: 'Grooming Enthusiast', text: 'The American Crew shave oil changed my entire morning routine. Converted from 5-blade razors and never looking back.', rating: 5 },
  { name: 'Oleg T.', role: 'Verified Buyer', text: "The gift set was a hit. My partner said it's the best gift I've ever given. I'll be taking some credit for the curation.", rating: 5 },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1,2,3,4,5].map(n => (
        <span key={n} style={{ color: n <= count ? 'var(--gold)' : 'var(--ash)', fontSize: '0.8rem' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--obsidian)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">What They Say</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
            Trusted by <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Gentlemen</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="p-8 border animate-fade-up"
              style={{
                borderColor: 'rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.03)',
                animationDelay: `${i * 120}ms`,
              }}
            >
              <Stars count={r.rating} />
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300, fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <div className="border-t pt-5" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <p className="font-semibold text-white text-sm">{r.name}</p>
                <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--gold)', opacity: 0.7 }}>{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

export default function BrandStory() {
  return (
    <section id="about" className="py-24" style={{ background: 'var(--carbon)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="img-hover overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/d1468f_e4ad5d6b33034a8bbfabeb03dbb8f86b~mv2.jpg/v1/fill/w_1066,h_920,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d1468f_e4ad5d6b33034a8bbfabeb03dbb8f86b~mv2.jpg"
                  alt="Barber at work"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="mt-12 img-hover overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/d1468f_cbce093fda814374aff78ab26798c2dc~mv2.jpg/v1/fill/w_1326,h_1326,q_90/d1468f_cbce093fda814374aff78ab26798c2dc~mv2.webp"
                  alt="Grooming products"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 left-8 px-6 py-4 shadow-2xl"
              style={{ background: 'var(--gold)', minWidth: '180px' }}
            >
              <p className="font-display text-3xl font-bold" style={{ color: 'var(--obsidian)' }}>16+</p>
              <p className="font-mono text-xs tracking-widest uppercase mt-1" style={{ color: 'rgba(13,13,13,0.65)' }}>Years of Mastery</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="section-label mb-6">Our Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
              Crafted for the<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Discerning Man</em>
            </h2>
            <div className="h-px w-16 mb-8" style={{ background: 'var(--gold)', opacity: 0.4 }} />
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
              GROMVAULT was born from a simple conviction: exceptional grooming is not a luxury — it is a discipline. We scour the globe for formulas refined in the workshops of heritage barbers, trusted by professionals who treat the chair as their canvas.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
              Every product in our collection earns its place on the shelf. No filler, no compromise — only what truly performs.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {[
                { icon: '⚗', label: 'Expert Curation', desc: 'Vetted by pro barbers' },
                { icon: '🌿', label: 'Clean Formulas', desc: 'No harmful fillers' },
                { icon: '✦', label: 'Premium Only', desc: 'Heritage & craft brands' },
              ].map(pillar => (
                <div key={pillar.label}>
                  <div className="text-2xl mb-3">{pillar.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1">{pillar.label}</h4>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

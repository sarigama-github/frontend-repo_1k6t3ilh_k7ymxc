function Mechanism() {
  const options = [
    { name: 'Stiletto 95mm', desc: 'Sculpted titanium core with anti-wobble lock.' },
    { name: 'Block 65mm', desc: 'Stable geometry for city pacing and long days.' },
    { name: 'Platform 105mm', desc: 'Elevated drama with balanced footbed pitch.' },
    { name: 'Kitten 45mm', desc: 'Subtle height, ultra-light, all-day ease.' },
  ]

  const finishes = [
    'Noir Nappa', 'Ivory Patent', 'Blush Suede', 'Midnight Mirror', 'Garnet Croc', 'Sable Velvet'
  ]

  return (
    <section id="mechanism" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs tracking-[0.35em] text-gray-600 uppercase">Patent-Pending System</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">The removable heel, reimagined.</h2>
            <p className="mt-5 text-gray-600 max-w-xl">A discrete bayonet-lock seats the heel into a hardened alloy socket. A micro-release tab—hidden beneath the arch—lets you change heels in seconds. Every component is tested to 50,000 cycles and covered by a lifetime mechanism warranty.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {options.map((o) => (
                <div key={o.name} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <p className="text-sm font-medium text-gray-900">{o.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{o.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-700 font-medium">Upper finishes</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {finishes.map(f => (
                  <span key={f} className="px-3 py-1 rounded-full border border-gray-200 bg-white text-xs text-gray-800">{f}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow ring-1 ring-black/5">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1470&auto=format&fit=crop" alt="Mechanism detail" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-black/5 rounded-2xl p-4 shadow-xl">
              <p className="text-xs text-gray-600">Swap in seconds. No tools. Zero play.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mechanism

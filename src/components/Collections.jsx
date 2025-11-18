function Collections() {
  const items = [
    {
      id: 'everyday',
      title: 'Everyday Wear',
      description: 'Soft leathers, understated tones, and a balanced 65mm option for effortless daily elegance.',
      image: 'https://images.unsplash.com/photo-1543165796-5426273eaab3?q=80&w=1470&auto=format&fit=crop',
      accent: 'from-rose-500 to-pink-500'
    },
    {
      id: 'occasion',
      title: 'Special Occasion',
      description: 'Lustre finishes, mirror metallics and gemstone accents. Switch to 95mm or platform for dramatic lines.',
      image: 'https://images.unsplash.com/photo-1707980332675-aabd691137a6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcGVjaWFsJTIwT2NjYXNpb258ZW58MHwwfHx8MTc2MzUwNTc1M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      accent: 'from-violet-500 to-fuchsia-500'
    },
    {
      id: 'winter',
      title: 'Winter Wear',
      description: 'Lux shearling linings, weather-treated suede and a sculpted block heel for confident footing.',
      image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1470&auto=format&fit=crop',
      accent: 'from-amber-500 to-rose-500'
    }
  ]

  return (
    <section id="collections" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Collections</h2>
            <p className="mt-4 text-gray-600 max-w-2xl">Three worlds. One shoe. Choose your aesthetic, then tailor the heel system to suit your life.</p>
          </div>
          <a href="#gallery" className="hidden md:inline-flex px-5 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-50">View Gallery</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(card => (
            <a key={card.id} href={`#${card.id}`} className="group relative overflow-hidden rounded-3xl bg-white shadow ring-1 ring-black/5">
              <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <div className={`inline-flex mb-3 h-6 rounded-full bg-gradient-to-r ${card.accent} px-3 text-[10px] tracking-widest text-white items-center`}>FEATURED</div>
                <h3 className="text-white text-2xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-white/80 text-sm max-w-sm">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections

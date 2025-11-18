function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-rose-200 blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-violet-200 blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <span className="inline-block text-xs tracking-[0.35em] text-gray-600 uppercase">Convertible Couture</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
              Elevated heels. One silhouette. Endless possibilities.
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-xl">
              Experience the first premium stiletto with a precision-engineered, removable heel system. Transition from everyday poise to evening drama—without changing your shoes.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#collections" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors">Explore Collections</a>
              <a href="#mechanism" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors">How it works</a>
            </div>
            <p className="mt-4 text-xs text-gray-500">Crafted in Italy • Lifetime mechanism warranty</p>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1620&auto=format&fit=crop')] bg-cover bg-center shadow-2xl"></div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl p-4 shadow-xl">
              <p className="text-xs text-gray-600">Shown in: Noir Nappa with 95mm stiletto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

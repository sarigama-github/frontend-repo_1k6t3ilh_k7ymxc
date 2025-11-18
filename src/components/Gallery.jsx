import { useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534432601761-16e3d2f3f17a?q=80&w=1470&auto=format&fit=crop'
]

function Gallery() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Gallery</h2>
            <p className="mt-4 text-gray-600">View the silhouette in different finishes and heel profiles.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="relative rounded-3xl overflow-hidden bg-white shadow ring-1 ring-black/5 aspect-[4/3]">
            <img src={images[current]} alt="Convertible heels" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 w-8 rounded-full transition-all ${i === current ? 'bg-gray-900' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((src, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="group rounded-2xl overflow-hidden bg-white shadow ring-1 ring-black/5 aspect-[4/3]">
                <img src={src} alt="thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

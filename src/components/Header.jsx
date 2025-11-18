import { Menu, ShoppingBag, Search } from "lucide-react"

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-500 via-fuchsia-500 to-violet-600 shadow-lg"></div>
            <span className="text-xl tracking-widest font-semibold text-gray-900">AURÉLIA</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#collections" className="hover:text-gray-900 transition-colors">Collections</a>
            <a href="#mechanism" className="hover:text-gray-900 transition-colors">Mechanism</a>
            <a href="#gallery" className="hover:text-gray-900 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Search size={18} />
              <span className="sr-only">Search</span>
            </button>
            <button className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 h-5 w-5 text-[10px] grid place-items-center rounded-full bg-gray-900 text-white">2</span>
            </button>
            <button className="md:hidden text-gray-700 hover:text-gray-900">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

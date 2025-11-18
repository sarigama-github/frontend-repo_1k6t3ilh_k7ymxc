function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm text-gray-600">AURÉLIA</p>
            <p className="mt-3 text-sm text-gray-500 max-w-xs">Paris–Milan. Modern luxury footwear engineered for real life.</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Customer Care</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Shipping & Returns</li>
              <li>Size Guide</li>
              <li>Care Instructions</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Join the list</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Email address" className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900" />
              <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Aurélia. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Mechanism from './components/Mechanism'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Mechanism />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App

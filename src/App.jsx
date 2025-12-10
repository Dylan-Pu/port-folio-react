import { useState } from 'react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className="min-h-screen bg-gray-950 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Navbar fixe */}
        <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-lg z-50 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Dylan Pu
            </h1>
            <div className="hidden md:flex gap-10 text-lg">
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-cyan-400 transition"
                >
                  {item}
                </a>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-3xl">
              Menu
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-gray-950 border-t border-gray-800">
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-3 px-6 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Hero – exactement comme ton Laravel */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-950 to-cyan-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_70%)]" />

          <div className="relative z-10 text-center px-6">
            <img
              src="https://github.com/Dylan-Pu.png"
              alt="Dylan Pu"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50"
            />
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dylan Pu
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-light mb-6">Développeur Fullstack</p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              React • Laravel • Tailwind • Node.js • Création d'expériences digitales modernes
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition transform"
            >
              Me contacter
            </a>

            <div className="flex justify-center gap-6 mt-12">
              <a href="https://github.com/Dylan-Pu" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition text-2xl">G</a>
              <a href="#" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-2xl">L</a>
              <a href="#" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition text-2xl">T</a>
            </div>
          </div>
        </section>

        {/* À propos (tu pourras compléter plus tard) */}
        <section id="à-propos" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-10">À propos</h2>
            <p className="text-xl text-gray-300">
              Ton texte à propos ici – tu n’as plus qu’à le coller.
            </p>
          </div>
        </section>

        <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
          © 2025 Dylan Pu – Tous droits réservés
        </footer>
      </div>
    </>
  )
}
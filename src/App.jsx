import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, ExternalLink, Send, Download, Hammer } from 'lucide-react';
import { useState } from 'react';

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Projets', path: '/projets' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-blue-dark text-gray-100">
      <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Dylan Putzolu
          </Link>

          <div className="hidden md:flex gap-10">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-cyan-400 transition ${location.pathname === item.path ? 'text-cyan-400' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-6 py-4 hover:bg-gray-800 transition ${location.pathname === item.path ? 'bg-gray-800' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-20">{children}</main>

      <footer className="py-10 text-center bg-black/50 text-gray-400 border-t border-gray-800">
        © 2025 Dylan Putzolu • Fait avec React + Vite + Tailwind
      </footer>
    </div>
  );
}

// Accueil
function Home() {
  return (
    <section className="pt-32 pb-20 px-6 text-center min-h-screen flex items-center justify-center">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 whitespace-nowrap">
      Salut, je suis{' '}
      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
        Dylan Putzolu
      </span>
    </h1>
  

        <p className="text-2xl md:text-3xl text-gray-300 mb-12">
          Développeur à la recherche d’une alternance
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://github.com/Dylan-Pu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-xl"
          >
            <Github size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/dylan-putzolu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-xl"
          >
            <Linkedin size={30} />
          </a>

          <a
            href="/port-folio-react/CV.pdf"
            download="Dylan_Putzolu_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-gray-800 rounded-full hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-xl"
            title="Télécharger mon CV"
          >
            <Download size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

// À propos
function About() {
  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="
  relative z-10
  overflow-visible
  pb-[0.15em]
  text-4xl xs:text-5xl sm:text-6xl lg:text-7xl
  font-bold text-center
  mb-12 md:mb-20
  bg-gradient-to-r from-cyan-400 to-purple-600
  bg-clip-text text-transparent
">
          À propos
        </h1>

        {/* Photo + Texte côte à côte */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* PHOTO avec effet de ouf */}
          <div className="relative group mx-auto md:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
            <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/port-folio-react/photo.png"
                alt="Dylan Putzolu"
                className="w-full h-96 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Texte + bouton CV */}
          <div className="flex flex-col justify-center space-y-6 text-lg text-gray-300">
            <p>Salut ! Je m’appelle <strong>Putzolu Dylan</strong>, développeur full-stack passionné basé en
              France.</p>
            <p>Durant mes différents métiers, j’ai appris la rigueur, le sens du détail, le respect des délais
              et à livrer un travail impeccable.</p>
            <p>Aujourd’hui, j’aimerais coder avec le même souci d’exigence que pour des applications propres, ultra-rapides et agréables à utiliser.</p>

            <p className="text-xl font-semibold text-cyan-400">
              Actuellement à la recherche d'une alternance !
            </p>

            {/* Bouton CV  */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://github.com/Dylan-Pu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-xl"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/dylan-putzolu-b61b4631a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-xl"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="/port-folio-react/CV.pdf"
                download="Dylan_Putzolu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-gray-800 rounded-full hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-xl"
                title="Télécharger mon CV"
              >
                <Download size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projets & Contact (inchangés, mais propres)
function Projects() {
  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <h1 className="text-center mb-20 text-5xl md:text-7xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent inline-block pb-[0.15em]">
            Mes projets
          </span>
        </h1>

        {/* Grille projets */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* ===== PROJET 1 ===== */}
          <div className="group relative h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>

            <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full">

              {/* Aperçu image */}
              <a
                href="https://mh-wilds-db-production.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <img
                  src="/port-folio-react/mhweb.png"
                  alt="MH Wilds DB preview"
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>

              {/* Contenu */}
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">MH Wilds DB</h2>

                  {/* Tags techno */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 text-sm bg-red-500/20 text-[#FF2D20] rounded-full font-semibold">  Laravel</span>
                    <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-400 rounded-full font-semibold">Tailwind</span>
                    <span className="px-3 py-1 text-sm bg-gray-500/20 text-gray-300 rounded-full font-semibold">PHP</span>
                  </div>

                  <p className="text-gray-400 mt-4">
                    Bestiaire complet de Monster Hunter Wilds.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                 {/* 
                  <a
                    href="https://mh-wilds-db-production.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-semibold hover:scale-105 transition"
                  >
                    Voir le site <ExternalLink size={18} />
                  </a>
                  */}

                  <a
                    href="https://github.com/Dylan-Pu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                  >
                    GitHub <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== PROJET 2 ===== */}
          <div className="group relative h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>

            <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full">

              {/* Aperçu image */}
              <a
                href="https://github.com/Dylan-Pu/CalorieTracker"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <img
                  src="/port-folio-react/calorietracker.png"
                  alt="Calorie Tracker preview"
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>

              {/* Contenu */}
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Calorie Tracker</h2>

                  {/* Tags techno */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 text-sm bg-red-500/20 text-[#FF2D20] rounded-full font-semibold">  Laravel</span>
                    <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-400 rounded-full font-semibold">Tailwind</span>
                    <span className="px-3 py-1 text-sm bg-gray-500/20 text-gray-300 rounded-full font-semibold">PHP</span>
                  </div>

                  <p className="text-gray-400 mt-4">
                    Application de suivi des calories avec gestion des repas, statistiques et interface moderne.
                    <span className="block mt-2 text-cyan-400 font-semibold">
                      Projet non hébergé 🚧
                    </span>
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/Dylan-Pu/CalorieTracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                  >
                    GitHub <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}




//Contact

function Contact() {
  return (
    <section className="py-20 px-6 min-h-screen flex justify-center items-center bg-blue-dark">
      <div className="max-w-2xl w-full bg-gray-950 p-10 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-10">
          Contactez-moi
        </h1>

        <form
          action="https://formspree.io/f/xnneggjn" // <=== ton endpoint Formspree
          method="POST"
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows="6"
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-cyan-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-semibold rounded-lg hover:scale-105 transition transform"
          >
            Envoyer
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Ou envoyez directement à <a href="mailto:putzoludylan@gmail.com" className="text-cyan-400 underline">putzoludylan@gmail.com</a>
        </p>
      </div>
    </section>
  );
}






function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
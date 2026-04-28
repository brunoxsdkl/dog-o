import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-extrabold text-gradient">Mega Dogão</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/cardapio', label: 'Cardápio' },
              { path: '/contato', label: 'Contato' },
              { path: '/localizacao', label: 'Localização' },
              { path: '/sobre', label: 'Sobre' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-colors ${
                  isActive(path)
                    ? 'text-red-500'
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=554191833270"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              FAÇA SEU PEDIDO
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/cardapio', label: 'Cardápio' },
              { path: '/contato', label: 'Contato' },
              { path: '/localizacao', label: 'Localização' },
              { path: '/sobre', label: 'Sobre' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive(path)
                    ? 'text-red-500 bg-red-50'
                    : 'text-gray-700 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

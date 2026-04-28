function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">Mega Dogão</span>
            </div>
            <p className="text-red-100">
              A maior variedade de cachorro-quente e lanches do Centenário!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Home', 'Cardápio', 'Contato', 'Localização', 'Sobre'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-red-100 hover:text-yellow-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-red-100">
              <li>📍 Rua Filipinas, 536 - Cajuru</li>
              <li>📞 41 3092-4584</li>
              <li>📱 41 99183-3270</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-500 mt-8 pt-8 text-center text-red-200">
          <p>&copy; 2026 Mega Dogão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

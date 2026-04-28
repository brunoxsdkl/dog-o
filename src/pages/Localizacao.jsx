function Localizacao() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-gradient">Localização</h1>
        <p className="section-subtitle">Venha nos visitar</p>

        <div className="max-w-4xl mx-auto">
          <div className="card overflow-hidden mb-8">
            <div className="bg-gradient-to-br from-red-100 to-yellow-100 p-16 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">📍</div>
                <h2 className="text-3xl font-bold text-gray-800">Rua Filipinas, 536</h2>
                <p className="text-xl text-gray-600 mt-2">Cajuru - Curitiba - PR</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-bold mb-2">Telefone Fixo</h3>
              <a href="tel:4130924584" className="text-red-500 text-lg font-semibold">41 3092-4584</a>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <a href="tel:41991833270" className="text-red-500 text-lg font-semibold">41 99183-3270</a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.google.com/maps?ll=-25.46702,-49.209139&z=16&t=m&hl=en&gl=US&mapclient=embed&q=RUA.+Filipinas,+536+-+Cajuru,+Curitiba-+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-block"
            >
              VER NO GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Localizacao

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-6xl font-extrabold text-gradient">D</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            O Melhor Cachorro-Quente<br />de Curitiba
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-50">
            Mais de 25 tipos de cachorro-quente e 26 tipos de lanches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=554191833270"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg"
            >
              FAÇA SEU PEDIDO
            </a>
            <Link to="/cardapio" className="bg-white text-red-600 font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all hover:-translate-y-1">
              VER CARDÁPIO
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-gradient">Destaques do Cardápio</h2>
          <p className="section-subtitle">Experimente nossos lanches mais pedidos</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dogão Tradicional', desc: 'O clássico que nunca falha', price: 'R$ 15,90' },
              { name: 'Dogão Premium', desc: 'Com ingredientes especiais', price: 'R$ 24,90' },
              { name: 'Dogão Vegetariano', desc: 'Para quem busca uma opção leve', price: 'R$ 19,90' },
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌭</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <p className="text-2xl font-extrabold text-red-500">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Resumo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-left text-gradient">Conheça o Mega Dogão</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Nossa missão é oferecer aos nossos clientes o melhor cachorro-quente. 
                Temos um cuidado especial na escolha dos produtos, fornecedores e no preparo dos lanches.
              </p>
              <Link to="/sobre" className="btn-primary inline-block">
                SAIBA MAIS
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl flex items-center justify-center">
                <span className="text-9xl">🍔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-gradient">Onde Estamos</h2>
          <p className="section-subtitle">Venha nos visitar no Cajuru</p>
          <div className="card p-8 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-2">Rua Filipinas, 536</h3>
            <p className="text-gray-600 mb-4">Cajuru - Curitiba - PR</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:4130924584" className="btn-primary">
                📞 41 3092-4584
              </a>
              <a href="tel:41991833270" className="btn-secondary">
                📱 41 99183-3270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

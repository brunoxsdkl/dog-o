function Sobre() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-gradient">Sobre o Mega Dogão</h1>
        <p className="section-subtitle">Conheça nossa história</p>

        <div className="max-w-4xl mx-auto">
          <div className="card overflow-hidden mb-12">
            <div className="bg-gradient-to-br from-red-600 to-yellow-400 p-16 text-white text-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl font-extrabold text-gradient">D</span>
              </div>
              <h2 className="text-4xl font-extrabold mb-4">Nossa Missão</h2>
              <p className="text-xl text-red-50 max-w-2xl mx-auto">
                Oferecer aos nossos clientes o melhor cachorro-quente, com cuidado especial na escolha dos produtos, fornecedores e no preparo dos lanches.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '🌭', title: '25+ Tipos', desc: 'De cachorro-quente prensado e tradicional' },
              { icon: '🍔', title: '26+ Lanches', desc: 'Variedade para todos os gostos' },
              { icon: '⭐', title: 'Qualidade', desc: 'Ingredientes selecionados e frescos' },
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4">Onde Estamos</h2>
            <p className="text-gray-600 mb-6">
              Estamos localizados no bairro Cajuru, em Curitiba. Venha nos visitar e experimente 
              o melhor cachorro-quente da região do Centenário!
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">📍 Rua Filipinas, 536 - Cajuru</p>
              <p className="text-gray-600">Curitiba - PR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre

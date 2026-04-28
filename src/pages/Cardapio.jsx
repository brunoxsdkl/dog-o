function Cardapio() {
  const categorias = [
    {
      nome: 'Cachorro-Quente Tradicional',
      itens: [
        { nome: 'Simples', desc: 'Salsicha, molho de tomate e batata palha', preco: 'R$ 12,90' },
        { nome: 'Completo', desc: 'Salsicha, molho, milho, ervilha, batata palha', preco: 'R$ 15,90' },
        { nome: 'Especial', desc: 'Salsicha, molho, milho, ervilha, queijo, bacon', preco: 'R$ 18,90' },
      ]
    },
    {
      nome: 'Cachorro-Quente Prensado',
      itens: [
        { nome: 'Prensado Clássico', desc: 'Salsicha prensada com molho especial', preco: 'R$ 16,90' },
        { nome: 'Prensado Supreme', desc: 'Salsicha, queijo, bacon prensados', preco: 'R$ 22,90' },
        { nome: 'Prensado Master', desc: 'Salsicha, queijo, bacon, milho, ervilha', preco: 'R$ 25,90' },
      ]
    },
    {
      nome: 'Lanches Especiais',
      itens: [
        { nome: 'X-Burger', desc: 'Hambúrguer artesanal, queijo, alface, tomate', preco: 'R$ 18,90' },
        { nome: 'X-Salada', desc: 'Hambúrguer, queijo, alface, tomate, maionese', preco: 'R$ 20,90' },
        { nome: 'X-Bacon', desc: 'Hambúrguer, queijo, bacon crocante', preco: 'R$ 23,90' },
      ]
    }
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-gradient">Nosso Cardápio</h1>
        <p className="section-subtitle">Escolha seu lanche favorito</p>

        {categorias.map((cat, idx) => (
          <div key={idx} className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-400 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🌭</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{cat.nome}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cat.itens.map((item, i) => (
                <div key={i} className="card p-6">
                  <h3 className="text-xl font-bold mb-2">{item.nome}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <p className="text-2xl font-extrabold text-red-500">{item.preco}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <a
            href="https://api.whatsapp.com/send/?phone=554191833270"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            PEDIR PELO WHATSAPP
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cardapio

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Contato from './pages/Contato'
import Localizacao from './pages/Localizacao'
import Sobre from './pages/Sobre'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App

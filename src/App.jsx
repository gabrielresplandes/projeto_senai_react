import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Contact from './pages/Contact.jsx'

function Navbar(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true"></div>
          <div>
            <div className="brand-title">RWGV Motors</div>
            <div className="brand-sub">Concessionária Premium</div>
          </div>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end className={({isActive})=> isActive ? 'active' : ''}>Início</NavLink>
          <NavLink to="/catalogo" className={({isActive})=> isActive ? 'active' : ''}>Catálogo</NavLink>
          <NavLink to="/contato" className={({isActive})=> isActive ? 'active' : ''}>Fale Conosco</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div>
            <div className="brand" style={{marginBottom:10}}>
              <div className="brand-mark" aria-hidden="true"></div>
              <div className="brand-title">RWGV Motors</div>
            </div>
            <small>Excelência em sedans, SUVs e esportivos. Garantia e procedência.</small>
          </div>
          <div>
            <h4>Institucional</h4>
            <div className="meta" style={{display:'grid'}}>
              <a href="#">Quem somos</a>
              <a href="#">Garantia</a>
              <a href="#">Financiamento</a>
            </div>
          </div>
          <div>
            <h4>Atendimento</h4>
            <div className="meta" style={{display:'grid'}}>
              <a href="tel:+5561999999999">+55 (61) 99999-9999</a>
              <a href="mailto:contato@rwgvmotors.com">contato@rwgvmotors.com</a>
              <a href="#">Seg-Sáb: 09h - 19h</a>
            </div>
          </div>
          <div>
            <h4>Endereço</h4>
            <div className="meta" style={{display:'grid'}}>
              <a href="#">SIA Trecho X, Brasília - DF</a>
              <a href="#">CEP 70.000-000</a>
            </div>
          </div>
        </div>
        <div style={{marginTop:18, borderTop:'1px solid var(--border)', paddingTop:14, display:'flex', justifyContent:'space-between', color:'var(--muted)'}}>
          <small>© {new Date().getFullYear()} RWGV Motors. Todos os direitos reservados.</small>
          <small>Feito com ❤️ para performance.</small>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Acesso Premium</span>
            <h1>Descubra o seu próximo carro de luxo com a <span style={{color:'var(--gold-2)'}}>RWGV Motors</span>.</h1>
            <p>Seleção curada de sedans, SUVs e esportivos. Procedência comprovada, histórico transparente e atendimento consultivo do começo ao fim.</p>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <Link className="btn gold" to="/catalogo">Ver Catálogo</Link>
              <Link className="btn" to="/contato">Simular Financiamento</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Destaques da Semana</h2>
          <p className="lead">Ofertas exclusivas com taxa especial para agosto.</p>
          <div className="grid">
            <div className="card" style={{gridColumn:'span 6'}}>
              <div className="media">
                <img src="https://img.odcdn.com.br/wp-content/uploads/2023/08/novo-bmw-serie-3-1655409226392_v2_16x9-1920x1080.jpg" alt="BMW Série 3"/>
              </div>
              <div className="body">
                <div className="title">BMW Série 3 320i M Sport 2023</div>
                <div className="meta"><span>10.500 km</span><span>Gasolina</span><span>184 cv</span></div>
                <div className="price">R$ 269.900</div>
              </div>
            </div>
            <div className="card" style={{gridColumn:'span 6'}}>
              <div className="media">
                <img src="https://www.motoragora.com.br/wp-content/uploads/2021/12/Audi-Q5-2022-frente-1024x576.jpg" alt="Audi Q5"/>
              </div>
              <div className="body">
                <div className="title">Audi Q5 Prestige 2022</div>
                <div className="meta"><span>22.000 km</span><span>Gasolina</span><span>249 cv</span></div>
                <div className="price">R$ 289.000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Serviços</h2>
          <p className="lead">Mais do que vender carros, entregamos tranquilidade.</p>
          <div className="grid">
            <div className="card">
              <div className="body">
                <div className="title">Garantia Estendida</div>
                <p>Cobertura nacional e rede de oficinas credenciadas.</p>
              </div>
            </div>
            <div className="card">
              <div className="body">
                <div className="title">Troca com Troco</div>
                <p>Usamos seu carro na negociação com avaliação justa e rápida.</p>
              </div>
            </div>
            <div className="card">
              <div className="body">
                <div className="title">Financiamento Inteligente</div>
                <p>Parcerias com os principais bancos para as melhores taxas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

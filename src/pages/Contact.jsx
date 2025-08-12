import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('idle')

  function handleSubmit(e){
    e.preventDefault()
    setStatus('ok')
  }

  return (
    <main className="section">
      <div className="container">
        <h2>Fale Conosco</h2>
        <p className="lead">Preencha seus dados e retornaremos com uma proposta personalizada.</p>

        <form onSubmit={handleSubmit} style={{display:'grid', gap:12, maxWidth:640}}>
          <input className="input" placeholder="Nome completo" required />
          <input className="input" placeholder="Telefone/WhatsApp" required />
          <input className="input" type="email" placeholder="E-mail" required />
          <select required defaultValue="">
            <option value="" disabled>Interesse</option>
            <option>Comprar</option>
            <option>Vender</option>
            <option>Trocar</option>
            <option>Financiar</option>
          </select>
          <textarea className="input" rows="5" placeholder="Conte-nos o que procura (modelo, ano, km, cor...)" required></textarea>
          <button className="btn gold" type="submit">Enviar mensagem</button>
          {status==='ok' && <div className="badge" role="status">Recebido! Em breve entraremos em contato.</div>}
        </form>
      </div>
    </main>
  )
}

function Contato() {
  return (
    <div>
      <h1>Fale Conosco</h1>
      <form className="contato-form">
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Sua mensagem..." rows="4" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;

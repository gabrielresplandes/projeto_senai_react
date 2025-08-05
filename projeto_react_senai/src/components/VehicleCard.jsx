function VehicleCard({ veiculo }) {
  return (
    <div className="vehicle-card">
      <img src={veiculo.imagem} alt={veiculo.modelo} />
      <h3>{veiculo.modelo}</h3>
      <p>{veiculo.descricao}</p>
      <strong>R$ {veiculo.preco.toLocaleString()}</strong>
    </div>
  );
}

export default VehicleCard;

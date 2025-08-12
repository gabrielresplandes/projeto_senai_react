function ProductCard({ produto, isFavorito, onToggle }) {
  return (
    <div className="card">
      <h3>{produto.nome}</h3>
      <button onClick={() => onToggle(produto)}>
        {isFavorito ? 'Remover' : 'Favoritar'}
      </button>
    </div>
  );
}

export default ProductCard;

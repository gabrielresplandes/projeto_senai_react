import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';

function Favoritos() {
  const { favoritos, toggleFavorito } = useContext(ProductContext);

  return (
    <div>
      <h1>Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>Nenhum favorito adicionado ainda.</p>
      ) : (
        favoritos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            isFavorito={true}
            onToggle={toggleFavorito}
          />
        ))
      )}
    </div>
  );
}

export default Favoritos;

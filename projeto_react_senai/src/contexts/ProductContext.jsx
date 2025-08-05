import { createContext, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [produtos] = useState([
    { id: 1, nome: 'Maçã' },
    { id: 2, nome: 'Banana' },
    { id: 3, nome: 'Pera' },
  ]);
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (produto) => {
    setFavoritos((prev) =>
      prev.some((p) => p.id === produto.id)
        ? prev.filter((p) => p.id !== produto.id)
        : [...prev, produto]
    );
  };

  return (
    <ProductContext.Provider value={{ produtos, favoritos, toggleFavorito }}>
      {children}
    </ProductContext.Provider>
  );
}

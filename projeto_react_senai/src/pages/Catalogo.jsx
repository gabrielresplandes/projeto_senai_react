import VehicleCard from "../components/VehicleCard";

const veiculos = [
  {
    id: 1,
    modelo: "Toyota Corolla 2020",
    descricao: "Automático, completo, ótimo estado.",
    preco: 85000,
    imagem: "https://source.unsplash.com/400x200/?car,corolla"
  },
  {
    id: 2,
    modelo: "Honda Civic 2021",
    descricao: "Esportivo, teto solar, baixa km.",
    preco: 95000,
    imagem: "https://source.unsplash.com/400x200/?car,civic"
  },
  {
    id: 3,
    modelo: "Volkswagen Gol 2019",
    descricao: "Econômico, ótimo para o dia a dia.",
    preco: 45000,
    imagem: "https://source.unsplash.com/400x200/?car,gol"
  }
];

function Catalogo() {
  return (
    <div>
      <h1>Catálogo de Veículos</h1>
      <div className="catalogo-grid">
        {veiculos.map((v) => (
          <VehicleCard key={v.id} veiculo={v} />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;

# RWGV Motors — Concessionária Premium (Vite + React)

Site estilizado com páginas **Início**, **Catálogo** e **Fale Conosco**, pronto para você inserir seu logotipo e dados reais.

## Rodando o projeto

```bash
# dentro da pasta do projeto
npm i
npm i react-router-dom
npm run dev
```

Acesse o endereço indicado (ex.: http://localhost:5173).

## Estrutura
- `src/App.jsx`: rotas e layout global (Navbar + Footer)
- `src/pages/Home.jsx`: herói, destaques e serviços
- `src/pages/Catalog.jsx`: listagem com filtros e ordenação
- `src/pages/Contact.jsx`: formulário de contato (mock)
- `src/components/VehicleCard.jsx`: card de veículo
- `src/data/vehicles.js`: dados-exemplo
- `src/styles.css`: tema dark + dourado

## Personalização rápida
- **Logo**: substitua o bloco `.brand` na Navbar por `<img src="/src/assets/logo.png" .../>` e coloque seu arquivo em `src/assets/logo.png`.
- **Veículos reais**: edite `src/data/vehicles.js`.
- **Contato real**: conecte o formulário a uma API ou serviço (ex.: Formspree).

---

Feito com foco em **performance** e **UX** para uma experiência premium.

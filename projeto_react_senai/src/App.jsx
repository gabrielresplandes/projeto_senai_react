import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contato from './pages/Contato';
import Header from './components/Header';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;

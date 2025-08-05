import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/rwgvMotors-remove-bg.png"; 

function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <a href="#"><img src={logo} alt="RWGV Motors" className="logo" id="logo"  /></a>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/contato">Fale Conosco</Link>
      </nav>
    </header>
  );
}

export default Header;
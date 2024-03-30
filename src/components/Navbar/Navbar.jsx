import "./navbar.css"
import logo from "../../assets/logo-aba.png"
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logoContainer">
          <img src={logo} className="logo"/>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="#">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#">Productos</a>
          </li>
          <li className="navbar-item">
            <a href="#">Puntos de Venta</a>
          </li>
          <li className="navbar-item">
            <a href="#">Contaco</a>
          </li>
        </ul>
        <div className="cart">
          <FaShoppingCart size={"30px"}/>
          <span className="badge">0</span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
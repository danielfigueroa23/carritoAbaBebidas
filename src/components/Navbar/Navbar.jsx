import "./navbar.css"
import logo from "../../assets/logo-aba.png"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/cartContext'

function Navbar() {
  const { cantidadItem } = useCartContext()
  return (
    <div>
      <nav className="navbar">
        <div className="logoContainer">
          <Link to={'/'}>
            <img src={logo} className="logo"/>
          </Link>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/"> 
            Inicio
            </Link>
          </li>
          <li className="navbar-item">
          <Link to="/category/1"> 
            Catalogo
            </Link>
          </li>
          <li className="navbar-item">
          <Link to="/category/2"> 
          Linea Premium
            </Link>
          </li>
        </ul>
        <Link to='/cart'>
          <div className="cart">
            <FaShoppingCart size={"30px"}/>
            <span className="badge"> {cantidadItem()}</span>
          </div>
        </Link>
        

      </nav>
    </div>
  )
}

export default Navbar
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ product }) => {
    return (
        <div className="stylesBoxItem">
            <h1>{product.name}</h1>
            <img src={product.image} className="imgItem"/>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button className="btnStyle"><Link className="linkStyle" to={`/item/${product.id}`}> Ver Detalle </Link></button>
        </div>
    )
}

export default Item;
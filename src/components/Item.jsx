import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div style={stylesBoxItem}>
            <h1>{product.name}</h1>
            <img src={product.image} style={imgItem}/>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button><Link to={`/item/${product.id}`}> Ver Detalle </Link></button>
        </div>
    )
}

export default Item;

var stylesBoxItem = {
    color: "white",
    width: "100%",
    backgroundColor: "black",
    borderColor: "black",
    borderRadius: "15px",
    display: "flex",
    alignItems: "space-around",
    flexDirection: "column",
    padding: "15px"
}

var imgItem = {
    width: "70%",
    height: "10%",
}

  
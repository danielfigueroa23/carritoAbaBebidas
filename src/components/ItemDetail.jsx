const ItemDetail = ({ product }) => {
    return (
        <div style={stylesBoxItem}>
            <h1>{product.name}</h1>
            <img src={product.image}/>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default ItemDetail;

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
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div>
            <h3>Esto es un desierto! Aun no hay productos en el carrito </h3>
            <Link to="/category/1" className="py-8">
                <button className="btn-primary">Ir al Catalogo</button>
            </Link>
        </div>
    )
}

export default EmptyCart

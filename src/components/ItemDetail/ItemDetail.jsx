import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'
import { IoMdArrowRoundBack } from "react-icons/io";
import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    const {agregarCarrito} = useContext(CartContext)

    const handlerOnAdd = (cantidad) => {
        setwasClicked(true)
        agregarCarrito({ ...product, cantidad: cantidad })        
    }

    const [wasClicked, setwasClicked] = useState(false)



    return (
        <div className='container'>
            <div className='stylesBoxItem'>

                <div className='boxLinkBack'>
                    <Link to="/category/1" className='linkBack'>
                    <IoMdArrowRoundBack size={"30px"}>Volver</IoMdArrowRoundBack>
                    </Link>
                </div>
                <div key={`${product.id}`}>
                    <div>
                        <h1>{`${product.name}`}</h1>
                        <img src={`${product.image}`}/>
                        <p>{`${product.Description}`}</p>
                        <p>${`${product.price}`}</p>
                    </div>
                    <div>
                        {wasClicked ?
                            <> 
                                <ItemCount initial={0} stock={50} onAdd={handlerOnAdd} />
                                <div className="flex my-2">
                                    <Link to='/category/1'> <button className="btn-secondary-detail mr-2"> Seguir comprando </button></Link> 
                                    <Link to='/cart'> <button className="btn-primary-detail ml-2"> Ir al Carrito </button></Link> 
                                </div>
                            </>
                            : 
                            <ItemCount initial={1} stock={50} onAdd={handlerOnAdd} />
                        }
                    </div>

                </div>
            </div>
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
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import EmptyCart from '../EmptyCart/EmptyCart'
import { MdDelete } from "react-icons/md";
import './cart.css'

export const Cart = () => {

    const {cartList, limpiarCarro, eliminarItem,  sumaPrecioItems} = useCartContext()

    return (
        <div className='boxCart'>
            { !cartList.length > 0 ?
                <>
                    <EmptyCart className="flex justify-center"/> 
                </>    
                :
                <div >
                    <h3 className="title">Resumen de tu compra </h3>
                    
                    {cartList.map(prod =>
                    <div className='boxItem'>
                        <Link to={`/item/${prod.id}`}>
                            <div key={prod.id}>
                                <img src={prod.image} alt=""/>
                                <div className='boxItem'>
                                    <h4>{prod.Description}</h4>
                                    <div className='boxItem'>
                                        <p>Cantidad: {prod.cantidad}</p>
                                        <p>Precio unitario: ${prod.price}</p>
                                        <p>Subtotal: ${prod.price * prod.cantidad}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <button className="btn-delete" key={prod.id} onClick={()=> eliminarItem(prod.id) }>
                            <MdDelete  onClick={()=> eliminarItem(prod.id)}/> Eliminar
                        </button>
                    </div> 

                      
                    )}
                        
                    <h4>Total: ${sumaPrecioItems()}</h4>
                    <div>
                        <Link to='/checkout'>
                            <button className="btn-primary">Check-Out</button>
                        </Link>
                        <button onClick={ limpiarCarro } className="btn-secondary ml-2">Limpiar Carrito</button>
                    </div>

                </div>
            }
        </div>
    )
}

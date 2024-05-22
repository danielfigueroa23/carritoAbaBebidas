import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import { IoMdArrowRoundBack } from "react-icons/io";
import './modal.css'


const Modal = ({showModal, setShowModal, orderID}) => {

    const {limpiarCarro} = useCartContext()

    return (
        <>
            { 
            showModal && orderID && 
                <div className='boxModal'> 
                    <div>
                        <div>
                            <button
                                onClick={()=> setShowModal(false)}
                                > 
                                    <IoMdArrowRoundBack size={"20px"}></IoMdArrowRoundBack>
                            </button>
                        </div>
                        <div>
                            <h1>Genial! Gracias por tu compra!</h1>
                            <p>Te enviaremos un correo cuando tu pedido salga de nuestro almacén.</p>
                            <p>Tu código de referencia es: <span>{orderID}</span> </p>
                        </div>
                        <Link to="/">
                            <button 
                            onClick={limpiarCarro}
                            className="btnAccept"
                            >Aceptar</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal
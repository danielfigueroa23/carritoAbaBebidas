import React, {useState} from 'react'
import { useCartContext } from '../../context/cartContext'
import { addDoc, getFirestore ,collection, query , where, Timestamp, writeBatch, getDocs } from 'firebase/firestore'
import Modal from '../Modal/modal'
import Form from './Form'
import './CheckOut.css'

const Checkout = () => {
    const [orderID, setOrderID] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [showModal, setShowModal] = useState(false)
    const {cartList, sumaPrecioItems} = useCartContext()
    

    const generarOrden = (e) => {
        e.preventDefault()

        // Se genera el detalle de la odrdende compra y el total de la compra
        const ordenCompra = {}
        ordenCompra.buyer = { name, email, phone }
        ordenCompra.total = sumaPrecioItems()
        ordenCompra.items = cartList.map(cartItem => {
            const id = cartItem.id
            const Description = cartItem.Description
            const price = cartItem.price * cartItem.cantidad
            const date = Timestamp.fromDate(new Date())
            return {id, Description, price, date}
        })
        
        //Creamos una conexion con la base
        const db = getFirestore()

        // Determinamos la coleccion a la que nos queremos conectar
        const ordersCollection =  collection(db, 'orders')

        //Creamos la orden del pedido en la coleccion en firebase
        addDoc(ordersCollection, ordenCompra)
        .then(resp => setOrderID(resp.id))
        .catch(err => console.log('ERROR ORDEN COMPRA: ', err))
        .finally()

        // Seleccionamos los items a los cuales se debe actualizar su stock
        const itemsToUpdate = query(collection(db, "items"), where("id","in",  cartList.map(i=> i.id)));

        const batch = writeBatch(db);

        //Actualizamos los stocks en firebase
        getDocs(itemsToUpdate)
            .then((snapshot) => {
                snapshot.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                    })
                })
        
                batch.commit().then(res =>{
                    console.log('STOCK ACTUALIZADO', res)
                })
            }
        )

    }       
    
    const notValid = 
        !(name.length &&
        email.length &&
        phone.length &&
        emailValid.length > 0 &&
        email === emailValid
        )


    return (
        <div className="boxCheckout">
            <div className="boxTitles">
                <h2 className="title">Completa tus datos</h2>
                <p className="pb-4">Para poder confirmar la compra, ingresa tus datos:</p>
            </div>
                <Form
                    generarOrden={generarOrden}
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    emailValid={emailValid}
                    setEmailValid={setEmailValid}
                    notValid={notValid}
                    setShowModal={setShowModal}/>

                <Modal
                    orderID={orderID}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    generarOrden={generarOrden}/>

        </div>
    )
}
export default Checkout

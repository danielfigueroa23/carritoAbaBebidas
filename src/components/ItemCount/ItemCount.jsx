import {useState} from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";

const ItemCount = ({initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const handlerAdd =()=>{
        count < stock ? setCount(count+1) : alert("Superaste el stock de productos :(")      
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    return (
        <div className="item-count-container">
            <div className="item-count">
                <button onClick={handlerAdd}>
                    <IoMdAdd />
                </button>
                <label className="mx-5">{count}</label>
                <button onClick={handlerRm}>
                    <IoRemove />
                </button>
            </div>
            <button onClick={ () => onAdd(count)} className="btn-primary">Agregar</button>
        </div>          
    )
}


export default ItemCount

import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore ,collection } from 'firebase/firestore'
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer() {

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true)
  const {idProduct} = useParams(); 

  useEffect( () => {

    //Creamos una conexion con la base de datos
    const db = getFirestore();

    const productRef =  doc(collection(db, "items"), idProduct);
    getDoc(productRef)
    .then((snapshot) => {

      if (snapshot.exists()){
        setProduct({id: snapshot.id, ...snapshot.data()});
        console.log(snapshot);
      }
    })
    .finally(() => setLoading(false))

}, []);


  return (
    <div>
        { loading 
        ? 
        <></>
        :
        <ItemDetail product={product} />
        }
    </div>
  )
}

export default ItemDetailContainer
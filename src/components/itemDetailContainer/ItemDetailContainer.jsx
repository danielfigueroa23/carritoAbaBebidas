import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/getProducts";
import ItemDetail from '../ItemDetail';

function ItemDetailContainer() {

  const [product, setProduct] = useState();
  const {idProduct} = useParams(); 

  useEffect( () => {
    getProducts
    .then( (response) => {
      console.log(response);
      if (idProduct) {
        //Se busca y recupera el producto con el id selecionado
        const NewProduct = response.find( (product) =>  product.id === idProduct);
        setProduct(NewProduct);
        console.log(NewProduct);
      } else {
        setProducts(response);
      }
    })

    .catch (error => console.error(error));
}, []);


  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
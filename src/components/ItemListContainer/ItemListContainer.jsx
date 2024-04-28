import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/getProducts";
import ItemList from "../ItemList";
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {

  const [products, setProducts] = useState([]);
  const {idCategory} = useParams(); 

  useEffect( () => {
      getProducts
      .then( (response) => {
        if (idCategory) {
          //Solamente se almacenan en este array provisorio todos los productos de la categoria especificada
          const NewProducts = response.filter( (product) =>  product.category === idCategory);
          setProducts(NewProducts);
          console.log(NewProducts);
        } else {
          setProducts(response);
        }
      })

      .catch (error => console.error(error));
  }, [idCategory]);

  return (
    <>
    <div className='greetin-mensage'>
        <h2 className="text-greeting">{greeting}</h2>
    </div>
    <div className='box-products'>
      <ItemList products={products}/>
    </div>
    </>

  )
}

export default ItemListContainer
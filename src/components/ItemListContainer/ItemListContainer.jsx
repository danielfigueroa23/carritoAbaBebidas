import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getDocs, getFirestore ,collection, query , where} from 'firebase/firestore'
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {

  const [products, setProducts] = useState([]);
  const {idCategory} = useParams(); 

  useEffect( () => {
    //Creamos una conexion con la base de datos
    const db = getFirestore();

    //Indicamos la base a la cual nos vamos a conectar
    const itemsCollection = collection(db, "items");

    if (idCategory) {

      const q = query(collection(db, "items"), where("category","==", idCategory));

      getDocs(q).then((snapshot) => {

        if (snapshot.size === 0 ) {
          alert("No hay Productos en esta categoria");
        }
        setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));

      })
    } else {

        getDocs(itemsCollection).then((snapshot) => {
          setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
    }

}, [idCategory]);

  return (
    <>
    <div className='greetin-mensage'>
        <h2 className="text-greeting">{greeting}</h2>
    </div>
    <div className="title-Menu">
      Nuestro Productos
    </div>
    <div className='box-products'>
      <ItemList products={products}/>
    </div>
    </>

  )
}

export default ItemListContainer
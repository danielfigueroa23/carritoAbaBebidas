import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

function ItemList({products}) {

    var listProducts = products.map(function(value, i){
        return (
          <Item key={i} product={value} />
        );
      });  

  return (
    <div className='box-listProducts'>
        {listProducts};
    </div>
  )
}

export default ItemList
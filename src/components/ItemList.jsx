import React from 'react'
import Item from './Item';

function ItemList({products}) {

    var listProducts = products.map(function(value, i){
        return (
          <Item key={i} product={value} />
        );
      });  

  return (
    <>
        {listProducts};
    </>
  )
}

export default ItemList
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <div className='greetin-mensage'>
        <h2 className="text-greeting">{greeting}</h2>
    </div>
  )
}

export default ItemListContainer
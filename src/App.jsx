import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter,Route,Routes } from "react-router-dom" 
import Main from "./components/Main"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import { Cart } from "./components/Cart/cart"
import CartContextProvider from "./context/cartContext"
import Checkout from "./components/Checkout/Checkout"

function App() {
  

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Bienvenido/a a la tienda ABA!"} />} />
        <Route exact path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenido/a a la tienda ABA!"}/>}></Route>
        <Route exact path="/item/:idProduct" element={<ItemDetailContainer/>}></Route>
        <Route exact path='/cart' element={ <Cart /> } />
        <Route exact path='/checkout' element={ <Checkout /> } />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App

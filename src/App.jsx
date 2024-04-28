import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter,Route,Routes } from "react-router-dom" 
import Main from "./components/Main"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Bienvenido/a a la tienda ABA! - Nuestro Productos"} />} />
        <Route exact path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenido/a a la tienda ABA!"}/>}></Route>
        <Route exact path="/item/:idProduct" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <ItemListContainer greeting={"Bienvenido/a a la tienda ABA!"}/> */}
    </>
  )
}

export default App

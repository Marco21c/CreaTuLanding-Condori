import './App.css'
import NavBar from './components/NavbarComponents'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NovedadesComponent from './components/NovedadesComponents'
import ItemDetail from './components/itemDetail/ItemDetail'
function App(){
  return (
    <>  
        <BrowserRouter>
         <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/novedades' element={<NovedadesComponent/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/producto/:idProducto' element={<ItemDetail/>}/>
          </Routes>
        </BrowserRouter> 
    </>
  )
}

export default App

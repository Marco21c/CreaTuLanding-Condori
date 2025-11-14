import './App.css'
import NavBar from './components/NavbarContainer/NavbarContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetalleProducto from './pages/DetalleProducto/DetalleProducto'
import NovedadesContainer from './components/NovedadesContainer/NovedadesContainer'
import Home from './pages/Home/Home'
import Container404 from './components/404Container/404Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from './context/CartContext';
import Carrito from './pages/Carrito/Carrrito'
import CheckOut from './pages/CheckOut/CheckOut'
function App(){
  return (
    <>  
        <BrowserRouter>
         <CartProvider>
         <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/novedades' element={<NovedadesContainer/>}/>
            <Route path='/categoria/:idCategoria' element={<Home/>}/>
            <Route path='/producto/:idProducto' element={<DetalleProducto/>}/>
            <Route path='*' element={<Container404/>}/>
            <Route path='/carrito' element={<Carrito/>}/> 
            <Route path='/checkOut' element={<CheckOut/>}/> 
          </Routes>
         </CartProvider>
        </BrowserRouter> 
      
    </>
  )
}

export default App

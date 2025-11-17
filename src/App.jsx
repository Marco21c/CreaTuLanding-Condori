import './App.css'
import NavBar from './components/NavbarContainer/NavbarContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetalleProducto from './pages/DetalleProducto/DetalleProducto'
import Novedades from './pages/Novedades/Novedades'
import Home from './pages/Home/Home'
import Container404 from './pages/Error404/Error404'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from './context/CartContext';
import CheckOut from './pages/CheckOut/CheckOut'
import DatosDeCompra from './pages/DatosDeCompra/DatosDeCompra'
import FooterContainer from './components/FooterContainer/FooterContainer'
import Buscar from './pages/Buscar/Buscar'
function App(){
  return (
    <>  
        <BrowserRouter>
         <CartProvider>
         <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/novedades' element={<Novedades/>}/>
            <Route path='/categoria/:idCategoria' element={<Home/>}/>
            <Route path='/producto/:idProducto' element={<DetalleProducto/>}/>
            <Route path='*' element={<Container404/>}/>
            <Route path='/checkOut' element={<CheckOut/>}/> 
            <Route path='/compra/:idCompra' element={<DatosDeCompra/>}/>
            <Route path='/buscar/:buscado' element={<Buscar/>}/>
          </Routes>
         </CartProvider>
         <FooterContainer/>
        </BrowserRouter> 
      
    </>
  )
}

export default App

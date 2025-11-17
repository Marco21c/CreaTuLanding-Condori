import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CarWidget from '../CartWidgetContainer/CartWidgetContainer'
import { NavLink } from 'react-router-dom';
import {useGetCategorias} from '../../hooks/useGetCategorias'
import './NavbarContainer.css';


const NavbarContainer = () => {
   const { categorias } = useGetCategorias();
   
   return(
     <>          
      <nav className="navbar navbar-expand-lg fixed-top">
        
         <div className="container-fluid">
           
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item mt-2 mb-1">
                 <NavLink className={({ isActive }) => isActive ? "link-activo" : "navbarOpc"} to="/" > Inicio</NavLink>
               </li>
               <li className="nav-item mt-2 mb-1">
                 <NavLink className={({ isActive }) => isActive ? "link-activo " : "navbarOpc "} to="/novedades">Novedades</NavLink>
               </li>
               <li className="nav-item mt-2 mb-1 dropdown">
              <a className="navbarOpc dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="categoria dropdown-menu">
                {categorias.map(cat => (
                  <li key={cat.id}>
                    <NavLink className={({ isActive }) => isActive ? "link-activo" : "navbarOpc dropdown-item "} to={`/categoria/${cat.id}`}>
                      {cat.nombre}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
               
             </ul>
             <form className="d-flex" role="search">
               <input className="form-control me-3 buscarInput" type="search" placeholder="Buscar productos" aria-label="Search"/>
               <button className="btn btn-outline-dark" type="submit"><i className="bi bi-search"></i></button>
             </form>

             <div className='me-3 icons' >
            
             </div>
           </div>
           < CarWidget/>

         </div>
      </nav>  
             
     </>
   )
}

export default NavbarContainer
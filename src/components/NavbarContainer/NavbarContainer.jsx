import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CarWidget from '../CartWidgetContainer/CartWidgetContainer'
import { Link } from 'react-router-dom';
import {useGetCategorias} from '../../hooks/useGetCategorias'
import './NavbarContainer.css';


const NavbarContainer = () => {
   const { categorias } = useGetCategorias();
   
   return(
     <>          
      <nav className="navbar navbar-expand-lg fixed-top">
         <div className="container-fluid">
           <img src="/icono.png" className='iconoNavbar' alt="icono"/> 
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <Link className="navbarOpc nav-link " to="/"> Inicio</Link>
               </li>
               <li className="nav-item">
                 <Link className="navbarOpc nav-link" to="/novedades">Novedades</Link>
               </li>
               <li className="nav-item dropdown">
              <a className="navbarOpc nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="categoria dropdown-menu">
                {categorias.map(cat => (
                  <li key={cat.id}>
                    <Link className="navbarOpc dropdown-item" to={`/categoria/${cat.id}`}>
                      {cat.nombre}
                    </Link>
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
             < CarWidget/>
             <a href="#" className='iconPerfil'> <i className="bi bi-person-circle"></i> </a>
             </div>
           </div>
         </div>
      </nav>  
             
     </>
   )
}

export default NavbarContainer
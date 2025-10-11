import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CarWidget from './CartWidgetComponents'
import { Link } from 'react-router-dom';
import categorias from '../data/categorias.json';
const NavbarContainer = () => {
   return(
     <>          
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed">
         <div className="container-fluid">
           <i className="bi bi-brilliance"></i> 
           <Link className="navbar-brand" to="/">Hostcomer</Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <Link className="nav-link " to="/">Inicio</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/novedades">Novedades</Link>
               </li>
               <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">

                {categorias.map(cat => (
                  <li key={cat.id}>
                    <Link className="dropdown-item" to={`/categoria/${cat.id}`}>
                      {cat.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
               
             </ul>
             <div className='me-3'>
             < CarWidget/>
             </div>
             <form className="d-flex" role="search">
               <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
               <Link className="btn btn-outline-dark" type="submit">Buscar</Link>
             </form>
           </div>
         </div>
      </nav>  
             
     </>
   )
}

export default NavbarContainer
import './CardProductContainer.css'
import { Link } from 'react-router-dom'
const CardProductContainer = ({producto}) => {
  
       
    return(
        <>
           <div className="card cardContent" >
                 <img src={producto.img}  className="card-img-top" alt={producto.descripcion} title={producto.nombre} />
                 <div className="card-body">
                   <h5 className="card-title">{producto.nombre}</h5>
                   <p className="card-text">${producto.precio.toLocaleString("es-AR")},<small>00</small></p>
                        {producto.stock !== 0 ? ( <span className={producto.badge === 'oferta' ? "badge text-bg-success" : "badge text-bg-info"}>{producto.badge}</span>):
                        ( <span className='badge text-bg-danger'> sin stock </span> )
                       }
                  <h6 className='card-text text-secondary'> hasta 6 cuotas sin interes </h6>
                   <Link to={`/producto/${producto.id}`} className="stretched-link"></Link> 
               </div>           
          </div>

        </>
    )
}

export default CardProductContainer
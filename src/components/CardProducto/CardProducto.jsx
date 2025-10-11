import './CardProducto.css'
import { Link } from 'react-router-dom'

const CardProducto = ({producto}) => {

    
    return(
        <>
  <div className="card" style={{ width: "18rem" }}>
    <img
      src={producto.imagen}
      className="card-img-top"
      alt={producto.descripcion}
      title={producto.nombre}
    />

    <div className="card-body">
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="card-text">$ {producto.precio}</p>

      {/* Botón que abre el modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal-${producto.id}`}
      >
        Ver detalles
      </button>
    </div>
  </div>

  {/* Modal */}
  <div
    className="modal fade"
    id={`exampleModal-${producto.id}`}
    tabIndex="-1"
    aria-labelledby={`exampleModalLabel-${producto.id}`}
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5
            className="modal-title fs-5"
            id={`exampleModalLabel-${producto.id}`}
          >
            {producto.nombre}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div className="modal-body">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            title={producto.nombre}
            style={{ width: "100%", height:"60%", padding:"30px", borderRadius: "8px" }}
          />
          <p>{producto.descripcion}</p>
          <h4>${producto.precio}</h4>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</>

    )
}

export default CardProducto
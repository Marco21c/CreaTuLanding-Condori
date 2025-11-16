import './DetalleCompraContainer.css'
export default function DetalleCompraContainer({totalItems,total}) {
  return (
    <>         <div className='resumen'>
                 <p> {totalItems} producto/s seleccionados </p>
                 <h5>Total: ${total.toLocaleString("es-AR")},00 <small> + envio </small> </h5>             
               </div>
    </>
  )
}

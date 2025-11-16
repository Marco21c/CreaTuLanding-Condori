import './ItemCartContainer.css'
export default function ItemCartContainer({item}) {
    
    return (
    <>
      <div className="cartInfo">
        <div className='cartText'>
          <h6> {item.quantity} {item.nombre} </h6>
          <h6>${item.precio.toLocaleString("es-AR")}</h6>
          <p> ${(item.quantity * item.precio).toLocaleString("es-AR")},00</p>   
          
        </div>
        <img src={item.img} className="img-fluid rounded-start" alt={item.nombre}/>
      </div> 
    </>
  )
}

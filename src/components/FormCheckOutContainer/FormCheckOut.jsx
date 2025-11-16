import {useForm} from "react-hook-form";
import './FormCheckOut.css'
import { useContext } from "react";
import { CartContext} from '../../context/CartContext'
import { serverTimestamp } from "firebase/firestore";
import { postOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";
export default function FormCheckOut() {
  const navigate = useNavigate();
 const {register, handleSubmit, formState: { errors },reset} = useForm();
 const {clearCart,cart,total} = useContext(CartContext);

 const onSubmit = async (data) => {
    
    try{
    const order = {comprador: data, compra: cart, total: total, fecha: serverTimestamp()}
    const idOrder = await postOrder(order);
    console.log(idOrder);
    clearCart();
    reset();
    navigate(`/compra/${idOrder}`);
    } catch(error){
        console.log(error);
    }
 }

 return (
    <>
      <div className="form-container">
      <div className="form-contend">            
       
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Datos de contacto </h4>
                    <div className="mb-2 d-grid">
                        <label htmlFor="nombre" className="form-label ">Nombre Completo</label>
                        <input {...register("nombre",{required: "Debe ingresar su nombre"})} placeholder="Nombre Completo" id="nombre"/>
                           {errors.nombre && <p className="error-validacion">{errors.nombre.message}</p> }
                    </div>

                    <div className="mb-2 d-grid">
                        <label htmlFor="email" className="form-label ">Correo electrónico</label>
                        <input {...register("email",{required: "Debe ingresar su email", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Email no válido"},})}  placeholder="Correo electronico" id="email"/>
                        {errors.email && <p className="error-validacion">{errors.email.message}</p>}
                    </div>

                    <div className="mb-2 d-grid" >
                        <label htmlFor="postal" className="form-label">Codigo Postal</label>
                        <input  {...register("postal",{required: "Debe ingresar su codigo postal",  maxLength: { value:4, message:"Debe tener 4 numeros." }, minLength: { value:4, message:"Debe tener 4 numeros." }})}  placeholder="Codigo Postal" id="postal"/>
                        {errors.postal && <p className="error-validacion">{errors.postal.message}</p>}
                    </div>
                    <div className="mb-2 d-grid">
                        <label htmlFor="direccion" className="form-label">Direccion</label>
                        <input {...register("direccion",{required: "Debe ingresar su direccion"})}  placeholder="Direccion" id="direccion"/>
                        {errors.direccion && <p className="error-validacion">{errors.direccion.message}</p>}
                    </div>
                   <div className="mb-2 d-grid">
                        <label htmlFor="ciudad" className="form-label">Ciudad</label>
                        <input {...register("ciudad",{required: "Debe ingresar su ciudad"})}  placeholder="Ciudad" id="ciudad"/>
                        {errors.ciudad && <p className="error-validacion">{errors.ciudad.message}</p>}
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary"> Realizar Compra </button>
                    </div>
                    
                </form>
        </div>
        </div>    
    </>
  )
}

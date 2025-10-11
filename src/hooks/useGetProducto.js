import {useEffect, useState } from 'react'
import productos from '../data/productos.json'

export function useGetProducto(productoId){
   
    const [producto,setProducto] = useState(null)   
    const [loading,setLoading] = useState(true)
   
   useEffect(()=> {
                 
         const productoEncontrado = productos.find((p) => p.id === Number(productoId))
         const getProducto = () =>{
                   return new Promise((resolve)=>{
                       setTimeout(()=>{             
                           resolve(productoEncontrado) 
                       },1050);
                   });};
               getProducto()
                  .then((response) => setProducto(response))
                  .catch(()=>{ console.log("Error al obtener el producto.")})
                  .finally(()=>{ setLoading(false) })
   
           },[productoId])
    
    return {producto,loading}
}


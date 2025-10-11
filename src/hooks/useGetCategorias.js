
import productos from '../data/productos'
import { useState, useEffect } from 'react'

export function useGetCategorias(categoriaId){
        const [productosFiltrados,setproductosFiltrados] = useState([])
        const [loading, setLoading] = useState(true)
        
    
        useEffect(()=> {
              
              const filtrados = productos.filter(producto => producto.categoriaId === Number(categoriaId))
              const getCategorias = () =>{
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        categoriaId == null ?
                        resolve(productos) : 
                        resolve(filtrados)
                    },1050);
                });

            };
            getCategorias()
               .then((response) => setproductosFiltrados(response))
               .catch(()=>{ console.log("Error al obtener las categorias.")})
               .finally(()=>{ setLoading(false) })

        },[categoriaId])

        return {productosFiltrados ,loading}
}



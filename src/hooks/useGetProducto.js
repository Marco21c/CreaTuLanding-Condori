import { useState, useEffect } from "react";
import { getProductos, getProductosPorId, getProducto,getProductosPorBadge} from "../services/productoService";

export function useGetProducto(idCategoria) {
  const [productos, setProductos] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const fetchProductos = async () => {
    setLoading(true);
    try {
      let response = [];
      if (idCategoria != undefined) {
        response = await getProductosPorId(idCategoria); 
      } else {
        response = await getProductos(); 
      }
      setProductos(response);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    } finally {
      setLoading(false);
    }
  };
  
  fetchProductos();
 },[idCategoria]);

  return { productos, loading }; 
}

export function useGetProductoxBadge(badge) {
  const [productos, setProductos] = useState([]); 

  useEffect(() => {
   const fetchProductos = async () => {
   
    try {
        const response = await getProductosPorBadge(badge); 
        setProductos(response);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    } 
  }; 
  fetchProductos();
 },[badge]);

  return productos; 
}


export function useDetailProducto(idProducto){
      const [producto, setProducto] = useState(); 
      const [loading, setLoading] = useState(true); 
      
      useEffect( ()=> {
           getProducto(idProducto)
           .then(response => setProducto(response))
           .catch(error => console.log("Se produjo un error.",error))
           .finally(setLoading(false))
      },[idProducto]
      );
      
      return {producto,loading};
}


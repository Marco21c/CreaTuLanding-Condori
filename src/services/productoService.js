import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import db from '../firebaseConfig.js'

export async function getProductos() {
    try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const productos = querySnapshot.docs.map(doc => ({
    id: doc.id,  ...doc.data()  })); 
     return productos;
  } catch (error) {
    console.error("Error al obtener los productos:", error); 
    return [];
  } 
}

export async function getProductosPorId(categoriaId) {
  try{  
  const collectionRef = collection(db,"productos");
  const q = query( collectionRef, where('categoria','==',categoriaId));
  const snapshot = await getDocs(q);
  const productosFiltrados = snapshot.docs.map(doc => ({id: doc.id,  ...doc.data()}));
   
   return productosFiltrados;
  } catch (error){
    console.error("Error al obtener los productosFiltrados por Categoria: ", error)
    return [];
  }
}

export async function buscarProductosPorNombre(buscado) {
  try {
    const productosRef = collection(db, "productos");
    const snapshot = await getDocs(productosRef);

    const palabra = buscado.trim().toLowerCase();

    const filtrados = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(prod => 
        prod.nombre.toLowerCase().includes(palabra)
      );

    return filtrados;

  } catch (error) {
    console.error("Error buscando productos:", error);
    return [];
  }
}
export async function getProductosPorBadge(badge) {
  try{  
  const collectionRef = collection(db,"productos");
  const q = query( collectionRef, where('badge','==',badge));
  const snapshot = await getDocs(q);
  const productosFiltrados = snapshot.docs.map(doc => ({id: doc.id,  ...doc.data()}));
   
   return productosFiltrados;
  } catch (error){
    console.error("Error al obtener los productos Filtrados por Badge: ", error)
    return [];
  }
}

export async function getProducto(productoId) {
   try{
     const documentRef = doc(db,'productos',productoId);
     const snapshot = await getDoc(documentRef);
     if(snapshot.exists()){
       return { id: snapshot.id, ...snapshot.data() };
     }else{
      console.log("No existe el documento.")
     }

   }catch(error){
    throw error;
   }  
}


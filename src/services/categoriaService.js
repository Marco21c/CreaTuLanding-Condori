import { collection, getDocs } from "firebase/firestore";
import db from '../firebaseConfig.js'

export async function getCategorias() {
  
  try{
    const querySnapshot = await getDocs(collection(db,"categorias"));
    const categorias = querySnapshot.docs.map(doc => ({ 
    id: doc.id, ...doc.data() }));
    return categorias;
  }
  catch(error){
    console.error("Error al obtener las categorias de la bd: ",error);
    return [];
  }
}

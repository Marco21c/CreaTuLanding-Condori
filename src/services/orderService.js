import { collection,addDoc, getDoc, doc, updateDoc} from "firebase/firestore";
import db from "../firebaseConfig";

export async function postOrder(order) {

    const ventas = collection(db,"orders");
    try{
     const response = await addDoc(ventas, order);
     
     await Promise.all(
        order.compra.map(async (prod)=> {
             const productoRef = doc(db,"productos",prod.id);
             const snapshot = await getDoc(productoRef);
             const stockActual = snapshot.data().stock;

             await updateDoc(productoRef,{
             stock: stockActual - prod.quantity
             });
        })
     )
     
     return response.id;
    } catch(error){
        throw error;
    }
}
export async function getOrder(orderId) {
    try{
        const documentRef = doc(db,'orders',orderId);
        const snapshot = await getDoc(documentRef);
         return { id: snapshot.id,...snapshot.data() };  
    }catch(error){
        throw error;
    }
}

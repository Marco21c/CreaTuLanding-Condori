import { collection,addDoc, getDoc, doc} from "firebase/firestore";
import db from "../firebaseConfig";

export async function postOrder(order) {

    const ventas = collection(db,"orders");
    try{
     const response = await addDoc(ventas, order);
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

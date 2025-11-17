import { useState, useEffect } from "react";
import { getOrder } from "../services/orderService";

export function useGetOrder(idOrder) {
     const [order, setOrder] = useState(); 
     const [loading, setLoading] = useState(true);  
        useEffect( ()=> {
               getOrder(idOrder)
               .then(response => setOrder(response))
               .catch(error => console.log("Se produjo un error.",error))
               .finally(setLoading(false))
          },[idOrder]
          );       
          return {order,loading};
}

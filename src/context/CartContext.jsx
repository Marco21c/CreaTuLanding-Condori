import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children})=>{
 const [cart,setCart] = useState([]);
 const [showCart, setShowCart] = useState(false);
 const [compraRealizada, setCompraRealizada] = useState(false);

    const openCart = () => setShowCart(true);
    const closeCart = () => setShowCart(false);

    const addCart = (producto,qty) =>{
    if(isInCart(producto.id)){
       setCart(cart.map((item)=>{ 
        if(item.id === producto.id){
          
          if (item.quantity + qty <= item.stock){ 
            return {...item,quantity: item.quantity + qty}
          }
          else{ 
            return {...item,quantity: item.stock}
          }
        }else{
          return item;
        }
      }) )
    }else{
    setCart([...cart,{...producto,quantity:qty}])
    }
  } 
  const removeFromCart = (id) => {
     setCart(cart.filter(item => item.id !== id))
  }
  const clearCart = () => {
    setCart([])
  }
  const isInCart = (id) =>{
    return cart.some((item)=>item.id === id)
  }
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
   
  const total = cart.reduce((acc,item) => acc + (item.precio * item.quantity) ,0)
  
  const finalizarCompra = () =>{ setCompraRealizada(true)}
  
  return (
    <CartContext.Provider value={{cart,total,addCart,clearCart,removeFromCart,totalItems, showCart, openCart, closeCart,finalizarCompra, compraRealizada}}>
          {children}
    </CartContext.Provider>
  )
}

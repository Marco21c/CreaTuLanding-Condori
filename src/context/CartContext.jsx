import { createContext, useState, useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({children})=>{

 const [showCart, setShowCart] = useState(false);
 const [compraRealizada, setCompraRealizada] = useState(false);   
 const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });   

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
  
   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{cart,total,addCart,clearCart,removeFromCart,totalItems, showCart, openCart, closeCart,finalizarCompra, compraRealizada}}>
          {children}
    </CartContext.Provider>
  )
}

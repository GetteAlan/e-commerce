import { createContext, useContext, useCallback, useMemo, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State to hold the authentication token
  const [cart, setCart] = useState([]);

  const fetchCurrentCart = useCallback(
    (idAccount) => {
      console.log('SE LLAMA A fetchCurrentCart');
      if (idAccount) {
        const endpoint = `https://e-commerce.gettealan.com/api/v1/cart/${idAccount}`;
  
        fetch(endpoint)
          .then((response) => {
            response.json().then((result) => {
    
              setCart(result);
            });
          }).catch((error) => {
            console.log('Error', error);
            setCart();
          });
      }      
    }
    , []);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
      fetchCurrentCart,
    }),
    [cart, setCart, fetchCurrentCart]
  );

  // Provide the authentication context to the children components
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
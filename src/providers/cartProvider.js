import { createContext, useContext, useCallback, useMemo, useState } from "react";

import cartService from '../services/cart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State to hold the authentication token
  const [cart, setCart] = useState([]);

  const fetchCurrentCart = useCallback(
    async (idAccount) => {
      if (idAccount) {
        const response = await cartService.getCurrentCart(idAccount);

        if (response) {
          setCart(response);
        } else {
          setCart();
        }
      }      
    }, []);

  const updateProductQuantity = useCallback(
    async (idAccount, idProduct, quantity) => {
      if (idAccount) {
        return await cartService.updateProductQuantity(idAccount, idProduct, quantity);
      } 
    }, []);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
      fetchCurrentCart,
      updateProductQuantity,
    }),
    [cart, setCart, fetchCurrentCart, updateProductQuantity]
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
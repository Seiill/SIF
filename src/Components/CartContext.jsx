/* import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart].map((item) => ({ ...item }));
    const existingProduct = updatedCart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
  
    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity--;
      if (existingProduct.quantity === 0) {
        const index = updatedCart.indexOf(existingProduct);
        updatedCart.splice(index, 1);
      }

      setCart(updatedCart);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };
  console.log('CartProvider ejecutado')
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}; */
import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }
  }, [cart]);

  const totalPrice = useMemo(() => {
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return total;
  }, [cart]);

  const cartValue = useMemo(() => {
    return cart;
  }, [cart]);

  const removeFromCart = useCallback((productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  }, [cart]);

  const subtractFromCart = useCallback((productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  }, [cart]);
  return (
    <CartContext.Provider value={{ subtractFromCart,removeFromCart, totalPrice, cartValue, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

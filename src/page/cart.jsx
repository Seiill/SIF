import React from 'react';
import {CartContext} from '../Components/CartContext';
import ShoppingCart from '../Components/Shopping/index';
import ScrollToTop from '../Components/scrollTop/ScrollTop'
const Cart = ({CartContext}) => {
   return (
    <>
      <ScrollToTop/>
      <ShoppingCart CartContext={CartContext} />
    </>
  );
};

export default Cart;
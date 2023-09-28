import React from 'react';
import {CartContext} from '../Components/CartContext';
import ShoppingCart from '../Components/Shopping/index';

const Cart = ({CartContext}) => {
   return (
    <>
      <ShoppingCart CartContext={CartContext} />
    </>
  );
};

export default Cart;
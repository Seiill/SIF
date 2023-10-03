import React, { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { useCart } from '../CartContext';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Wrapper, FeaturedCart, AmountContainer, ItemsFeatured, NameProduct, Price, Unity, Subtotal, Remove, Add, Quantity, BuyButton, Form, Total } from './cartElements';
import { Main } from '../mainElements';

const ShoppingCart = () => {
  const { cartValue, removeFromCart, subtractFromCart, addToCart, totalPrice } = useCart();

  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    initMercadoPago('TEST-ec9e02f3-d42c-4a74-82ea-1814e9f2aca1'); // Reemplaza 'TU_PUBLIC_KEY_DE_MERCADOPAGO' con tu clave pública
  }, []);

  const getProductDescriptions = () => {
    return cartValue.map((product) => product.title).join(', ');
  };

  const createPreference = async () => {
    try {
      const response = await axios.post('http://localhost:8080/create-preference', {
        description: getProductDescriptions(),
        price: totalPrice,
        quantity: cartValue.length,
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    try {
      const response = await axios.post('http://localhost:8080/procesar-formulario', {
        name,
        email,
      });
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <ItemsFeatured>
            <NameProduct>Café</NameProduct>
            <Price>Precio</Price>
            <Unity>Cantidad</Unity>
            <Subtotal>Subtotal</Subtotal>
          </ItemsFeatured>
          {cartValue.map((product) => (
            <FeaturedCart key={product.id}>
              <span>{product.title}</span>
              <span>${parseFloat(product.price)}</span>
              <AmountContainer>
                <Remove onClick={() => subtractFromCart(product.id)}>-</Remove>
                <Quantity>{product.quantity} UND</Quantity>
                <Add onClick={() => addToCart(product)}>+</Add>
              </AmountContainer>
              <span>${parseFloat(product.price) * product.quantity}</span>
              <RiDeleteBin6Line fontSize="24px" color='#f5a261' onClick={() => removeFromCart(product.id)} />
            </FeaturedCart>
          ))}
          <Total>Total: ${parseFloat(totalPrice)}</Total>
        </Wrapper>
        <Total>
          <BuyButton onClick={handleBuy} type="button">
            Comprar
          </BuyButton>
        </Total>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </Form>
    </Main>
  );
};

export default ShoppingCart;

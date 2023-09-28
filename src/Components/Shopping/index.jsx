import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Wrapper, FeaturedCart, AmountContainer,ItemsFeatured, NameProduct, Price, Unity, Subtotal, Remove, Add, Quantity, BuyButton, Form, Total } from './cartElements';
import { Main } from '../mainElements';

const ShoppingCart = () => {
  const { cartValue, removeFromCart, subtractFromCart, addToCart, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Agrega otros campos necesarios para tu formulario
  });

  if (!cartValue) {
    return <div>Loading cart...</div>;
  }

  const handleSubtractClick = (productId) => {
    subtractFromCart(productId);
  };

  const handleAddClick = (product) => {
    addToCart(product);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al backend usando una solicitud fetch o Axios
    const dataToSend = {
      ...formData,
      cart: cartValue,
      totalPrice: totalPrice,
    };

    // Ejemplo de cómo enviar los datos usando fetch:
    fetch('/tu-endpoint-de-backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del backend si es necesario
        console.log('Respuesta del backend:', data);
      })
      .catch((error) => {
        console.error('Error al enviar datos al backend:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
                <Remove onClick={() => handleSubtractClick(product.id)}>-</Remove>
                <Quantity>{product.quantity} UND</Quantity>
                <Add onClick={() => handleAddClick(product)}>+</Add>
              </AmountContainer>
              <span>${parseFloat(product.price) * product.quantity}</span>
              <RiDeleteBin6Line fontSize="24px" color='#f5a261' onClick={() => removeFromCart(product.id)} />
            </FeaturedCart>
          ))}

          <Total>Total: ${parseFloat(totalPrice)}</Total>
        </Wrapper>
        <Total><BuyButton type="submit">Comprar</BuyButton></Total>
      </Form>
    </Main>
  );
};

export default ShoppingCart;


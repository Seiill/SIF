import React from 'react';
import styled, { keyframes } from 'styled-components';
import { variables } from '../../Util/themeModes';
import { Link } from 'react-router-dom';

// Define la animación de rotación
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Estilos del botón
const Button = styled.button`
  width: 150px;
  height: 150px;
  position: fixed;
  top: -34px;
  left: 87%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #f5a261;
  font-weight: bold;
  border: none;
  border-radius: 63px;
  cursor: pointer;
  z-index: 100;
  animation: ${rotateAnimation} 20s linear infinite;

  &:hover {
    width: 350px;
    height: 350px;
    transition: width 1s ease;
    border-radius: 50%;
    left: 83%;
    top:-200px;
  }
`;

const Container = styled(Link)`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const H2 = styled.h2`
  color: ${variables.primaryColor};
  font-size: ${variables.smallFont};
  top: 18px;
  position: fixed;
  right: 65px;
  z-index: 101;
} 
`;

const ButtonCoffe = () => {
  return (
    <Container to="/coffe-gif">
      <Button></Button>
      <H2>Regala un café</H2>
    </Container>
  );
};

export default ButtonCoffe;

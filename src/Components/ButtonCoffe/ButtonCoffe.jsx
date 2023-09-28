import React from 'react';
import styled, { keyframes } from 'styled-components';
import { variables } from '../../Util/themeModes';
import { Link } from 'react-router-dom';
import {CiCoffeeCup} from 'react-icons/ci'

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled(Link)`
display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 70px;
    border-radius: 50%;
    height: 70px;
    z-index: 100;
    justify-content: center;
background-color: ${variables.titleColor};
`;



const H2 = styled.h2`
  color: ${variables.primaryColor};
    font-size: 0.8rem;
    position: absolute;
    bottom: 5px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    z-index: 101;
`;



const ButtonCoffe = () => {
  return (
    <Container to="/coffe-gif">
      <CiCoffeeCup size="40px" color='#264653' />
    </Container>
  );
};

export default ButtonCoffe;

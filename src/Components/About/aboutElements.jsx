import { styled } from "styled-components";
import { variables } from "../../Util/themeModes";
import { Link } from "react-router-dom";
import imgs from '../../assets/IMGS/aboutBanner.jpg'
export const ParallaxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 800px;
  background-color: rgba(0, 0, 0, 0.7);
  `;

export const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${imgs}); 
  background-size: cover;
  background-position: center;
  z-index: -1;
  transform: translateY(${(props) => props.offset * 0.5}px); /* Ajusta el valor para el efecto de parallax */
`;

export const ParallaxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${variables.mediumFont};
  color: ${variables.secondColor};
  font-weight: ${variables.boldFont};
  text-align: center;
`;

export const Section = styled.section`
width: 100%;

`
export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
flex-wrap: wrap;
padding: 20px 0;
margin: auto;
`
export const CardContend = styled.div`
width: 30%;
background-color:  ${({ theme }) => theme.card};
border-radius: 30px;
min-width: 350px;
text-align: center;
`
export const Title = styled.h2`
color:  ${({ theme }) => theme.textColor};
`
export const Stroke = styled.div`
width: 70%;
height: 2px;
`
export const Description = styled.p`
color:  ${({ theme }) => theme.itextColor};
font-size: ${variables.smallFont};
margin: ${variables.smallFont};

`
export const Subtitle = styled.h4`
color:  ${({ theme }) => theme.itextColor};
`
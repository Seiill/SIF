import styled from "styled-components";
import { variables } from "../../Util/themeModes";

export const Form = styled.form`
width: 100%;
margin-top: 70px;
`
export const Wrapper = styled.div`
padding: 20px 0;
background-color:${variables.primaryColor};
`
export const ItemsFeatured = styled.div`
display: flex;
justify-content: space-around;
    font-size: 18px;
    color: #f5a261;
    font-weight: 700;
    justify-content: space-around;`
export const NameProduct = styled.span``
export const Price = styled.span``
export const Unity = styled.span`
width: 27%;`
export const Subtotal = styled.span``
export const FeaturedCart = styled.div`
width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    color: ${variables.secondColor};
`
export const AmountContainer = styled.div`
width: 30%;
display: flex;
justify-content: space-evenly;
align-items: center;
}
`
export const Remove= styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 1px 15px;
    font-size: 1.4em;
    font-weight: 700;
    color: ${variables.primaryColor};
    background-color: ${variables.secondColor};
    cursor: pointer;
    transition: border-color 0.25s;`
export const Quantity= styled.span``
export const Add= styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 1px 10px;
    font-size: 1.4em;
    font-weight: 700;
    color: ${variables.primaryColor};
    background-color: ${variables.secondColor};
    cursor: pointer;
    transition: border-color 0.25s;
`
export const Total = styled.div`
display: flex;
    justify-content: flex-end;
    padding: 5px 30px;
    color: white;
    font-weight: 700;
    font-size: 1.3rem;
`
export const BuyButton = styled.button`
width: 200px;
  padding: 10px 30px;
  font-size: 1.2rem;
  color:  ${({ theme }) => theme.itextColor};
  background-color: ${({ theme }) => theme.card};;
  border-radius: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  z-index: 200;
  
  &:focus {
    outline: none;
  }

  &:hover {
    transition: background-color .5s ease;
    background-color: ${variables.titleColor};
    color: ${variables.secondColor};
  };
`
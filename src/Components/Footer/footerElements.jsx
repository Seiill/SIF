import { styled } from "styled-components";
import { variables } from '../../Util/themeModes';
import { Link } from 'react-router-dom';
export const FooterContainer = styled.footer`
width: 100%;
`
export const Container = styled.div`

display: flex;
width: 100%;
justify-content: space-around;
flex-direction:row;
flex-wrap: wrap;
background-color:  ${({ theme }) => theme.itextColor};
`
export const SocialContainer = styled.div`
width: 30%;
display: flex; 
flex-direction: column;
`
export const Title = styled.h2`
font-size: ${variables.smallFont};
color:  ${({ theme }) => theme.textColor};
`
export const Icon = styled(Link)`
width: 50px;
color: ${({ theme }) => theme.textColor};
display: flex;

`
export const IconImage = styled.img`
width: 100%;
fill: ${({ theme }) => theme.textColor};
`
export const IconContainer = styled.div`
display: flex;
flex-direction:row;
width: 100%;
column-gap: 49px;
justify-content: flex-start;
`
export const Important = styled.div`
width: 30%;
display: flex;
flex-direction: column;


`
export const LinksContainer = styled.ul`
width:100%;
display: flex;
flex-direction: column;
`
export const Links = styled(Link)`
textDecoration: none;
listStyleType:none;
font-size: ${variables.smallFont};
color:  ${({ theme }) => theme.textColor};
cursor: pointer;
`
export const ContactContainer = styled.div`
width: 30%;
`
export const Desc = styled(Link)`
color:  ${({ theme }) => theme.textColor};
`
export const ContactItems = styled.div`
display: flex;
flex-direction: row;
align-items: center;
column-gap: 30px;
margin-bottom: 10px;

`
export const InfoWrap = styled.div`
`
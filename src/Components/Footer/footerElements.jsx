import { styled } from "styled-components";
import { variables } from '../../Util/themeModes';
import { Link } from 'react-router-dom';
import { mobile, tablet } from "../../responsive";
export const FooterContainer = styled.footer`
width: 100%;
max-width: 1280px;
margin: auto;
${tablet({
    height: "90vh",
    
})}
`
export const Container = styled.div`

display: flex;
width: 100%;
justify-content: space-around;
flex-direction:row;
flex-wrap: wrap;
background-color:  ${({ theme }) => theme.bg};
${mobile({
    flexDirection: "column",
})}
${tablet({
    flexDirection: "column",
})}
`
export const SocialContainer = styled.div`
width: 30%;
display: flex; 
flex-direction: column;

${tablet({
    width: "90%",
    margin: "10px",
})}
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

${tablet({
    width: "90%",
    margin: "10px",
})}


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

${tablet({
    width: "90%",
    margin: "10px",
    paddingBottom: "50px",
})}
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
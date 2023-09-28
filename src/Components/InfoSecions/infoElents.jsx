import styled ,{keyframes}from 'styled-components';
import {variables} from '../../Util/themeModes'
const appearAnimation = keyframes`
  0% {
    width: 0%;
}
  100% {
    width: 90%;
  }
`;


const heightAnimation = keyframes`
0% {
    height: 0%;
}
  100% {
    height: 100%;
  }
`


export const Imgs = styled.img`
width: 80%;
height:auto;
`
export const Titles = styled.h2`
font-size: ${variables.semimediumFont};
color: ${({ theme }) => theme.title};
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
`
export const Section = styled.div`
width: 100%;
padding-top: 80px;
}
`
export const Container = styled.div`
display: flex;
width: 80%;
margin: auto;
flex-wrap: wrap;
justify-content: space-around;
background-color: ${({ theme }) => theme.card};
border-radius: 30px;
`
export const Containerr = styled.div`
display: flex;
flex-direction: row;
width: 80%;
margin: auto;
justify-content: space-between;
align-items: center;
}
`

export const Containers = styled.div`
display: flex;
width: 100%;
margin: auto;
flex-wrap: wrap;
justify-content: space-around;

`

export const CardContent = styled.div`
display: flex;
width: 29%;
margin: 0.7rem auto;
padding: 2%;
text-align: center;
flex-direction: column;
align-items: center;
color: ${({ theme }) => theme.itextColor};
`
export const Icon = styled.img`
width: 50px;
height:0;
animation: ${({ $visible }) => ($visible ? heightAnimation : 'none')} 2s ease-in-out;
animation-fill-mode: forwards;
`
export const Stroke= styled.div`
width: 0%;
height: 2px;
background-color: ${({ theme }) => theme.title};
margin-top: 10px;
animation: ${({ $visible }) => ($visible ? appearAnimation : 'none')} 2s ease-in-out;
animation-fill-mode: forwards;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.textColor};
`;
export const TitleDesc = styled.h3`
  color: ${({ theme }) => theme.itextColor};
`;
export const Desc = styled.p`
font-size: ${variables.smallFont};
color: ${({ theme }) => theme.itextColor};
`
export const Descr = styled.p`
font-size: ${variables.smallFont};
color:  ${({ theme }) => theme.textColor};
`
export const Image = styled.img`
bottom: 0;
position: relative;
width: 70%;
`
export const ImageContent = styled.div`
width: 45%;
margin-left: 0;
` 
export const ImageDesc = styled.img`
width: 100%;
height: 800px;
object-fit: cover;
border-radius: 0 30px 30px 0;
`
export const TextContainer = styled.div`
width: 45%;
display: flex;
flex-direction: column;

`
const textContAnimation = keyframes`
0% {
    opacity: 0;
}
  100% {
    opacity: 1;
  }
`;
export const TextContent = styled.div`
width: 90%;
margin-left: 10px;
display: flex;
flex-direction: column;
justify-content: center;
animation: ${({ $visible }) => ($visible ? textContAnimation : 'none')} 3s ease-in-out 1;
animation-fill-mode: forwards;
padding: 0 0 30px 0;

`

const heightAnimationShape = keyframes`
0% {
    height: 0;
}
  100% {
    height: 700px;
  }
`;
export const Shape = styled.div`
width: 4px;
height: 700px; 
background-color: ${variables.titleColor};
animation: ${({ $visible }) => ($visible ? heightAnimationShape : 'none')} 2s ease-in-out 1;
animation-fill-mode: forwards;
`
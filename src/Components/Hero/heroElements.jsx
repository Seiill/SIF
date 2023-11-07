import styled from 'styled-components';
import {variables} from '../../Util/themeModes'
import { mobile, tablet } from '../../responsive';
export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color:  ${({ theme }) => theme.bg};

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: ${variables.bg};
    z-index: 1;
  }
  ${mobile({width: "100%"})}
`;


export const ImgOne = styled.img`
  position: absolute;
  top: 170px;
  left: 378px;
  z-index: 2;
  
  ${tablet({
  top: "157px",
  left: "217px",
  height: "100%"
})}

${mobile({
  top: "180px",
  left: "80px",
  height: "100%"
})}
`;

export const ImgTwo = styled.img`
  width: 100%; 
  position: absolute;
  z-index: 3;
  top: -50px;
  
  ${tablet({
    objectFit: "cover",
    height: "100%"
  })}

  ${mobile({
    height: "100%",
    width: "auto",
    top: "60px",
    marginLeft: "-260px",
  })}
`;

export const ImgThree = styled.img`
width: 124%;
position: absolute;
top: -60px;
z-index: 5;

${tablet({
  height: "100%",
})}

${mobile({
  height: "100%",
    width:" auto",
    top: "50px",
})}
`;

export const Image = styled.img`
position: absolute;
width: 773px;
bottom: -71px;
left: 552px;
z-index: 4;

${tablet({
  position: "absolute",
  width: "819px",
  bottom:" 19px",
  left: "-22px",
  zIndex: "4",
})}

${mobile({
  position: "absolute",
  width:" 486px",
  bottom: "-62px",
  left: "-55px",
  zIndex: "4",
})}
`;

export const TextContainer = styled.div`
width: 50%;
top: 250px;
position: relative;
margin-left: 50px;
z-index: 5;

${tablet({
  width: "80%",
  top: "180px"
})}

${mobile({
  marginLeft: "20px",
  width: "100%",
  top: "200px"
})}
`

export const Text = styled.h1`
  text-align: left;
  color: ${({ theme }) => theme.textColor};
  font-size: ${variables.mediumFont};
  letter-spacing: 3.5px;

  
  ${tablet({
    textWrap: "wrap",
    fontSize: "2rem",
    letterSpacing: "normal"})}
    ${mobile({
      textWrap: "wrap",
      fontSize: "28px",
      letterSpacing: "normal"})}
`;

export const SpanText = styled.span`
  font-size: ${variables.bigFont}; 
  color:  ${({ theme }) => theme.title};
  
  ${tablet({letterSpacing: "normal",
    fontSize: "3.8rem"})}
  ${mobile({letterSpacing: "normal",
    fontSize: "2.8rem"})}
`;
export const SpanOption = styled.span`
letter-spacing: ${props => props.$textspacing || 'normal'};
${mobile({letterSpacing: "normal",
fontSize: "1.4rem"})}
`
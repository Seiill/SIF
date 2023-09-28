import styled from 'styled-components';
import {variables} from '../../Util/themeModes'

export const Container = styled.div`
  width: 100%;
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
`;


export const ImgOne = styled.img`
  position: absolute;
  top: 170px;
  left: 378px;
  z-index: 2;
`;

export const ImgTwo = styled.img`
  width: 107%; 
  position: absolute;
  z-index: 3;
  top: -50px;
`;

export const ImgThree = styled.img`
width: 124%;
position: absolute;
top: -60px;
z-index: 5;
`;

export const Image = styled.img`
position: absolute;
width: 773px;
bottom: -71px;
left: 552px;
z-index: 4;
`;

export const TextContainer = styled.div`
width: 50%;
top: 250px;
position: relative;
margin-left: 50px;
z-index: 5;
`

export const Text = styled.h1`
  text-align: left;
  color: ${({ theme }) => theme.textColor};
  font-size: ${variables.mediumFont};
  letter-spacing: 3.5px;
`;

export const SpanText = styled.span`
  font-size: ${variables.bigFont}; 
  color:  ${({ theme }) => theme.title};
`;
export const SpanOption = styled.span`
letter-spacing: ${props => props.$textspacing || 'normal'};
`
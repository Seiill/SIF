import styled from 'styled-components';
import { variables } from '../../Util/themeModes';
import { mobile } from '../../responsive';
export const Container = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  align-items: center;
  padding: 20px;
  ${mobile({
    flexDirection:'column-reverse',
  })}
`;
export const ImageColumn = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ContentColumn = styled.div`
  flex: 1;
  padding: 0 20px;
  ${mobile({
    padding: "30px 0",
  })}
`;

export const Title = styled.h2`
  font-size: ${variables.semimediumFont};
  color:  ${({ theme }) => theme.title};
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: ${variables.smallFont};
  color:  ${({ theme }) => theme.textColor};
`;

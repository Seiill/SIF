import styled from 'styled-components';
import { variables } from '../../Util/themeModes';
import { Link } from 'react-router-dom';

export const Buttonn = styled(Link)`
  width: 200px;
  padding: 10px 30px;
  font-size: 1.5rem;
  color:  ${({ theme }) => theme.itextColor};
  background-color: ${({ theme }) => theme.card};;
  border-radius: 30px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  z-index: 200;
  
  &:hover {
    transition: background-color .5s ease;
    background-color: ${variables.titleColor};
    color: ${variables.secondColor};
  }
`;
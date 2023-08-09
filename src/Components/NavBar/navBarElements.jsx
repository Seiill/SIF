import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { variables } from '../../Util/themeModes';

export const Nav = styled.nav`
background-color: ${({ theme }) => theme.bg};
color: ${(props) => (props.isTransparent ? 'white' : 'black')};

display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
top: 0;
left: 0;
right: 0;
width: 1280px;
margin: auto;
transition: background-color 0.3s;
z-index: 10;

@media (max-width: 768px) {
  flex-direction: column;
  position: ${(props) => (props.isTransparent ? 'absolute' : 'fixed')};
}
`;

export const NavLogo = styled.div`
  font-size: ${variables.semimediumFont};
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  margin-right: 20px;
  cursor: pointer;
  font-weight: ${variables.mediumBoldFont};
  color: ${(props) => (props.isTransparent ? variables.secondColor : variables.titleColor)};
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: ${variables.semimediumFont};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const ModeToggle = styled.button`
background-color: transparent;
border: none;
color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
cursor: pointer;
font-size: 1rem;

&:hover {
  text-decoration: underline;
}
`;
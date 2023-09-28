import { Link } from 'react-router-dom';
import { variables } from '../../Util/themeModes';
import styled, { css } from 'styled-components';

export const Nav = styled.nav`
background-color: ${({ theme }) => theme.bg};
color: ${(props) => (props.$isTransparent ? 'white' : 'black')};

display: flex;
justify-content: space-between;
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
  position: ${(props) => (props.$isTransparent ? 'absolute' : 'fixed')};
}
`;

export const NavLogo = styled(Link)`
  font-size: ${variables.semimediumFont};
`;
export const Logo = styled.img`
width: 80px;
`

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
  color: ${(props) => (props.$isTransparent ? variables.secondColor : variables.titleColor)};
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${variables.titleColor};
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: width 0.3s ease;
    transform-origin: center;
  }
  ${(props) =>
    props.$isSelected &&
    css`
      &:after {
        width: 100%;
      }
    `}

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
color: ${({ darkmode }) => (darkmode ? 'white' : 'black')};
cursor: pointer;
font-size: 1rem;

&:hover {
  text-decoration: underline;
}
`;
export const ChangeLenguageContainer = styled.button`
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
background: none;
`
export const ChangeLanguageIcon = styled.img`
width: 20px;
object-fit: cover;
`
export const ChangesNav = styled.div`
width: 20%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
}
`
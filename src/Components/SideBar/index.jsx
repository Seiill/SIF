import React from 'react';
import styled from 'styled-components';
import { variables } from '../../Util/themeModes';
import { mobile, tablet } from '../../responsive';
import { Link as LinkSideBar } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;
  transition: transform 0.3s;
  transform: translateX(${props => props.$isOpen ? '0' : '-250px'});

  ${mobile({
    width: "200px",
  })}
  ${tablet({
    width: "200px",
  })}
`;

const SidebarLink = styled(LinkSideBar
  )`
  text-decoration: none;
  font-size: ${variables.semimediumFont};
  color: ${({ theme }) => theme.textColor};
  margin: 20px 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #2a9d8f;
  }
`;

const Sidebar = ({ isOpen, toggleSidebar, navItems, t }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      {navItems.map(item => (
        <SidebarLink key={item.id} to={item.path}onClick={toggleSidebar}>
          {t(item.title)}
        </SidebarLink>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

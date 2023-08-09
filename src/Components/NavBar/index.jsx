import React,{useState, useEffect} from 'react'
import {ModeToggle, Nav, NavLogo, NavMenu, NavItem, MenuIcon  } from './navBarElements';

    const Navbar = ({ toggleTheme }) => {
      const [darkMode, setDarkMode] = useState(false);
      const [isMenuOpen, setMenuOpen] = useState(false);
      const [isTransparent, setTransparent] = useState(true);
    
      const handleModeToggle = () => {
        setDarkMode(!darkMode);
      };
    
      const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
      };
    
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setTransparent(false);
        } else {
          setTransparent(true);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

        return (
          <Nav isTransparent={isTransparent}>
      <NavLogo>Logo</NavLogo>
      <NavMenu isOpen={isMenuOpen}>
        <NavItem to="/">Inicio</NavItem>
        <NavItem to="/aboutUs">Nosotros</NavItem>
        <NavItem to="/programs">Programas</NavItem>
        <NavItem to="/blog">Blog</NavItem>
      </NavMenu>
      <ModeToggle darkMode={darkMode} onClick={toggleTheme}>
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </ModeToggle>
      <MenuIcon onClick={handleMenuToggle}>☰</MenuIcon>
    </Nav>
        );
      };
      
      export default Navbar;
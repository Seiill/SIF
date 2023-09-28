import React,{useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'; 
import { useLocation } from 'react-router-dom';

import {BsSunFill, BsMoonFill} from 'react-icons/bs'

import {ModeToggle, Nav, NavLogo, NavMenu, NavItem, MenuIcon, Logo, ChangesNav, ChangeLenguageContainer, ChangeLanguageIcon  } from './navBarElements';
import logo from '../../assets/IMGS/LogoSif.svg'
import colFlag from '../../assets/IMGS/colFlag.png'
import euFlag from '../../assets/IMGS/EEUUflag.png'
import {navItemsEs} from '../../Util/es.json'
import {navItemsEn} from '../../Util/en.json';
import ButtonCoffe from '../ButtonCoffe/ButtonCoffe';

const Navbar = ({ toggleTheme, changeLanguage}) => {
  const { t, i18n } = useTranslation();
  const navItems = i18n.language === 'es' ? navItemsEs : navItemsEn;
  

      const [darkMode, setDarkMode] = useState(false);
      const [isMenuOpen, setMenuOpen] = useState(false);
      const [isTransparent, setTransparent] = useState(true);
      const [isEsSelected, setIsEsSelected] = useState(i18n.language === 'es');
      const location = useLocation(); 

    
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
        const pathName = location.pathname.toLowerCase(); 
        const matchingItem = navItems.find(item => item.path.toLowerCase() === pathName);
    
        if (matchingItem) {
          setSelectedMenuItem(matchingItem.id);
        } else {
          setSelectedMenuItem('');
        }
      }, [location.pathname, navItems]);
    
      const [selectedMenuItem, setSelectedMenuItem] = useState('home');     

      useEffect(() => {
        setIsEsSelected(i18n.language === 'es');
      }, [i18n.language]);

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


        return (
          <Nav $isTransparent={isTransparent}>
      <NavLogo to="/"><Logo src={logo}/></NavLogo>
      <NavMenu $isOpen={isMenuOpen}>
      {navItems.map((item, id) => (
  <NavItem key={item.id} to={item.path} 
    onClick={() => {setSelectedMenuItem(item.id); setMenuOpen(false);}}
  $isSelected={selectedMenuItem === item.id}>
    {t(item.title)}
  </NavItem>
))}
          </NavMenu>
          <ChangesNav>
          <ModeToggle $darkmode={darkMode} onClick={() => { toggleTheme(); handleModeToggle(); }}>
          {darkMode ? <BsMoonFill color="#F5A261" /> : <BsSunFill color="#264653" />}
          </ModeToggle>
        <ChangeLenguageContainer 
          onClick={() => {
            changeLanguage(isEsSelected ? 'en' : 'es');
            setIsEsSelected(!isEsSelected);
        }}
      >
        {isEsSelected ? (
          <ChangeLanguageIcon src={euFlag} alt="English Flag" />
        ) : (
          <ChangeLanguageIcon  src={colFlag} alt="Spanish Flag" />
        )}
      </ChangeLenguageContainer>
      < ButtonCoffe />
          </ChangesNav>
          
      <MenuIcon onClick={handleMenuToggle}>☰</MenuIcon>
    </Nav>
        );
      };
      
      export default Navbar;
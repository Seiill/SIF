import React, { useState, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { darkTheme, lightTheme } from './Util/themeModes';
import Home from './page/home';
import Footer from './Components/Footer/index';
import Navbar from './Components/NavBar/index';
import About from './Components/About/index';
import Programs from './page/programs';
import Blog from './page/blog';
import { CartProvider } from './Components/CartContext';
import CoffeGif from './page/coffeGif';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './Util/i18n';
import Cart from './page/cart';

function App() {
  const [darkMode, setDarkMode] = useState(false);3.
  const { t } = useTranslation();

  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const selectedTheme = darkMode ? darkTheme : lightTheme;

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={selectedTheme}>
        <CartProvider >
          <Router>
            <Navbar toggleTheme={toggleTheme} changeLanguage={changeLanguage} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/coffe-gif" element={<Suspense fallback={<div>Cargando...</div>}><CoffeGif /></Suspense>} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;

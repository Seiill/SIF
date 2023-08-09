import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { darkTheme, lightTheme } from "./Util/themeModes";
import Home from "./page/home"
import Footer from "./Components/Footer/index";
import Navbar from "./Components/NavBar/index";
import About from "./Components/About/index";
import Programs from "./page/programs";
import Blog from "./page/blog";
import ButtonCoffe from "./Components/ButtonCoffe/ButtonCoffe";
import CoffeGif from "./page/coffeGif";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const selectedTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
    <Router>
      
      <Navbar toggleTheme={toggleTheme} />
    
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/aboutUs" element={<About />} />
     <Route path="/programs" element={<Programs />} />
     <Route path="/blog" element={<Blog />} />
     <Route path="/coffe-gif" element={<CoffeGif />} />
    </Routes>
    
    <Footer/>
    
    <ButtonCoffe />
    </Router>
    </ThemeProvider>

  )
}

export default App

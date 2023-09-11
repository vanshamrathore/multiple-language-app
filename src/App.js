import React, { useEffect } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import { Route, Routes } from 'react-router-dom';
import Header from './components/pages/header/Header';
import Contact from './components/pages/contact/Contact';

function App() {
  const { i18n } = useTranslation();

  // Set the default language
  useEffect(()=>{
    i18n.changeLanguage('en');
  },[])
 

  return (
    <div className="App">
    <Header/>
      <main>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
       </Routes>
      </main>
    </div>
  );
}

export default App;

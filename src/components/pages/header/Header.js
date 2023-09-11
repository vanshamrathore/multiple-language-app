import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LanguageSwitcher from '../../LanguageSwitcher';
import './Header.css'
import { useTranslation } from 'react-i18next';


function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t } = useTranslation();
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}>

      <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>

        <Nav className="ms-auto" defaultActiveKey="#home">

          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> {t('home.title')} </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}>
              {t('about.title')}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}>
              {t('contact.title')}
            </Nav.Link>
          </Nav.Item>
          <LanguageSwitcher/>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
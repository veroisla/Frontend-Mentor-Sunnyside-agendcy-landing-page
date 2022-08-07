import React from 'react';
import Logo from '../images/logo.svg';
import Hamburguer from '../images/icons/icon-hamburger.svg';
import Arrow from '../images/icons/icon-arrow-down.svg';

import '../styles/components/Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__LogoAndNav">
        <img src={Logo} alt="Logo Web" className="header__Logo" />
        {/* <nav classname="header__Nav">
        <ul>
          <li> About</li>
          <li>Services</li>
          <li>Projects</li>
          <li> Contact</li>
        </ul>
      </nav> */}
        <img
          src={Hamburguer}
          alt="Nav Menu Header"
          className="header__Hamburguer"
        />
      </div>
      <div className="header__TitleAndArrow">
        <h1 className="header__Creatives">we are creatives</h1>
        <a href="#footer">
          <img src={Arrow} alt="Scroll Down for more Info" />
        </a>
      </div>
    </header>
  );
}

export default Header;

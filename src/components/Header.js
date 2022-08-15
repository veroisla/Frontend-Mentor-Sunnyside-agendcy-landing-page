import React, { useState } from 'react';
import '../styles/components/Header.scss';
import Logo from '../images/logo.svg';
import Hamburguer from '../images/icons/icon-hamburger.svg';
import Arrow from '../images/icons/icon-arrow-down.svg';
import NavDesktop from './NavDesktop';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      <div className="header__LogoAndNav">
        <img src={Logo} alt="Logo Web" className="header__Logo" />
        <NavDesktop />
        <img
          src={Hamburguer}
          alt="Nav Menu Header"
          className="header__Hamburguer"
          onClick={showSideBar}
        />
      </div>
      {/* //NAV MOBILE */}
      <nav className={sidebar ? 'nav__menu--open' : 'nav__menu--notOpen'}>
        <div className="nav__container">
          <ul onClick={showSideBar} className="nav__list">
            <li>
              <a className="nav__items" href="#About">
                About
              </a>
            </li>
            <li>
              <a className="nav__items" href="#Services">
                Services
              </a>
            </li>
            <li>
              <a className="nav__items" href="#Projects">
                Projects
              </a>
            </li>
            <li>
              <button className="nav__items--contact">contact</button>
              {/* <a className="nav__items nav__items--contact" href="#Contact"></a> */}
            </li>
          </ul>
        </div>
      </nav>
      <div className="header__TitleAndArrow">
        <h1 className="header__Creatives">we are creatives</h1>
        <a href="#footer">
          <img src={Arrow} alt="Arrow down" title="To the bottom!" />
        </a>
      </div>
    </header>
  );
}

export default Header;

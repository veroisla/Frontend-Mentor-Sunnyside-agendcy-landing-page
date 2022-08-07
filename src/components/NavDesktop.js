import React from 'react';
import '../styles/components/NavDesktop.scss';

function NavDesktop() {
  return (
    <nav className="navDesktop">
      <ul className="navDesktop__list">
        <li>
          <a className="navDesktop__items" href="#About">
            About
          </a>
        </li>
        <li>
          <a className="navDesktop__items" href="#Services">
            Services
          </a>
        </li>
        <li>
          <a className="navDesktop__items" href="#Projects">
            Projects
          </a>
        </li>
        <li>
          <button className="navDesktop__items--contact">contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavDesktop;

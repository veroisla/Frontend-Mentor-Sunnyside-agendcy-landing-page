import React from 'react';
import '../styles/components/NavMobile.scss';

function NavMobile() {
  return (
    <nav classname="navMobile">
      <ul>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMobile;

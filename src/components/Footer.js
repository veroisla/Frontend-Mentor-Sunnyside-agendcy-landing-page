import React from 'react';
import Logo from '../images/logo.svg';

function footer() {
  return (
    <>
      {' '}
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li> About</li>
          <li>Services</li>
          <li>Projects</li>
          <li> Contact</li>
        </ul>
      </nav>
      {/* ICONS */}{' '}
      <div class="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default footer;

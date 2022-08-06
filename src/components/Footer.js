import React from 'react';
import '../styles/components/Footer.scss';
import Facebook from '../images/icons/icon-facebook.svg';
import Instagram from '../images/icons/icon-instagram.svg';
import Twitter from '../images/icons/icon-twitter.svg';
import Pinterest from '../images/icons/icon-pinterest.svg';

function footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__Logo">sunnyside</p>
        <nav className="footer__Menu">
          <ul className="footer__Nav">
            <li className="footer__Links"> About</li>
            <li className="footer__Links">Services</li>
            <li className="footer__Links">Projects</li>
          </ul>
        </nav>
        {/* ICONS */}
        <div className="footer__Icons">
          <img src={Facebook} alt="Facebook" className="footer__IconsImg" />
          <img src={Instagram} alt="Instagram" className="footer__IconsImg" />
          <img src={Twitter} alt="Twitter" className="footer__IconsImg" />
          <img src={Pinterest} alt="Pinterest" className="footer__IconsImg" />
        </div>

        {/* <div class="footer__Attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Verónica Isla </a>.
        </div> */}
      </footer>
    </>
  );
}

export default footer;

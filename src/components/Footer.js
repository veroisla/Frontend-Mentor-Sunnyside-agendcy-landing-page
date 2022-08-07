import React from 'react';
import '../styles/components/Footer.scss';
import Facebook from '../images/icons/icon-facebook.svg';
import Instagram from '../images/icons/icon-instagram.svg';
import Twitter from '../images/icons/icon-twitter.svg';
import Pinterest from '../images/icons/icon-pinterest.svg';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

function footer() {
  return (
    <>
      <footer className="footer" id="footer">
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
          <AiFillFacebook className="footer__IconsImg" />
          <AiOutlineInstagram className="footer__IconsImg" />
          <AiOutlineTwitter className="footer__IconsImg" />
          <BsPinterest className="footer__IconsImg" />
        </div>

        <div class="footer__Attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://www.linkedin.com/in/veronica-isla-garcia-de-leaniz/"
            target="_blank"
            rel="noreferrer"
          >
            Verónica Isla{' '}
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default footer;

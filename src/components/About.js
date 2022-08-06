import React from 'react';

import Egg from '../images/mobile/image-transform.jpg';

import '../styles/components/About.scss';

function About() {
  return (
    <section className="about">
      <article>
        <div className="about__IntroImg"></div>
        <h2> Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <p>Learn more </p>
      </article>
      <article>
        <h2> Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <p> Learn more</p>
      </article>
      <article>
        <h3> Graphic design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </article>
      <article>
        {' '}
        <h3>Photography</h3>
        <p>
          {' '}
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </article>
    </section>
  );
}

export default About;

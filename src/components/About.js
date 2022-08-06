import React from 'react';

import Egg from '../images/mobile/image-transform.jpg';

import '../styles/components/About.scss';

function About() {
  return (
    <section className="about">
      <article className="about__ArticleWhite">
        <div className="about__IntroImg about__ImgTransform"></div>
        <div className="about__Content">
          <h2 className="about__Title">Transform your brand</h2>
          <p className="about__About">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="about__LearnMore about__UnderlineYellow">learn more</p>
        </div>
      </article>
      <article className="about__ArticleWhite">
        <div className="about__IntroImg about__ImgStandOut"></div>
        <div className="about__Content">
          <h2 className="about__Title"> Stand out to the right audience</h2>
          <p className="about__About">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <p className="about__LearnMore about__UnderlinePink">learn more</p>
        </div>

        {/* ----------OTHER TYPE OF ARTICLE----------- */}
      </article>
      <article className="about__ImgBackground about__ImgGraphicDesign">
        <h3> Graphic design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </article>
      <article className="about__ImgBackground about__ImgPhotography">
        <h3>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </article>
    </section>
  );
}

export default About;

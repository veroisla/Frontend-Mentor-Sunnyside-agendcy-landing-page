import React from 'react';

import '../styles/components/About.scss';

function About() {
  return (
    <section className="about">
      {/* //--Article 1 */}
      <article className="about__ArticleWhite">
        <div className="about__IntroImg about__ImgTransform"></div>
        <div className="about__Content">
          <h2 className="about__Title">Transform your brand</h2>
          <p className="about__About">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="about__LearnMore about__UnderlineYellow">
            learn more
          </button>
        </div>
      </article>
      {/* //--Article 2 */}
      <article className="about__ArticleWhite">
        <div className="about__IntroImg about__ImgStandOut"></div>
        <div className="about__Content">
          <h2 className="about__Title"> Stand out to the right audience</h2>
          <p className="about__About">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="about__LearnMore about__UnderlinePink">
            {' '}
            learn more
          </button>
        </div>
        {/* ----------OTHER TYPE OF ARTICLE----------- */}
      </article>
      <div className="about__ArticleGraphicPhoto">
        <article className="about__ImgBackground about__ImgGraphicDesign">
          <div className="about__ContentImg about__Graphic">
            <h3 className="about__TitleImg"> Graphic Design</h3>
            <p className="about__AboutImg">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </article>
        <article className="about__ImgBackground about__ImgPhotography ">
          <div className="about__ContentImg about__Photography">
            <h3 className="about__TitleImg">Photography</h3>
            <p className="about__AboutImg">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;

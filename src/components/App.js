import React from 'react';

function App() {
  return (
    <>
      <header>
        <nav>About Services Projects Contact</nav>
        <h1>We are creatives</h1>
      </header>
      <main>
        {/* //SECTION WHAT WE DO */}
        <section>
          <article>
            <h2> Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <p>Learn more </p>
          </article>
          <article>
            <h2> Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <p> Learn more</p>
          </article>
          <article>
            <h3> Graphic design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </article>
          <article>
            {' '}
            <h3>Photography</h3>
            <p>
              {' '}
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </article>
        </section>
        {/* //SECTION TESTIMONIALS */}
        <section>
          <h4>Client testimonials</h4>
          <article>
            {' '}
            {/* img emily */}
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.{' '}
            </p>
            <p> Emily R.</p>
            <p> Marketing Director</p>
          </article>
          <article>
            {/* img Thomas */}
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.{' '}
            </p>
            <p>Thomas S. </p>
            <p>Chief Operating Officer</p>
          </article>
          <article>
            {' '}
            {/* <IMG>JENNIE</IMG> */}
            <p>
              {' '}
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p> Jennie F. </p>
            <p> Business Owner </p>
          </article>
        </section>
      </main>

      <footer>
        <nav>About Services Projects Contact</nav>
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
      </footer>
    </>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import About from './About';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <About />

        <section>
          <Testimonials />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

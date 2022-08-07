import React from 'react';
import Header from './Header';
import About from './About';
import Testimonials from './Testimonials';
import Footer from './Footer';
import MixImages from './MixImages';
// import NavMobile from './NavMobile';

function App() {
  return (
    <>
      {/* <NavMobile /> */}
      <Header />
      <main>
        <About />
        <Testimonials />
        <MixImages />
      </main>
      <Footer />
    </>
  );
}

export default App;

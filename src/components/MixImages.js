import React from 'react';
import '../styles/components/MixImages.scss';

//MOBILE
import Milk from '../images/mobile/image-gallery-milkbottles.jpg';
import Orange from '../images/mobile/image-gallery-orange.jpg';
import Cone from '../images/mobile/image-gallery-cone.jpg';
import Sugar from '../images/mobile/image-gallery-sugar-cubes.jpg';

//DESKTOP

import MilkDesktop from '../images/desktop/image-gallery-milkbottles.jpg';
import OrangeDesktop from '../images/desktop/image-gallery-orange.jpg';
import ConeDesktop from '../images/desktop/image-gallery-cone.jpg';
import SugarDesktop from '../images/desktop/image-gallery-sugarcubes.jpg';

function MixImages() {
  return (
    <>
      <section className="mixImages">
        <img src={Milk} alt="Milk bottles" className="mixImages__Img" />
        <img src={Orange} alt="Orange" className="mixImages__Img" />
        <img src={Cone} alt="Icecream Cone" className="mixImages__Img" />
        <img src={Sugar} alt="Sugar Cubes" className="mixImages__Img" />
      </section>

      <section className="mixImagesDesktop">
        <img
          src={MilkDesktop}
          alt="Milk bottles"
          className="mixImagesDesktop__Img"
        />
        <img
          src={OrangeDesktop}
          alt="Orange"
          className="mixImagesDesktop__Img"
        />
        <img
          src={ConeDesktop}
          alt="Icecream Cone"
          className="mixImagesDesktop__Img"
        />
        <img
          src={SugarDesktop}
          alt="Sugar Cubes"
          className="mixImagesDesktop__Img"
        />
      </section>
    </>
  );
}

export default MixImages;

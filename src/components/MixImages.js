import React from 'react';
import '../styles/components/MixImages.scss';
import Milk from '../images/mobile/image-gallery-milkbottles.jpg';
import Orange from '../images/mobile/image-gallery-orange.jpg';
import Cone from '../images/mobile/image-gallery-cone.jpg';
import Sugar from '../images/mobile/image-gallery-sugar-cubes.jpg';

function MixImages() {
  return (
    <>
      <section className="mixImages">
        <img src={Milk} alt="Milk bottles" className="mixImages__Img" />
        <img src={Orange} alt="Orange" className="mixImages__Img" />
        <img src={Cone} alt="Icecream Cone" className="mixImages__Img" />
        <img src={Sugar} alt="Sugar Cubes" className="mixImages__Img" />
      </section>
    </>
  );
}

export default MixImages;

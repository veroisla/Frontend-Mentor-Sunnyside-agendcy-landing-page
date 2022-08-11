import React from 'react';
import Emily from '../images/people/image-emily.jpg';
import Thomas from '../images/people/image-thomas.jpg';
import Jennie from '../images/people/image-jennie.jpg';
import '../styles/components/Testimonials.scss';

function Testimonials() {
  return (
    <section className="testimonials">
      {' '}
      <h4 className="testimonials__Title">client testimonials</h4>
      <div className="testimonials__desktop">
        {' '}
        <article className="testimonials__Article">
          <img
            src={Emily}
            alt="Marketing Director"
            className="testimonials__Img"
          />
          <p className="testimonials__About">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.{' '}
          </p>
          <p className="testimonials__Name"> Emily R.</p>
          <p className="testimonials__Job"> Marketing Director</p>
        </article>
        <article className="testimonials__Article">
          <img
            src={Thomas}
            alt="Chief Operating Officer"
            className="testimonials__Img"
          />
          <p className="testimonials__About">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.{' '}
          </p>
          <p className="testimonials__Name">Thomas S. </p>
          <p className="testimonials__Job">Chief Operating Officer</p>
        </article>
        <article className="testimonials__Article">
          <img
            src={Jennie}
            alt="Business Owner"
            className="testimonials__Img"
          />
          <p className="testimonials__About">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="testimonials__Name"> Jennie F. </p>
          <p className="testimonials__Job"> Business Owner </p>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;

import React from 'react';
import Slider from '../ui/Slider';

const PromoSection: React.FC = () => {
  return (
    <section className="section promo" id="promo">
      <div className="promo__content">
        <h2 className="promo__title section__title">
          Candidates with Creative & <br />Engineering Backgrounds
        </h2>
        <p className="promo__description">
          This is the place to show yourself and land entry level jobs at
          cutting-edge companies. Launch <br />your career here.
        </p>
        <div className="promo__buttons">
          <button className="promo__button">Join Now</button>
          <p className="promo__button__text">
            Looking for candidate's? <a className="promo__content__text" >Hire now</a>
          </p>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default PromoSection;
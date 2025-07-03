import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section__about" id="about">
      <h2 className="about__title">Everything you want to know in one place.</h2>
      <div className="about__wrap">
        <div className="about__wrapper">
          <div className="about__inner">
            <div className="about__inner__war">
              <img className="about__avatar" src="/images/Ellipse.png" alt="" />
              <p className="about__subject">Pristia Candra</p>
              <p className="about__caption">Senior Product Designer</p>
              <div className="about__col">
                <p>Los Angeles, USA</p>
                <p className="about__slogan">Fulltime Freelancer</p>
              </div>
            </div>

            <div className="about__registertext">
              <p className="about__register">Figma</p>
              <p className="about__register">UI Design</p>
              <p className="about__register">UX Design</p>
            </div>
          </div>
          
          <div>
            <p className="about__text1">About Me</p>
            <p className="about__slogan__text">
              Hi, I’m a final year student completing a bachelor’s In information Technology in QUT, with experience. We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and creative channel Bright Side.
            </p>
          </div>
          
          <p className="about__text">Portfolio</p>
          <div className="about__img">
            <img src="/images/Fram.png" alt="" />
            <img src="/images/Fram2.png" alt="" />
            <img src="/images/Fram3.png" alt="" />
          </div>
          
          <p className="about__ltext">Work Experience</p>
          <div className="about__list__item">
            <div>
              <div className="about__conteiners">
                <div className="about__images">
                  <img src="/images/SMS.png" alt="#" />
                </div>
                <div className="about__email">
                  <p className="about__normol">Email</p>
                  <p className="about__normol1">pristia@gmail.com</p>
                </div>
              </div>

              <div className="about__conteiners">
                <div className="about__images">
                  <img src="/images/CALL.png" alt="" />
                </div>
                <div className="about__email">
                  <p className="about__normol2">Phone Number</p>
                  <p className="about__normol3">0809021920139</p>
                </div>
              </div>
              
              <div>
                <p className="about__content">Download Resume</p>
                <p className="about__content2">Message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about__list">
        <a className="about__item" href="#">
          <img className="about__icon" src="/images/rast.png" alt="" />
          <h3 className="about__title">Professional Profile</h3>
          <p className="about__subtitle">
            We know finding the right job is stressful, so we've <br /> made it simple.
            It only takes a few minutes. Create <br /> a free portfolio on briefolio to show your best self
            <br /> and get discovered by recruiter
          </p>
        </a>
        <a className="about__item" href="#">
          <img className="about__icon" src="/images/rast2.png" alt="" />
          <h3 className="about__title">Best Portfolio</h3>
          <p className="about__subtitle">
            We know finding the right job is stressful, so we've <br /> made it simple.
            It only takes a few minutes. Create <br /> a free portfolio on briefolio to show your best self
            <br /> and get discovered by recruiter
          </p>
        </a>
        <a className="about__item" href="#">
          <img className="about__icon" src="/images/rast2.png" alt="" />
          <h3 className="about__title">Powerful Resume</h3>
          <p className="about__subtitle">
            We know finding the right job is stressful, so we've <br /> made it simple.
            It only takes a few minutes. Create <br /> a free portfolio on briefolio to show your best self
            <br /> and get discovered by recruiter
          </p>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
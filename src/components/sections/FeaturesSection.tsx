import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="section__features" id="features">
      <div className="features__content">
        <img className="features__img" src="/images/frame2.png" alt="" />
        <div className="features__wrap">
          <h2 className="features__title">Connect With Recruiter</h2>
          <p className="features__subtitle">
            Get instant access to a curated pool of top creative & tech talent
            actively seeking their next role. <br /> Find highly qualified job!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
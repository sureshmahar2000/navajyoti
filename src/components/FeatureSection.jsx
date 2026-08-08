import React from 'react';

const FeatureSection = () => {
  const featureImages = [
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=375&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=375&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=375&fit=crop'
  ];

  return (
    <section id="features">
      <h2 className="section-title">Why Choose Navajyoti</h2>
      
      <div className="asset-row">
        <div className="asset-text">
          <h3>🎯 Hands-on Learning</h3>
          <p>
            Work on real projects from day one. Our curriculum is designed 
            by industry professionals to give you practical skills that 
            employers are looking for.
          </p>
        </div>
        <div className="asset-image">
          <img src={featureImages[0]} alt="Hands-on learning at Navajyoti" />
        </div>
      </div>

      <div className="asset-row" style={{ background: '#fefcf3' }}>
        <div className="asset-image">
          <img src={featureImages[1]} alt="Expert instructors at Navajyoti" />
        </div>
        <div className="asset-text">
          <h3>👨‍🏫 Expert Instructors</h3>
          <p>
            Learn from certified professionals with years of industry 
            experience in Python, DevOps, Cybersecurity, and emerging 
            technologies.
          </p>
        </div>
      </div>

      <div className="asset-row">
        <div className="asset-text">
          <h3>🏆 Career Support</h3>
          <p>
            Resume reviews, interview preparation, job placement assistance, 
            and lifelong career guidance to help you land your dream tech role.
          </p>
        </div>
        <div className="asset-image">
          <img src={featureImages[2]} alt="Career support at Navajyoti" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Navajyoti Institute</h2>
      <p style={{ 
        fontSize: '1.1rem', 
        color: '#4a4a5a', 
        maxWidth: '800px', 
        marginBottom: '2rem',
        lineHeight: '1.7'
      }}>
        Navajyoti Institute Pvt. Ltd. is a premier computer training center dedicated 
        to bridging the gap between academic knowledge and industry requirements. 
        We empower individuals with cutting-edge technical skills.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <div className="icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To provide high-quality, industry-relevant technical education that 
            transforms beginners into skilled professionals ready to excel in 
            the competitive tech industry.
          </p>
        </div>

        <div className="about-card">
          <div className="icon">👁️</div>
          <h3>Our Vision</h3>
          <p>
            To become Nepal's leading technology training institute, recognized 
            globally for producing innovative, ethical, and highly competent 
            IT professionals who drive digital transformation.
          </p>
        </div>

        <div className="about-card">
          <div className="icon">⭐</div>
          <h3>Our Goals</h3>
          <p>
            • Train 1000+ students annually<br />
            • Achieve 99% placement rate<br />
            • Build industry partnerships<br />
            • Foster innovation and entrepreneurship<br />
            • Bridge the digital skills gap in Nepal
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
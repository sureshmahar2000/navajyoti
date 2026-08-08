import React from 'react';

const Hero = () => {
  const heroImage = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=450&fit=crop&crop=center';

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Empowering <span>Future</span> <br />
          Tech Leaders
        </h1>
        <p>
          Master Python, DevOps, Cybersecurity, and more at Navajyoti Institute.
          Industry-focused training with practical experience.
        </p>
        <div className="hero-stats">
          <div>
            500+ <span>Students Trained</span>
          </div>
          <div>
            12 <span>Expert Courses</span>
          </div>
          <div>
            98% <span>Placement Rate</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Navajyoti Institute Training Center" />
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import CourseGrid from './CourseGrid';
import About from './About';
import FeatureSection from './FeatureSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CourseGrid />
      <About />
      <FeatureSection />
    </>
  );
};

export default HomePage;
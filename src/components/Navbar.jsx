import React from 'react';
import { Link } from 'react-router-dom';
// Import image directly
import logoImage from '../assets/navajyoti.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img 
          src={logoImage} 
          alt="Navajyoti Institute" 
          className="logo-image"
        />
        Navajyoti<span>Institute</span>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <button 
          className="btn-enroll-nav"
          onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="fas fa-user-graduate"></i> Enroll Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
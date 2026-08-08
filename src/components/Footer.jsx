import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4><i className="fas fa-map-marker-alt" style={{ color: '#FFD700' }}></i> Visit Us</h4>
          <p><i className="fas fa-location-dot"></i> Kalanki-14, Kathmandu, Nepal</p>
          <p><i className="fas fa-phone"></i> +977-9813008064</p>
          <p><i className="fas fa-envelope"></i> info@navajyoti.edu.np</p>
          <p><i className="fas fa-clock"></i> Mon-Sat: 6:00 AM - 7:00 PM</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/book-meeting"><i className="fas fa-calendar-check"></i> Book a Meeting</a></li>
            <li><a href="/faqs"><i className="fas fa-question-circle"></i> FAQs</a></li>
            <li><a href="/#about"><i className="fas fa-eye"></i> Vision & Mission</a></li>
            <li><a href="/career"><i className="fas fa-briefcase"></i> Career</a></li>
            <li><a href="/feedback"><i className="fas fa-comment"></i> Feedback</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Training & Resources</h4>
          <ul>
            <li><a href="/#courses"><i className="fas fa-laptop-code"></i> IT Training</a></li>
            <li><a href="/tutorials"><i className="fas fa-book-open"></i> Tutorials</a></li>
            <li><a href="/blog"><i className="fas fa-blog"></i> Blog</a></li>
            <li><a href="/terms"><i className="fas fa-file-contract"></i> Terms of Services</a></li>
            <li><a href="/privacy"><i className="fas fa-shield-alt"></i> Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col map-col">
          <h4>Find Us on Map</h4>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56520.57253529966!2d85.27689678914119!3d27.71589890086105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb187a32e7c143%3A0x4d3f23a8b0c3e5c7!2sKalanki%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000" 
              width="100%" 
              height="180" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Navajyoti Institute Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <strong style={{ color: '#1a1a2e' }}>Navajyoti Institute Pvt. Ltd.</strong> &copy; 2026. All rights reserved.
        </div>
        <div className="footer-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
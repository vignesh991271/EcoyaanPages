import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: ecoyaan423@gmail.com</p>
        <p>Phone: ++91 9980490777</p>
        <p>Address: Srirampura, Bangloore, India</p>
      </div>
      <div className="footer-section">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros id magna posuere cursus.</p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Ecoyaan All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

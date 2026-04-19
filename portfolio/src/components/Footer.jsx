import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-3">

      <div className="container">

        <div className="row">


          <div className="col-md-6 mb-4">
            <h4 className="fw-bold">Anjali Shinde</h4>
            <p className="text-secondary">
              React Developer building clean and responsive web applications using React.
            </p>
          </div>


          <div className="col-md-6 text-md-end mb-4">

            <div className="mb-3">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>


            <div>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

          </div>

        </div>

        {/* Divider */}
        <hr className="border-light" />

        {/* Bottom */}
        <div className="text-center">
          <p className="text-secondary mb-0">
            © 2026 Rajashinde — All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
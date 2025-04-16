import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedin, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer-container'>
      {/* Other footer sections can go here if needed */}

      <section className='social-media'>
        <div className='footer-bottom'>
          <div className='footer-logo-center'>
            <FontAwesomeIcon icon={faFaceSmile} className='logo-icon' />
          </div>
          <small className='website-rights'>© {currentYear}</small>
          <div className='social-icons-centered'>
            <a
              className='social-icon-link'
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className='social-icon-link'
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className='social-icon-link'
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>

          {/* TikTok handle at the bottom */}
          <div className='tiktok-footer'>
            <FontAwesomeIcon icon={faTiktok} className='tiktok-icon' /> @pugbentobug
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
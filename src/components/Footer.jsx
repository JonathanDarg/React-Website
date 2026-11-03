import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Reveal from './Reveal';
import { site, asset } from '../siteConfig';
import './Footer.css';

const socials = [
  { href: site.socials.linkedin, icon: faLinkedin, label: 'LinkedIn' },
  { href: site.socials.github, icon: faGithub, label: 'GitHub' },
  { href: site.socials.instagram, icon: faInstagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal y={60}>
          <Link to="/contact" className="footer__name">
            {site.name}
          </Link>
        </Reveal>

        <div className="footer__line">
          <div className="footer__who">
            <Link to="/pug" className="footer__pug" aria-label="Pug page">
              <img src={asset('images/HeartPug1.JPG')} alt="" loading="lazy" />
            </Link>
            <span>Computer Science, Loyola University Maryland</span>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/pug">Pug</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="footer__end">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
            <small>© {new Date().getFullYear()}</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

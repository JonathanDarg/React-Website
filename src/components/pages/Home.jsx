import React from 'react';
import PageTransition from '../PageTransition';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Reveal from '../Reveal';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { site, asset } from '../../siteConfig';
import './Home.css';

const ctaSocials = [
  { href: site.socials.linkedin, icon: faLinkedin, label: 'LinkedIn' },
  { href: site.socials.github, icon: faGithub, label: 'GitHub' },
  { href: `mailto:${site.email}`, icon: faEnvelope, label: `Email ${site.email}` },
];

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <Cards />

      <section className="section intro">
        <div className="container intro__grid">
          <Reveal className="intro__img-wrap">
            <img src={asset('images/animated_me.png')} alt="Illustration of Jonathan with two pugs" />
          </Reveal>
          <div className="intro__text">
            <Reveal>
              <h2 className="section-title">Hi, I'm Jonathan.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="intro__lead">
                I'm finishing a Computer Science degree at Loyola University Maryland and spending my free
                time building things like this site, with plenty of supervision from my pug.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="intro__btns">
              <Button to="/about" variant="outline">More about me</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div className="container cta__inner">
          <Reveal>
            <h2 id="cta-title" className="cta__title">Visit my socials</h2>
          </Reveal>

          {/* LinkedIn first, GitHub in the middle, email last */}
          <ul className="cta__icons">
            {ctaSocials.map((s, i) => (
              <Reveal as="li" key={s.label} delay={0.15 + i * 0.06}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.35}>
            <Button to="/contact" size="lg">
              Send a message <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

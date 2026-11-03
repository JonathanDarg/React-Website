import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import { asset } from '../siteConfig';
import './HeroSection.css';

const ease = [0.22, 1, 0.36, 1];

// Splits a line into letters that rise in one after another
function AnimatedLine({ text, delay = 0 }) {
  return (
    <span className="hero__line" aria-hidden="true">
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="hero__char"
          initial={{ y: '105%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.9, delay: delay + i * 0.03, ease }}
        >
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax: video drifts slower than the page, text fades as you scroll away
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="hero">
      <motion.div className="hero__media" style={{ y: videoY }}>
        <video src={asset('videos/video-1.mp4')} autoPlay loop muted playsInline />
      </motion.div>
      <div className="hero__scrim" />

      <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
        <h1 className="hero__title" aria-label="Jonathan Dargakis">
          <AnimatedLine text="Jonathan" delay={0.2} />
          <AnimatedLine text="Dargakis" delay={0.4} />
        </h1>

        <div className="hero__foot">
          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
          >
            ʕ•ᴥ•ʔ Senior in Computer Science at Loyola University Maryland, building for the web.
          </motion.p>

          <motion.div
            className="hero__btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
          >
            <Button to="/about" size="lg">
              About me <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Get in touch
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

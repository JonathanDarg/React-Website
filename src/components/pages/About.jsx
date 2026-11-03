import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../PageTransition';
import Reveal from '../Reveal';
import { Button } from '../Button';
import { asset } from '../../siteConfig';
import './About.css';

// Edit these lists to update the About page
const facts = [
  { label: 'School', value: 'Loyola University Maryland' },
  { label: 'Major', value: 'Computer Science' },
  { label: 'Year', value: 'Senior' },
  { label: 'Sidekick', value: 'A black pug' },
];

const skills = ['React', 'JavaScript', 'HTML & CSS', 'Git & GitHub', 'Responsive design'];

export default function About() {
  return (
    <PageTransition className="page about">
      <section className="section">
        <div className="container about__hero">
          <motion.div
            className="about__portrait"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={asset('images/animated_me.png')}
              alt="Illustration of Jonathan with two pugs"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          <div className="about__text">
            <Reveal>
              <h1 className="about__title">Hello, I'm Jonathan.</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="about__lead">
                I'm a senior studying Computer Science at Loyola University Maryland. I like building things
                people can see and click on, and this website is where I try out new ideas.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="about__btns">
              <Button to="/contact">Get in touch</Button>
              <Button to="/pug" variant="outline">See the pug</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about__details">
        <div className="container">
          <dl className="facts">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08} className="fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </Reveal>
            ))}
          </dl>

          <div className="skills">
            <Reveal>
              <h2>Things I work with</h2>
            </Reveal>
            <ul>
              {skills.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

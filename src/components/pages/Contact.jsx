import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import PageTransition from '../PageTransition';
import Reveal from '../Reveal';
import { Button } from '../Button';
import { site } from '../../siteConfig';
import './Contact.css';

const socials = [
  { href: site.socials.linkedin, label: 'LinkedIn' },
  { href: site.socials.github, label: 'GitHub' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: opens the visitor's email app with the message filled in
  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition className="page contact">
      <section className="section">
        <div className="container contact__grid">
          <div>
            <Reveal>
              <h1 className="contact__title">Let's talk.</h1>
              <p className="contact__lead">
                Questions, opportunities, or just want to say hi? Send a message, or reach me directly.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="email">
              <a href={`mailto:${site.email}`} className="email__address">{site.email}</a>
              <button className="email__copy" onClick={copyEmail}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'done' : 'copy'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {copied ? 'Copied' : 'Copy address'}
                  </motion.span>
                </AnimatePresence>
              </button>
            </Reveal>

            <ul className="contact__socials">
              {socials.map((s, i) => (
                <Reveal as="li" key={s.label} delay={0.15 + i * 0.06}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    <span>{s.label}</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.15}>
            <form className="contact__form" onSubmit={send}>
              <label>
                <span>Your name</span>
                <input name="name" value={form.name} onChange={update} required autoComplete="name" />
              </label>
              <label>
                <span>Your email</span>
                <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="6" value={form.message} onChange={update} required />
              </label>
              <Button type="submit" size="lg">
                Send message <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

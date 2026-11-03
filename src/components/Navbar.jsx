import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Button } from './Button';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/pug', label: 'Pug' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  // Solid bar once you scroll; slide away when scrolling down, back when scrolling up
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 240 && !open);
  });

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  // Stop the page behind the mobile menu from scrolling
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        // Solid once scrolled, and always on the pug page so the links read over the light video
        className={`navbar ${(scrolled || pathname === '/pug') && !open ? 'navbar--solid' : ''}`}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="navbar__inner container">
          <Link to="/" className="navbar__logo" aria-label="Home">
            Jonathan Dargakis
          </Link>

          <ul className="navbar__links">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end className="navbar__link">
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-mark"
                          className="navbar__mark"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__cta">
            <Button to="/contact" size="md">Let's talk</Button>
          </div>

          <button
            className={`burger ${open ? 'burger--open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
            >
              {links.map((l) => (
                <motion.li
                  key={l.to}
                  variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink to={l.to} end className="mobile-menu__link">
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Pug from './components/pages/Pug';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // Wait for the old page to fade out, then jump to the top and fade the new one in
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pug" element={<Pug />} />
        <Route path="/sign-up" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

// The pug page is only the full-screen video, so it has no footer
function FooterUnlessPug() {
  const { pathname } = useLocation();
  return pathname === '/pug' ? null : <Footer />;
}

export default function App() {
  return (
    // reducedMotion="user" turns animations off for people who ask their OS for less motion
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <FooterUnlessPug />
      </BrowserRouter>
    </MotionConfig>
  );
}

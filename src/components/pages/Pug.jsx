import React from 'react';
import { motion } from 'motion/react';
import { asset } from '../../siteConfig';
import './Pug.css';

/* Full-screen pug. That's the whole page. */
export default function Pug() {
  return (
    <motion.section
      className="pug"
      aria-label="Video of a pug licking"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <video className="pug__video" autoPlay loop muted playsInline>
        <source src={asset('videos/Pug_Licking.mp4')} type="video/mp4" />
      </video>
    </motion.section>
  );
}

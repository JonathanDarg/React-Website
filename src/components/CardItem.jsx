import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/* One tile in the highlights grid: image, label, caption */
export default function CardItem({ src, text, label, path, className = '', index = 0 }) {
  return (
    <motion.li
      className={`card ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={path} className="card__link">
        <img className="card__img" src={src} alt={text} loading="lazy" />
        <div className="card__shade" />
        <div className="card__body">
          <p className="card__text">{text}</p>
          <span className="card__label">{label}</span>
          <span className="card__arrow" aria-hidden="true">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </Link>
    </motion.li>
  );
}

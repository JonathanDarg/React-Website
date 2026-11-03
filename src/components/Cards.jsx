import React from 'react';
import CardItem from './CardItem';
import Reveal from './Reveal';
import { asset } from '../siteConfig';
import './Cards.css';

// Edit these to change the tiles on the home page.
// The first tile is the large one in the grid.
const cards = [
  {
    src: asset('images/img-9.jpg'),
    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    path: '/about',
  },
  {
    src: asset('images/HeartPug.JPG'),
    text: 'Meet Bento, the pug who runs this website',
    label: 'Bento',
    path: '/pug',
  },
  {
    src: asset('images/img-2.jpg'),
    text: 'Travel through the Islands of Bali in a Private Cruise',
    label: 'Luxury',
    path: '/about',
  },
  {
    src: asset('images/img-3.jpg'),
    text: 'Fish in the Maldives while relaxing in a luxury spa resort',
    label: 'Tranquility',
    path: '/about',
  },
];

export default function Cards() {
  return (
    <section id="highlights" className="section highlights">
      <div className="container">
        <div className="highlights__head">
          <Reveal>
            <h2 className="section-title">Welcome in. A few highlights.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Places, projects, and one very important pug. Click any card to learn more.
            </p>
          </Reveal>
        </div>

        <ul className="bento">
          {cards.map((c, i) => (
            <CardItem key={c.text} {...c} index={i} className={i === 0 ? 'card--big' : ''} />
          ))}
        </ul>
      </div>
    </section>
  );
}

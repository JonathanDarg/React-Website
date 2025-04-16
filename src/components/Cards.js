import React from 'react'
import './Cards.css'
import Carditem from './Carditem'

function Cards() {
  return (
    <div className="cards">
        <h1>WELCOME TO MY WEBSITE</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
            <ul className="cards__items">
              <Carditem
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/about'
              />
              <Carditem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/about'
              />
              <Carditem
                src='images/img-3.jpg'
                text='Fish in the Maldives while relaxing in a luxury spa resort'
                label='Tranquility'
                path='/about'
              />
            </ul>
            {/* second row of cards */}
            <ul className="cards__items">
              <Carditem
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/about'
              />
              <Carditem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/about'
              />
              <Carditem
                src='images/img-3.jpg'
                text='Fish in the Maldives while relaxing in a luxury spa resort'
                label='Tranquility'
                path='/about'
              />
            </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards

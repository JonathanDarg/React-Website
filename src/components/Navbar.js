import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            <FontAwesomeIcon icon={faFaceSmile} className="logo-icon" />
            MyApp
            </Link>
          </div>    
        </nav>
      </>
    );
  }

export default Navbar

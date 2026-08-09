import React from 'react';
import '../../App.css';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <div className="about-inner">
                <img src={`${process.env.PUBLIC_URL}/images/animated_me.png`} alt="animated me" className="about-anim" />
                <div className="about-text">
                    <h1>About</h1>
                    <p>Hello! My name is Jonathan Dargakis and I am currently a senior studying Computer Science at Loyola Univeristy Maryland.</p>      
                </div>
            </div>
        </div>
    );
}

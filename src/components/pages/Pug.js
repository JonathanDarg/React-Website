import React from 'react';
import './Pug.css';

function Pug() {
  return (
    <div className="pug-page" style={{ padding: '3rem', textAlign: 'center' }}>
      <div className="video-wrapper">
        <video
          className="pug-video"
          preload="metadata"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src={`${process.env.PUBLIC_URL}/videos/Pug_Licking.mp4`} type="video/mp4" />
    
        </video>
      </div>
    </div>
  );
}

export default Pug;

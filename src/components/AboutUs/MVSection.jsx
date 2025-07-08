// MissionVisionBackground.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../AboutUs/MVSection.css';

const MissionVisionBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Container animation
  const containerAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    config: { tension: 120, friction: 14 }
  });

  // Animations for each card
  const backgroundAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
    delay: 300,
    config: { tension: 180, friction: 12 }
  });
  
  const missionAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
    delay: 500,
    config: { tension: 180, friction: 12 }
  });

  const visionAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
    delay: 700,
    config: { tension: 180, friction: 12 }
  });

  return (
    <div className="mission-vision-background">
      <animated.div 
        className="container"
        style={containerAnimation}
      >
        <div className="section-header">
          <h2>Our Foundation</h2>
          <div className="divider"></div>
        </div>
        
        <div className="cards-layout">
          {/* Company Background Card - Top */}
          <animated.div 
            className="card background-card"
            style={backgroundAnimation}
          >
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3>Company Background</h3>
            <p>
              Founded by passionate scientists, CERA MEDICAL was established to bring cutting-edge biomedical research 
              to Pakistan and beyond. We collaborate with leading institutions and industry partners to drive innovation 
              in healthcare.
            </p>
          </animated.div>
          
          {/* Mission and Vision Cards - Bottom Row */}
          <div className="bottom-cards">
            <animated.div 
              className="card mission-card"
              style={missionAnimation}
            >
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9.5 9.5l5 5" />
                  <path d="M14.5 9.5l-5 5" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To accelerate the development of safe and effective treatments for diseases by providing 
                comprehensive preclinical research and development services.
              </p>
            </animated.div>
            
            <animated.div 
              className="card vision-card"
              style={visionAnimation}
            >
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3.5" />
                  <path d="M21 12c-1.4 2-4.5 4-9 4s-7.6-2-9-4c1.4-2 4.5-4 9-4s7.6 2 9 4" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a trusted partner for researchers and pharmaceutical companies worldwide, 
                driving innovation and improving patient outcomes.
              </p>
            </animated.div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default MissionVisionBackground;
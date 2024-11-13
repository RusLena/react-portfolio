// Header.js
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  // React Spring Hook for opacity animation
  const slideInProps = useSpring({
    to: { transform: "translateX(0)", opacity: 1 },
    from: { transform: "translateX(-100%)", opacity: 0 },
    config: { tension: 200, friction: 20 }, // Smooth slide
  });

  // State to trigger the color change effect after animation completes
  const [isGlowing, setIsGlowing] = useState(false);

  // Handle the completion of the Framer Motion animation
  const handleAnimationComplete = () => {
    setIsGlowing(true); // Trigger color pulse after animation
  };
  // The click sound function
  const playClickSoundAndOpenLink = (event) => {
    event.preventDefault();  // Prevent the default link behavior
  
    // Create the audio element and play the sound
    const clickSound = new Audio("./sounds/mixkit-fast-double-click-on-mouse-275.wav");
    clickSound.play();
  
    // Check if the device is mobile
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isSafari = /Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent)
  const delay = isMobile && isSafari ? 200 : 100;
    // Delay the link opening only for mobile devices
    
      setTimeout(() => {
        window.open("https://github.com/RusLena", "_blank");
      }, delay);  
  };
  
  return (
    <header className="header">
      <Navbar /> 
      <section id="about" className="about-section">
    
        <motion.h1
          className={`heading ${isGlowing ? "glow" : ""}`}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={handleAnimationComplete} // Trigger color change after animation
        >
          Hello,
          <br />
          my name is Elena.
          <br />
          I'm a Freelance Frontend Developer.
        </motion.h1>

        <img
          className="photo"
          src="/images/Portfolio-photo.png"
          alt="me in london"
        />

        <animated.div className="intro" style={slideInProps}>
          <p>
            I gained foundational knowledge in Front-End Web Development through
            the edX bootcamp and further honed my skills during a 16-week
            internship program facilitated by Virtual Internships, where I
            practiced working on both solo and team projects, building websites
            and apps using HTML5, CSS, JavaScript, jQuery, React.js, Node.js,
            and Git/GitHub. I’m passionate about creating responsive websites
            that offer a seamless experience on any device and developing
            interactive user interfaces to enhance user engagement.
          </p>
          <motion.a
            href="https://github.com/RusLena"
            target="_blank"
            className="head-btn"
            onClick={playClickSoundAndOpenLink} // Play sound on click
          >
            My projects
          </motion.a>
        </animated.div>
      </section>
    </header>
  );
};

export default Header;

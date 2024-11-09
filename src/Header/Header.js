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

  return (
    <header className="header">
      <Navbar /> {/* Render Navbar here */}
      <section id="about" className="about-section">
        {/* Framer Motion for Heading Animation */}
        <motion.h1
          className={`heading ${isGlowing ? "glow" : ""}`}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={handleAnimationComplete} // Trigger color change after animation
        >
          Hello,<br />my name is Elena.<br />I'm a Freelance Frontend Developer.
        </motion.h1>

        {/* Static image, no animation */}
        <img
          className="photo"
          src="/images/Portfolio-photo.png"
          alt="me in london"
        />

        {/* React Spring for Intro Text animation */}
        <animated.div className="intro" style={slideInProps}>
          <p>
            I gained foundational knowledge in Front-End Web Development through the edX bootcamp and further honed my skills during a 16-week internship program facilitated by Virtual Internships, where I practiced working on both solo and team projects, building websites and apps using HTML5, CSS, JavaScript, jQuery, React.js, Node.js, and Git/GitHub. I’m passionate about creating responsive websites that offer a seamless experience on any device and developing interactive user interfaces to enhance user engagement.
          </p>
          <motion.a
            href="https://github.com/RusLena?tab=stars"
            target="_blank"
            className="head-btn"
          >
            My projects
          </motion.a>
        </animated.div>
      </section>
    </header>
  );
};

export default Header;
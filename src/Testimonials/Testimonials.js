import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to close the popup
  const closePopup = () => {
    setIsVisible(false);
  };

  // Detect when user scrolls to the bottom
  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (isBottom) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't render popup if it's not visible
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Customer Testimonials</h2>
        <p>
          "I am writing to wholeheartedly endorse Mrs. Elena Golovko, whom I worked with on a project/
          internship program. Her exceptional deep market analysis skills and innovative approach to
          website design were instrumental in our recent project. Elena consistently exceeded expectations,
          demonstrating a strong work ethic, problem-solving abilities, and a positive attitude. I have no
          doubt that she will be a valuable asset to any team, and I hope and look forward to having a
          suitable post for her at my company."
          <br /> Husni Abu Samrah
          <br /> Co-Founder and CEO at GraviLog
          <br /> CEO of MobiStine Technology
        </p>
        
        <button className="close-btn" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

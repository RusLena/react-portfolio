// Footer.js
import React from 'react';
import './Footer.css'; // Link to your CSS file

const Footer = () => {
  return (
    <footer id="footer" className="end">
      <p>Contact Me:</p>
      <a className="anchor" href="mailto:my.portfolio.uk@outlook.com">Email</a>
      <a className="anchor" href="https://www.linkedin.com/in/elena-g-946b2b334" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a className="anchor" href="https://www.facebook.com/profile.php?id=61558666816390" target="_blank" rel="noopener noreferrer">Facebook</a>
      <p>&copy; <a href="https://github.com/RusLena" target="_blank" rel="noopener noreferrer">github.com/RusLena</a> 2024</p>
      <p>Manchester, UK</p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="end">
      <p>Contact Me:</p>

      {/* ✅ Netlify-compatible contact form */}
      <form
        name="contact"
        method="POST"
        action="/success" 
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <p>
          <input type="text" name="name" placeholder="Your Name" required />
        </p>
        <p>
          <input type="email" name="email" placeholder="Your Email" required />
        </p>
        <p>
          <textarea name="message" rows="3" placeholder="Your Message" required></textarea>
        </p>
        <p>
          <button className='send' type="submit">Send</button>
        </p>
      </form>

      {/* Social links */}
      <a
        className="anchor"
        href="https://www.linkedin.com/in/elena-g-946b2b334"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="anchor"
        href="https://www.facebook.com/profile.php?id=61558666816390"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>

      <p>
        &copy; <a href="https://github.com/RusLena" target="_blank" rel="noopener noreferrer">github.com/RusLena</a> 2025
      </p>
      <p>Manchester, UK</p>
    </footer>
  );
};

export default Footer;

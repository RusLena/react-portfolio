import React, { useState } from "react";
import "./MyWork.css";  // Ensure you import the correct styles

const MyWork = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle clicked state
  };

  return (
    <section id="projects">
      <div id="title">
        <h2>Recent Work</h2>
      </div>
      <div className={`cards-container ${clicked ? "clicked" : ""}`}>

        {/*Lottery-Number-Generator*/}
        <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>Lottery Number Generator</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project8.png" alt="freecodecamp project" />
            </div>
            <p>This project is a web-based lottery numbers generating tool designed to generate random lottery numbers for various UK lotteries, such as EuroMillions, Lotto, and Set for Life. It fetches and displays historical lottery results and provides users with suggested numbers based on selected lotteries. The app features a user-friendly interface built using HTML, CSS, and JavaScript, with a Flask-based backend to handle the scraping of results and number generation. </p>
            <strong className="date">March 2025</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://github.com/RusLena/Lottery-Number-Generator.git", "_blank")}
            >
              GitHub
            </button>
          </div>
        </div>

{/* City-skyline Project Card */}
<div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>City Skyline</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project8.png" alt="freecodecamp project" />
            </div>
            <p>This project is based on a FreeCodeCamp challenge, which I enhanced by adding a glowing sun effect, light reflection on the windows, and refining the color palette for a more realistic city skyline. Built with HTML and CSS, it features dynamic gradients, structured building patterns, and subtle lighting effects. Watch the demo here: https://youtu.be/xbeN2go3G04.</p>
            <strong className="date">March 2025</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://github.com/RusLena/City-skyline", "_blank")}
            >
              GitHub
            </button>
          </div>
        </div>

       {/* React portfolio card */}
       <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>React portfolio</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project7.png" alt="react project" />
            </div>
            <p>
            This personal portfolio showcases my front-end skills with engaging animations and interactive elements. 
            Key features include a sparkling font animation, an animated main heading, and a glassmorphism effect in the navbar. 
            Neumorphic styling and hover-activated project cards add depth, while gradient colors and responsive design create a polished experience on all devices. 
            A click sound effect was added to the "My Projects" button, with a mobile-friendly delay. Built with HTML, CSS, JavaScript, and React.
            </p>
            <strong className="date">November 2024</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://darling-trifle-9b5f89.netlify.app/", "_blank")}
            >
              Netlify
            </button>
          </div>
        </div>

        {/* Gravilog Revamp Card */}
        <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>Gravilog Revamp</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project6.png" alt="gravilog" />
            </div>
            <p>
              This project was completed as part of my internship at Gravilog.
              The goal was to design and develop the homepage of the company website for pregnant women from the ground up using modern web development technologies. Key features include a modern and calming design, a carousel to highlight various services, a card layout for content organization, a ribbon at the footer to promote the premium subscription service, and AI-generated unique images to enhance visual appeal. Developed using HTML, CSS, JavaScript, and Bootstrap.
            </p>
            <strong className="date">September 2024</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://ruslena.github.io/gravilog-revamp/", "_blank")}
            >
              GitHub
            </button>
          </div>
        </div>

        {/* New Portfolio Card */}
        <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>New Portfolio</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project1.png" alt="portfolio" />
            </div>
            <p>
              In this project, I used a modern glassmorphism design combined with dynamic fonts to create a captivating, layered effect. The background features a subtle, sparkling star effect powered by particles.js, adding a touch of movement and depth. Built with HTML, CSS, and JavaScript, this project is fully adaptive, ensuring a smooth and responsive experience across all screen sizes.
            </p>
            <strong className="date">August 2024</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://ruslena.github.io/New-Portfolio/", "_blank")}
            >
              GitHub
            </button>
          </div>
        </div>

        {/* Personal Website Card */}
        <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>Personal Website</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project5.png" alt="journal" />
            </div>
            <p>
            This was originally a bootcamp team project but was completely rebuilt by me, retaining only the original hero section. 
            It includes pages for a journal, tasks, shopping lists, exercise tracking, and food logging. 
            I rewrote the codebase, redesigned the interface, and enhanced functionality for adding and saving records. 
            Built with React and Vite, it features modern aesthetics, Animate.css animations, and React-Bootstrap for responsiveness.
            </p>
            <strong className="date">Rebuit: November 2024 </strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://my-personal-journal.netlify.app/", "_blank")}
            >
              Netlify
            </button>
          </div>
        </div>

        {/* Meow Finder Card */}
        <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>Meow Finder</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project4.png" alt="cats app" />
            </div>
            <p>
              Cat Finder App integrates with the Cat API Ninjas, featuring a carousel on the homepage displaying
              cat images and interactive modal forms with cat facts. The search page includes an intuitive search
              form and dropdown menu showcasing cat breeds. The catalogue page hosts a collection of cat profiles.
              Developed using HTML, CSS, Bootstrap, APIs, JavaScript, and jQuery.
            </p>
            <strong className="date">March 2024</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://ruslena.github.io/meow-finder/", "_blank")}
            >
              GitHub
            </button>
          </div>
        </div>

        {/* Team Generator OOP Card */}
        <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>Team Generator OOP</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project3.png" alt="generator app" />
            </div>
            <p>
              This application is designed to generate an HTML webpage that displays basic information about
              employees. It prompts the user to enter information about the team manager, engineers, and interns,
              and then generates an HTML page with their details.
            </p>
            <strong className="date">March 2024</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://github.com/RusLena/TeamGen-OOP.git", "_blank")}
            >
              GitHub
            </button>
          </div>
        </div>

        {/* City Weather Card */}
        <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>City Weather</h3>
            <div className="project-image">
              <img className="project-img" src="./images/project2.png" alt="weather app" />
            </div>
            <p>
              Weather application provides real-time weather information for cities worldwide. You can retrieve the
              city's current weather conditions and view a 5-day forecast. Features of this app:
              Search functionality for real-time weather information retrieval by city using API.
              Integration of local storage for storing and retrieving user search history.
              Display of buttons for quick access to past searches.
              Dynamic elements in the user interface based on fetched data.
            </p>
            <strong className="date">January 2024</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://ruslena.github.io/City-Weather/", "_blank")}
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;

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
              This project is a personal website aimed at helping users organize their daily routines and thoughts.
              It includes pages for journaling, task management, shopping lists, exercise tracking, and food
              logging. Developed using HTML, CSS, and JavaScript with React for interactivity, it ensures user
              data privacy through local storage. The interface features smooth animations courtesy of
              Animate.css, with additional functionality provided by React packages like Bootstrap and
              React-Icons.
            </p>
            <strong className="date">April 2024</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://bespoke-pasca-7612d0.netlify.app/", "_blank")}
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

        {/* Future Project Card */}
        <div 
          className="card" 
          onClick={handleClick}
        >
          <div className="project-content">
            <h3>Future Project</h3>
            <div className="project-image">
              <img className="project-img" src="https://via.placeholder.com/300x200" alt="future project" />
            </div>
            <p></p>
            <strong className="date">2024-2025</strong>
          </div>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => window.open("https://github.com/RusLena", "_blank")}
            >
              Netlify
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;

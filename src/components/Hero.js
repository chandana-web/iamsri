import "./Hero.css";
import {Typewriter} from 'react-simple-typewriter';
import photo from "../assets/Photo.png"
import resume from "../assets/sri_chandana(12).pdf"

export default function Hero() {
  return (
    <section id="home" className="hero-section">

      {/* ✅ Left Side Only Photo */}
      <div className="hero-left">
        <div className="photo-circle">
          <img
            src={photo}
            alt="Profile"
            className="hero-photo"
          />
        </div>
      </div>

      {/* ✅ Right Side Glass Box Only */}
      <div className="hero-right">
        <div className="hero-glass">
          {/* Content will come next */}
          {/* Small Intro */}
          <p className="hero-intro">Hello! I'm</p>

          {/* Big Name */}
          <h1 className="hero-name">Sri Chandana</h1>

          {/* Typing Roles */}
          <h2 className="hero-role">
            And I'm a{" "}
            <span className="typing">
              <Typewriter
                words={[
                    
                    "MERN Stack Developer",
                  "Frontend Developer",
                  
                  "Node.js Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </h2>

           <p className="hero-desc">
    Expertise in React, Next.js, Node.js, MongoDB, Express.js and focus on
    creating efficient, scalable, and user-friendly solutions.
  </p>
  {/* ✅ Social Buttons */}
<div className="hero-buttons">
  
  <a href="https://www.linkedin.com/in/sri-chandana-b1a519188" rel="noopener noreferrer" target="_blank" className="hero-btn">
    <span className="btn-icon">
      <i className="fa-brands fa-linkedin-in"></i>
    </span>
    Linkedin
  </a>

  <a href="https://github.com/chandana-web" rel="noopener noreferrer" target="_blank" className="hero-btn">
    <span className="btn-icon">
      <i className="fa-brands fa-github"></i>
    </span>
    GitHub
  </a>

  <a href={resume} download={resume} rel="noopener noreferrer" target="_blank" className="hero-btn">
    <span className="btn-icon">
      <i className="fa-solid fa-download"></i>
    </span>
    Resume
  </a>

</div>
  

        </div>
      </div>

    </section>
  );
}

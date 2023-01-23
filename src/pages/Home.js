import React from 'react'
import "../styles/Home.css"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Home() {
  return (
    <div className='Home'>
      <div className="about">
        <h2> Hi, My name is Siddhesh </h2>
        <div className = "prompt">
          <p> A software developer with a passion
            for learning and creating</p> 
            <LinkedInIcon/>
            <GitHubIcon/>
            <EmailIcon/>
        </div>
      </div>

      <div className="skills">
          <h1> Skills </h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End </h2>
              <span>
              HTML, CSS, JavaScript, DOM Manipulation, JSON,
               AJAX, Node.js, MySQL, React, Java, Problem-Solving
              </span>
            </li>

            <li className="item">
              <h2> Back-End </h2>
              <span>
              HTML, CSS, JavaScript, DOM Manipulation, JSON,
               AJAX, Node.js, MySQL, React, Java, Problem-Solving
              </span>
            </li>

            <li className="item">
              <h2> Languages </h2>
              <span>
              Python, JavaScript, Go, Java, Kotlin
              , C#, PHP, Swift, R, Ruby, C, C++,
               TypeScript, SQL, Nix, Scala,
              </span>
            </li>

          </ol>
      </div>
    </div>
  )
}

export default Home
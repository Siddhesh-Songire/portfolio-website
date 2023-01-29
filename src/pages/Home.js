import React from 'react'
import "../styles/Home.css"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


function Home() {
  return (
    <div className='home'>
      <div className="about">
        <h2> Hi, My name is Siddhesh </h2>
        <div className = "prompt">
          <p> A software developer with a passion
            for learning and building.</p> 
            <a href='https://www.linkedin.com/in/siddhesh-songire/' target='_blank' rel="noopener noreferrer"> <LinkedInIcon/> </a>
            <a href='https://github.com/Siddhesh-Songire' target='_blank' rel="noopener noreferrer"> <GitHubIcon/> </a>
            <a href = "mailto: siddheshsongire@gmail.com" target='_blank' rel="noopener noreferrer"> <EmailIcon/> </a>
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS ,HTML, CSS, NPM, 
              BootStrap, MaterialUI, 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,  ExpressJS,  REST, 
              MySQL, MongoDB,  AWS EC2,  Netlify,  AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> C, C++, JavaScript, Java, Python, TypeScript</span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home
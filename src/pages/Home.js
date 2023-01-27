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
            for learning and building and solving</p> 
            <a href='https://www.linkedin.com/in/siddhesh-songire/' target='_blank' rel="noopener noreferrer"> <LinkedInIcon/> </a>
            <a href='https://github.com/Siddhesh-Songire' target='_blank' rel="noopener noreferrer"> <GitHubIcon/></a>
            <a href="Siddhesh_Resume_final.pdf"><EmailIcon/></a>
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home
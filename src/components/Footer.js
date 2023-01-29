import React from 'react'
import "../styles/Footer.css"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/siddhesh-songire/' target='_blank' rel="noopener noreferrer"> <LinkedInIcon/> </a>
            <a href='https://github.com/Siddhesh-Songire' target='_blank' rel="noopener noreferrer"> <GitHubIcon/> </a>
            <a href='https://instagram.com/siddhesh_songire?igshid=ZDdkNTZiNTM=' target='_blank' rel="noopener noreferrer"> <InstagramIcon/> </a>
            <a href = "mailto: siddheshsongire@gmail.com" target='_blank' rel="noopener noreferrer"> <EmailIcon/> </a>
        </div>
        <p> &copy; 2023 siddheshsongire.com </p>
    </div>
  )
}

export default Footer
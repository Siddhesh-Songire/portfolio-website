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
            <LinkedInIcon/>
            <GitHubIcon/>
            <InstagramIcon/>
            <EmailIcon/>
        </div>
        <p> &copy; 2023 siddheshsongire.com </p>
    </div>
  )
}

export default Footer
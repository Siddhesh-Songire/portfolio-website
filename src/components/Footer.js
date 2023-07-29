import React from "react";
import "../styles/Footer.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.linkedin.com/in/siddhesh-songire/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{
                fontSize: 24,
                "&:hover": {
                  color: "#ff0099",
                  boxShadow: " 8px 8px 8px rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          </a>
          <a
            href="https://github.com/Siddhesh-Songire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={{
                fontSize: 24,
                "&:hover": {
                  color: "#ff0099",
                  boxShadow: " 8px 8px 8px rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          </a>
          <a
            href="https://instagram.com/siddhesh_songire?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              sx={{
                fontSize: 24,
                "&:hover": {
                  color: "#ff0099",
                  boxShadow: " 8px 8px 8px rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          </a>
          <a
            href="mailto: siddheshsongire@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon
              sx={{
                fontSize: 24,
                "&:hover": {
                  color: "#ff0099",
                  boxShadow: " 8px 8px 8px rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          </a>
        </div>
      </div>
      <div>
        <p>© 2023 Siddhesh Songire. All Rights Reserved.</p>
        <p>Made with ❤️ by Siddhesh Songire.</p>
      </div>
    </div>
  );
}

export default Footer;

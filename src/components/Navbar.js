import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link as Scrolllink } from "react-scroll";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar(!expandNavbar);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links" id="nav">
        <Link to="/"> Home </Link>
        <Scrolllink to="skills" spy={true} smooth={true}>
          {" "}
          Skills{" "}
        </Scrolllink>
        <Scrolllink to="contact-container" spy={true} smooth={true}>
          {" "}
          Contact{" "}
        </Scrolllink>
        <Link to="/projects"> Projects </Link>
        {/* <Link to="/experience"> Experience </Link> */}
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, animateScroll } from "react-scroll";
import "../styles/Scroll.css";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <KeyboardArrowUpRoundedIcon
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Scroll to Top"
    />
  );
}

export default ScrollToTopButton;

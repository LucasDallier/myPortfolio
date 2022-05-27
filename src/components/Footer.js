import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../styles/Footer.css";
// import English from '../images/kingdom_united_icon.png';
// import Portuguese from '../images/brazil_icon.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <p>Meet me at:</p>
        <a
          href="https://www.linkedin.com/in/lucas-dallier-arraes-68708a1b3/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer" />
        </a>
        <a
          href="https://github.com/LucasDallier"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsGithub className="icon-footer" />
        </a>
      </div>

      <p className="text-footer">Developed with ❤ por Lucas Dallier Arraes</p>
    </footer>
  );
}

export default Footer;

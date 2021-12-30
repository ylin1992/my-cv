import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <div id="footer">
      <p>Ewan Yeh Lin ⓒ {year}</p>
        <ul className="footer-icon">
            <li><a  href="https://www.instagram.com/ewanlin9980/"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a  href="https://www.facebook.com/linyeah2014/"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a  href="https://www.linkedin.com/in/lin-yeh-67733118b/"><FontAwesomeIcon  icon={faLinkedin} /></a></li>
            <li><a  href="mailto: yehl@usc.edu"><FontAwesomeIcon icon={faEnvelopeSquare} /></a></li>
        </ul>
    </div>
    </footer>
  );
}

export default Footer;

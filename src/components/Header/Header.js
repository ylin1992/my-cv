import React from "react";
import TextLoop from "react-text-loop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import NavigationBar from "./NavigationBar";
import { useEffect} from 'react';

function Header() {
  const TextAnimation = () => (
    <div className="rwd-components">
        <TextLoop
          springConfig={{ stiffness: 180, damping: 8 }}
          adjustingSpeed={300}
          interval={1500}
        >
          <span className="animated-text">AR/VR Software Engineer</span>
          <span className="animated-text">AR/VR Optical Engineer</span>
          <span className="animated-text">Web developer</span>
          <span className="animated-text">Photographer</span>
        </TextLoop>{" "}
      </div>
  );

    useEffect(()  => {
      window.onscroll = () => {
        const ratio = 4;
        let opacity = (window.screen.height / ratio - window.pageYOffset) / window.screen.height * ratio;
        
        const adjustedElements = document.getElementsByClassName("opaq");
        if(adjustedElements) {
          for (let e of adjustedElements) {
            e.style.opacity = opacity;
          }
        }
        const navbarElement = document.getElementById("navbar-container");
        if(navbarElement) {
            if (window.pageYOffset < 0.2 * window.screen.height) {
                navbarElement.classList.add("scrolled-down");
                navbarElement.classList.remove("scrolled-up");
            } else {
                navbarElement.classList.add("scrolled-up");
                navbarElement.classList.remove("scrolled-down");
            }
        }
      } 
    }, [])

  return (
    <header>
      <NavigationBar />

    <div id="header">
      <div className="header-content">
        <h1 className="title rwd-components opaq">
          Ewan Yeh Lin's
        </h1>
        <h2 className="opaq"> Adventure </h2>
        <h3 className="subtitle rwd-components opaq">
          A
          <TextAnimation />
          Who enjoys his life
        </h3>
        <ul className="div-icon opaq">
          <li><a rel="noreferrer" target="_blank" className="icon-link" href="https://www.instagram.com/ewanlin9980/"><FontAwesomeIcon className="icons" icon={faInstagram} /></a></li>
          <li><a rel="noreferrer" target="_blank" className="icon-link" href="https://www.facebook.com/linyeah2014/"><FontAwesomeIcon className="icons" icon={faFacebook} /></a></li>
          <li><a  rel="noreferrer" target="_blank" className="icon-link" href="https://www.linkedin.com/in/lin-yeh-67733118b/"><FontAwesomeIcon className="icons" icon={faLinkedin} /></a></li>
          <li><a  rel="noreferrer" target="_blank" className="icon-link" href="https://github.com/ylin1992"><FontAwesomeIcon className="icons" icon={faGithub} /></a></li>
        </ul>

        <img className="header-bg-image opaq" src=""/>
      </div>
    </div>

    </header>
  );
}

export default Header;

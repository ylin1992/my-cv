import React from "react";
import {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Flashcards from "./Flashcards";
import './about.css'
import Job from "./Job";
function About() {

  const handleSkillsOnClick = (e) => {
    console.log(e.target.classList);
    e.target.classList.toggle("multi-opened");
    e.target.classList.toggle("multi-fold");
  }

  return (
      <section id="about" loading="lazy">
        <div className="about-container">
          <div className="image-container">
            <img className="profile-image" src={process.env.PUBLIC_URL + "/images/profile2.jpg"} alt="profile"/>
          </div>
            <div className="slider">
              <div className="flashcards-container">


                {/* Prefessional Expreience */}

                <div className="cards">
                    <h2 className="experience-title">Professional Experience</h2>
                    <div className="single-position">
                      <Job 
                      title="Optical Specialist II (Dep. of AR/VR)"
                      location="Quanta Computer Inc"
                      url="https://www.quantatw.com/quanta/english/"
                      period="Jan 2019 - Jun 2021"/>
                      
                        <li>AOI tools development</li>
                        <li>AOI logging framework design</li>
                        <li>Machine learning based blemish detection tools</li>
                        <li>Stereo-alignment calibration tools</li>

                      <p className="side-note job-description">Patent: <a className="side-note" href="https://patents.google.com/patent/US20210174480A1/">METHOD AND DEVICE FOR ELIMINATING RING EFFECT</a></p>
                      <p className="side-note job-description">Patent: <a className="side-note" href="https://twpat1.tipo.gov.tw/twpatengusr/00003/zip/dc.xml?1243847653"> COMPUTATION APPARATUS AND METHOD OF DETECTING DEFECTS FOR NEAR-EYE DISPLAY</a></p>
                    </div>
                    <div className="single-position">

                      <Job 
                      title="Optical Engineer (Dep. of AR/VR)"
                      location="Quanta Computer Inc"
                      url="https://www.quantatw.com/quanta/english/"
                      period="Jan 2017 - Jan 2019"/>
                      
                        <li>Image Qaulity Inspection(IQI) tools</li>
                        <li>AR/VR lens design and spec review</li>
                        <li>Evaluation and spec review of AR/VR display</li>
                    </div>              
                </div>
                {/* ============ Skills ============= */}

                <div className="cards">
                  <h2 className="experience-title">Skills</h2>
                    <ul className="multi multi-fold" onClick={handleSkillsOnClick}>Frontend
                      <li className="items">HTML CSS JS</li>
                      <li className="items">React JS</li>
                    </ul>
                    <ul className="multi multi-fold" onClick={handleSkillsOnClick}>Backend
                      <li className="items">FLask</li>
                      <li className="items">Express JS</li>
                      <li className="items">SQL, SQLAlchemy</li>
                      <li className="items">RESTful API</li>
                    </ul>
                    <ul className="multi multi-fold" onClick={handleSkillsOnClick}>AOI tools development
                      <li className="items">Camera spec definition</li>
                      <li className="items">OpenCV</li>
                      <li className="items">Image filtering</li>
                    </ul>
                    <ul className="multi multi-fold" onClick={handleSkillsOnClick}>Programming languages
                      <li className="items">Python</li>
                      <li className="items">Java</li>
                      <li className="items">C++</li>
                    </ul>
                </div>

                <div className="cards">
                  <h2 className="experience-title">Education</h2>
                  <ul className="multi multi-fold" onClick={handleSkillsOnClick}>M.S. in Computer Science, University of Southern California
                      <li className="items">Los Angeles, CA, USA</li>
                      <li className="items">Jan 2022 - Present</li>
                  </ul>
                  <ul className="multi multi-fold" onClick={handleSkillsOnClick}>M.S. in Biomedical and Imaging Photonics, National Chiao-Tung University
                      <li className="items">Hsinchu, Taiwan</li>
                      <li className="items">Sep 2014 - Oct 2016</li>
                      <li className="items">Thesis: Multi-frequency fluorescence lifetime system based on directly-modulated LED</li>
                  </ul>
                  <ul className="multi multi-fold" onClick={handleSkillsOnClick}>B.E. in Mechatronic Engineering, National Taiwan Normal University
                      <li className="items">Taipei, Taiwan</li>
                      <li className="items">Sep 2010 - Jun 2014</li>
                  </ul>
                </div>     


              </div>
            </div>

        </div>
      </section>
  )
}

export default About;

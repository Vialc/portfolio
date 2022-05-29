import React from "react";
import "./section.scss";
import StacksImage from "../StacksImage/StacksImage";
import LightSpeed from 'react-reveal/LightSpeed';

const Section = () => {
  return (
    <div id="about" className="section">
      <div className="section__container">
        <div className="section__img">
          <StacksImage />
        </div>

        
        <div className="section__content">
          <h1>Who is Vitor</h1>
          <LightSpeed speed={0.2} delay={1000} left cascade>
          <div>
          <p>2 years experience in Programming</p>
          <p>6 months experience in Web Development</p>
          <p>Javascript and Typescript Developer</p>
          <p>ReactJS and NodeJS Developer</p>
          </div>
          </LightSpeed>
        </div>
      </div>
    </div>
  );
};

export default Section;

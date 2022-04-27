import React from "react";
import "./section.scss";
import picture from "../../assets/section.png";

const Section = () => {
  return (
    <div id="about" className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={picture} alt="" />
        </div>

        <div className="section__content">
          <h1>Who is Vitor</h1>
          <p>2 years experience in Programming</p>
          <p>6 months experience in Web Development</p>
          <p>Javascript and Typescript Developer</p>
          <p>ReactJS and NodeJS Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Section;

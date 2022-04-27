import React from "react";
import tweet from "../../assets/project-tweet.png";
import solar from "../../assets/project-solar-calculator.png";
import study from "../../assets/project-study-count.png";
import crud from "../../assets/project-weon.jpg";
import "./Works.scss";

const Works = () => {
  return (
    <>
      <div id="portfolio" className="work-title">
          <h1>My <span>Portfolio</span></h1>
      </div>
      <div className="works">
        <div className="work__section">
          <div className="cards">
            <img src={tweet} alt="" />
            <button>See Work</button>
          </div>

          <div className="cards">
            <img src={solar} alt="" />
            <button>See Work</button>
          </div>

          <div className="cards">
            <img src={study} alt="" />
            <button>See Work</button>
          </div>

          <div className="cards">
            <img src={crud} alt="" />
            <button>See Work</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

import React from "react";
import "./Main.scss";
import main from "../../assets/main2.png";

const Main = () => {
  return (
    <div id="home" className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <h1>I am Vitor Alcântara</h1>
            <p>Front-end Developer</p>

            <div className="icons">
              <a href="https://www.linkedin.com/in/vitoralcantara-dev/"><box-icon type='logo' name='linkedin-square' animation='fade-up-hover' /></a>
              <a href="https://github.com/Vialc"><box-icon type='logo' name='github' animation='fade-up-hover' /></a>
            </div>

            <div className="buttons">
              <button><a href="#portfolio">See My Work</a></button>
              <button><a href="https://wa.me/5521965117167">Hire Me</a></button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={main} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;

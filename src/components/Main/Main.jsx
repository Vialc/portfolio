import React from "react";
import "./Main.scss";
import main from "../../assets/main3.png";
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';



const Main = () => {


  return (
    <div id="home" className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <Zoom delay={1000} bottom cascade><h1>Im am Vitor Alcântara</h1></Zoom>
            <Zoom delay={2000} bottom cascade><p>Frontend Developer</p></Zoom>

            <div className="icons">
              <a href="https://www.linkedin.com/in/vitoralcantara-dev/"><box-icon type='logo' color="white" name='linkedin-square' animation='fade-up-hover' /></a>
              <a href="https://github.com/Vialc"><box-icon type='logo' color="white" name='github' animation='fade-up-hover' /></a>
            </div>

            <div className="buttons">
              <button><a href="#portfolio">See My Work</a></button>
              <button><a href="https://wa.me/5521965117167">Hire Me</a></button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <Flip delay={2000} speed={0.2} right>
          <img src={main} alt="" />
          </Flip>
        </div>
      </div>
    </div>
  );
};

export default Main;

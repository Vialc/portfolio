import React, { useContext } from "react";
import "./Intro.scss";
import Github from "../../assets/img/github.png";
import Linkedin from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import MainImage from "../../assets/img/main3.png";
import Cofee from "../../assets/img/coffee-mug.png";
import Notebook from "../../assets/img/laptop.png";
import Glassesimoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Contexts/ThemeContext";
import { motion } from "framer-motion";

export default function Intro() {

  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I'm</span>
          <span>Vitor Alcântara</span>
          <span>Fullstack Developer, producting the Quality work</span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Vialc">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vitoralcantara-dev/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/vitorc.alcantara/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <div className="i-img">
          <img src={MainImage} alt="" />
        </div>
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
          className="floating-figure"
        />
          <motion.div
          initial={{ top: "-4%", left: "66%" }}
          whileInView={{ left: "62%" }}
          transition={transition}
          className="floating-div1"
        >
          <FloatingDiv image={Notebook} txt1={"WEB"} txt2={"Developer"} />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          className="floating-div2"
        >
          <FloatingDiv image={Cofee} txt1={"Fulltime"} txt2={"Coding"} />
        </motion.div>
        
        <div className="blur" style={{ background: "rgb(238 210 255)", visibility: darkMode ? 'hidden' : ''}}></div>
        <div className="blur" 
              style={{ 
                background: "#C1F5FF",
                top: '10rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem',
                visibility: darkMode ? 'hidden' : ''
                }}></div>

      </div>
    </div>
  );
}

import React, { useContext } from "react";
import "./Services.scss";
import Curriculo from "./vitor-alcantara-curriculo.pdf";
import BackendAnim from "../../assets/img/resizedhappyhacker.gif";
import Gear from "../../assets/img/gear.png";
import Idea from "../../assets/img/light.png";
import Card from "../Card/Card";
import { themeContext } from "../../Contexts/ThemeContext";
import { motion } from "framer-motion";

export default function Services() {
  const transition = {
    duration: 1,
    type: "spring",
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Website creation with Angular or ReactJS and Interfaces Design,
          <br />
          also REST API creation
        </spane>
        <a href={Curriculo} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94", display: darkMode ? 'none' : '' }}></div>
      </div>

      <div className="cards">
        <motion.div
          initial={{ left: "14rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          className="backend-card"
        >
          <Card
            emoji={BackendAnim}
            heading={"Backend"}
            detail={"NodeJS, Prisma, Typescript, .Net, Entity, C#"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Gear}
            heading={"Frontend"}
            detail={
              "ReactJS, Angular, Typescript, Tailwind, SASS, Semantic HTML"
            }
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "1rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Idea}
            heading={"Creative Design"}
            detail={"Prototyping with Figma"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)", display: darkMode ? 'none' : '' }}
        ></div>
      </div>
    </div>
  );
}

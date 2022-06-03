import { useState, useContext } from "react";
import { themeContext } from "../../Contexts/ThemeContext";
import WorkCards from "./Components/WorkCards/WorkCards";
import CarouselController from "./Components/CarouselController/CarouselController";

import "./Works.scss";

import solar from "../../assets/img/project-solar-calculator.png";
import study from "../../assets/img/project-study-count.png";
import crud from "../../assets/img/project-weon.jpg";

export const workList = [
  {
    id: "work-01",
    title: "Solar Calculator",
    cardBackground: solar,
    mainImage: solar,
  },
  {
    id: "work-02",
    title: "Study Count",
    cardBackground: study,
    mainImage: study,
  },
  {
    id: "work-03",
    title: "People CRUD",
    cardBackground: crud,
    mainImage: crud,
  },
];

export const buttonController = [
  {
    id: 1,
    text: "01",
  },
  {
    id: 2,
    text: "02",
  },
  {
    id: 3,
    text: "03",
  },
];

const Works = () => {
  const [sectionId, setSectionId] = useState("");
  const [currentButton, setCurrentButton] = useState(1);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const rotateYValue = -120 * (currentButton - 1);

  const rotateCarousel = {
    transform: `translateZ(-40vw) rotateY(${rotateYValue}deg)`,
  };

  function handleSectionId(componentId) {
    setSectionId(componentId);
  }

  function handleButtonId(buttonId) {
    setCurrentButton(buttonId);
  }

  return (
    
    <section className="works-section" id="Portfolio">
      <div className="works-wrapper" id={sectionId}>
      <div className="works-section-title">
      <span style={{color: darkMode?'white':''}}>Recent Projects</span>
      <span>Portfolio</span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
      </div>
      <div className="container__works">
        <div className="works__carousel" style={rotateCarousel}>
          {Object.entries(workList).map(([key, value]) => {
            return (
              <WorkCards
                key={key}
                takeId={handleSectionId}
                id={value.id}
                title={value.title}
                cardBackground={value.cardBackground}
                mainImage={value.mainImage}
              />
            );
          })}
        </div>
        <CarouselController
            takeButtonId={handleButtonId}
            buttonList={buttonController}
          />
      </div>
      </div>
    </section>
    
  );
};

export default Works;

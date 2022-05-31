//import tweet from "../../assets/project-tweet.png";
import solar from "../../assets/project-solar-calculator.png";
import study from "../../assets/project-study-count.png";
import crud from "../../assets/project-weon.jpg";
import WorkCards from "./components/WorkCards/WorkCards";
import { useState } from "react";
import "./Works.scss";
import CarouselController from "./components/CarouselController/CarouselController";

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
    <section id={sectionId}>
      <div id="portfolio" className="work-title">
        <h1>
          My <span>Portfolio</span>
        </h1>
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
    </section>
  );
};

export default Works;

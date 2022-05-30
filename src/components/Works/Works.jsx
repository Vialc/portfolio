
//import tweet from "../../assets/project-tweet.png";
import solar from "../../assets/project-solar-calculator.png";
import study from "../../assets/project-study-count.png";
import crud from "../../assets/project-weon.jpg";
import WorkCards from "./components/WorkCards/WorkCards";
import { useState } from "react";
import "./Works.scss";

export const workList = [
  {
    id: 'work-01',
    title: 'Solar Calculator',
    cardBackground: solar,
    mainImage: solar
  },
  {
    id: 'work-02',
    title: 'Study Count',
    cardBackground: study,
    mainImage: study
  },
  {
    id: 'work-03',
    title: 'People CRUD',
    cardBackground: crud,
    mainImage: crud
  }
]


const Works = () => {
  const [ sectionId, setSectionId] = useState('')

  function handleSectionId (componentId) {
    setSectionId(componentId)
  }
  
  return (
    <section id={sectionId}>
      <div id="portfolio" className="work-title">
        <h1>
          My <span>Portfolio</span>
        </h1>
      </div>
      <div className="container__works">
      {Object.entries(workList).map(([key, value]) => {
        return <WorkCards key={key} takeId={handleSectionId} id={value.id} title={value.title} cardBackground={value.cardBackground} mainImage={value.mainImage}/>
      })}
      </div>

      <div className="controller">
        <div className="controller__button"> 01 </div>
        <div className="controller__button"> 02 </div>
        <div className="controller__button"> 03 </div>
        <div className="controller__line"></div>
      </div>
    </section>
  );
};

export default Works;

import './WorkCards.scss'
import React, { useState } from "react";

export default function WorkCards({ title, mainImage, cardBackground, id, takeId }) {
  const [mouseHover, setMouseHover] = useState(false);

 function handleWorkImageZoomOn() {
   setMouseHover(true)
   takeId(`${id}--hovered`)
  }

  function handleWorkImageZoomOff() {
    setMouseHover(false)
    takeId(``)
  }
  return (
    <>
        <a onMouseEnter={handleWorkImageZoomOn} onMouseLeave={handleWorkImageZoomOff} href="#work" id={mouseHover ? `${id}--hovered` : ``} className={`work-card${mouseHover ? " work-card--hovered" : ""}`}>
          <img className="card__background" src={cardBackground} alt="" />
          <img className="card__image" src={mainImage} alt="" />
          <h2 className="card__title">{title}</h2>
        </a>
      </>
  )
}

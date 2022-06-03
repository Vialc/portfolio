import React, { useContext } from "react";
import { themeContext } from "../../Contexts/ThemeContext";
import './Card.scss'


export default function Card({ emoji, heading, detail }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  ) 
}

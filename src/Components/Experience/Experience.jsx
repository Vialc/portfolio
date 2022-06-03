import React, { useContext } from "react";
import { themeContext } from "../../Contexts/ThemeContext";

import StacksCloud from '../StacksCloud/StacksCloud'
import './Experience.scss'

export default function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="cloud-stacks">
        <StacksCloud />
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>
          2+
        </div>
        <span style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>
          8+
        </div>
        <span style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
    </div>
  )
}

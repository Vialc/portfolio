import React from "react";
import "./StacksCloud.scss"
import allIcons from 'simple-icons';
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";
import stackscontroller from "../../assets/img/stacks-control.png"

const StacksCloud = () => {
  const tagCanvasOptions = {
    centreImage: stackscontroller,
    clickToFront: 500,
     depth: 1,
    imageScale: 2,
    initial: [0.1, -0.3],
    noMouse: false,
    noSelect: true,
    outlineColour: '#0000',
     reverse: true,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
  }
  const iconSlugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "jest",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "dotnet",
    "csharp",
    "mongodb"
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug)
  }));
  
  return (
    <div className="icons-container">
      <IconCloud
      key={v4()}
        id={"icon"}
        minContrastRatio={1}
        iconSize={50}
        backgroundHexColor= {"#fff"}
        fallbackHexColor={"#000"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};

export default StacksCloud;
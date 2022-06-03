import React, { useContext } from "react";
import { themeContext } from "../../../../Contexts/ThemeContext";

import { Swiper, SwiperSlide } from "swiper/react"

import './WorksMobileMode.scss'
import 'swiper/css'

import solar from "../../../../assets/img/project-solar-calculator.png";
import study from "../../../../assets/img/project-study-count.png";
import crud from "../../../../assets/img/project-weon.jpg";

export default function WorksMobileMode() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio">
      <span style={{color: darkMode?'white':''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        grabCursor={true}
        className='portfolio-slider'
        >
        <SwiperSlide>
          <img src={study} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={solar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={crud} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

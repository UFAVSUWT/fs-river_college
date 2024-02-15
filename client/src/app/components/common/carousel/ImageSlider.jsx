import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Arctica from "../../../assets/img/main/arctica.jpg";
import Boat from "../../../assets/img/main/boat.png";
import Students from "../../../assets/img/main/students.jpg";
import { NavLink } from "react-router-dom";

const ImageSlider = ({ className, ...rest }) => {
  return (
    <>
      <div className="imageSlider-show">
        <Swiper
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
          }}
        >
          <SwiperSlide>
            <NavLink to={"enrollee/reception"}>
              <div className="marquee-infinite">
                <span>
                  <img src={Boat} alt="" width={"250px"} height={"96px"} />
                </span>
              </div>
              <div className="_container">
                <div className="swiperSlideFirs__lable">
                  <div className="_container swiperSlideFirs__lable-content">
                    Открыт набор курсантов по специальностям высшего и среднего
                    образования!
                    <br /> Стань капитаном своей судьбы!
                  </div>
                </div>
              </div>
              <img src={Students} alt="Картинка уплыла" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <div className="marquee-infinite">
              <span>
                <img src={Boat} alt="" width={"250px"} height={"96px"} />
              </span>
            </div>
            <div className="_container">
              <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
              <div className="swiperSlideFirs__text">
                Статья о том, как сложилась судьба некоторых наших выпускников,
                которые связали свою жизнь с морем!
              </div>
              <ul className="swiperSlideFirs__list">
                <li>Преподаватель в родном училище</li>
                <li>Капитан огромного ледокола в арктике!</li>
                <li>И еще несколько интересных историй!</li>
              </ul>
              <NavLink to={"live/interview"}>
                <div className="swiperSlideFirs__btn">Читать</div>
              </NavLink>
            </div>
            <img src={Arctica} alt="Картинка уплыла" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

ImageSlider.defaultProps = {
  pagination: true,
};

ImageSlider.propTypes = {
  /*  items: PropTypes.array.isRequired, */
  className: PropTypes.string,
  pagination: PropTypes.bool.isRequired,
};

export default ImageSlider;

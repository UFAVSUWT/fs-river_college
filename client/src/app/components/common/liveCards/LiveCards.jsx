import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../image/Image";
import LiveCard from "../liveCard/LiveCard";
const LiveCards = () => {
  return (
    <div className="liveCards">
      <LiveCard
        title={"Студенческая жизнь"}
        className={"liveCardOne"}
        children={
          <NavLink to="live/studentsLive">
            <Image
              src="img/liveImg/students.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Спорт"}
        className={"liveCardTwo"}
        children={
          <NavLink to="live/sport">
            <Image
              src="img/liveImg/sport.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Наша гордость"}
        className={"liveCardThree"}
        children={
          <NavLink to="live/ourPride">
            <Image
              src="img/liveImg/winner.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Наука"}
        className={"liveCardFour"}
        children={
          <NavLink to="live/science">
            <Image
              src="img/liveImg/science.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Абитуриенту"}
        className={"liveCardFive"}
        children={
          <NavLink to="enrollee/reception">
            <Image
              src="img/liveImg/prepod.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Актуальные вакансии"}
        className={"liveCardSix"}
        children={
          <NavLink to="live/vacancies">
            <Image
              src="img/liveImg/work.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />
    </div>
  );
};
export default LiveCards;

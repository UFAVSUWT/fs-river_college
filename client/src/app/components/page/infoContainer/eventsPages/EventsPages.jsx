import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  toggleClassName,
  toggleFontSize,
  toggleIconColor,
} from "../../../../utils/disabled";
import Button from "../../../common/button/Button";
import { ReactComponent as ArrowButton } from "../../../../assets/svg/arrowButton.svg";
import EventCard from "../../../common/eventCard/EventCard";

const EventsPages = observer(() => {
  return (
    <>
      <div className="infocontainer__button eventsBtn__container">
        <span className="infocontainer__titile">Ближайшие мероприятия</span>
        <NavLink to="home/univercityEvents">
          <Button
            style={{ fontSize: toggleFontSize(18) }}
            className={toggleClassName(
              "infopage__button",
              "white white-radius",
              "black black-radius",
              "contrast contrast-radius"
            )}
          >
            <span>План мероприятий</span>
            {<ArrowButton fill={toggleIconColor("#C80000")} />}
          </Button>
        </NavLink>
      </div>
      <div
        className={toggleClassName(
          "eventsPages",
          "eventsPages-white",
          "eventsPages-black",
          "eventsPages-contrast"
        )}
      >
        <EventCard
          num={"1"}
          month={"Ноября"}
          title={"Праздничный концерт"}
          className={toggleClassName(
            "firstCard",
            "firstCard-white",
            "firstCard-black",
            "firstCard-contrast"
          )}
        />
        <EventCard
          num={"10"}
          month={"Декабря"}
          title={"День открытых дверей"}
          className={toggleClassName(
            "secondCard",
            "secondCard-white",
            "secondCard-black",
            "secondCard-contrast"
          )}
        />
        <EventCard
          num={"22"}
          month={"Января"}
          title={"Благотворительный вечер"}
          className={toggleClassName(
            "thirdCard",
            "thirdCard-white",
            "thirdCard-black",
            "thirdCard-contrast"
          )}
        />
        <EventCard
          num={"30"}
          month={"Июня"}
          title={"Экологический форум. Как спасти планету?"}
          className={toggleClassName(
            "fourthCard",
            "fourthCard-white",
            "fourthCard-black",
            "fourthCard-contrast"
          )}
        />
      </div>
    </>
  );
});
export default EventsPages;

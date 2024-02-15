import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

const EventCard = ({ num, month, title, className }) => {
  const classes = classNames("eventCard", className);
  return (
    <div className={classes}>
      <div className="eventCard__num">{num}</div>
      <div className="eventCard__month">{month}</div>
      <div className="eventCard__title">{title}</div>
      <div className="eventCard__more">
        <u>Узнать больше</u>
      </div>
    </div>
  );
};
EventCard.propTypes = {
  num: PropTypes.string,
  month: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
export default EventCard;

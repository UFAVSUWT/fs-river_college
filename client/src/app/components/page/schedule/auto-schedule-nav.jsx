import { Button } from "antd";
import React from "react";
import PropTypes from "prop-types";
const AutoScheduleNav = ({ nav, setNav }) => {
  return (
    <div className="auto-schedule__container-buttons">
      <Button
        onClick={() => setNav("groups")}
        className={`buttons ${nav === "groups" ? "active" : null}`}
      >
        Учебные группы
      </Button>
      <Button
        onClick={() => setNav("teacher")}
        className={`buttons ${nav === "teacher" ? "active" : null}`}
      >
        Преподаватели
      </Button>
      <Button
        onClick={() => setNav("class")}
        className={`buttons ${nav === "class" ? "active" : null}`}
      >
        Аудитории
      </Button>
    </div>
  );
};
AutoScheduleNav.propTypes = {
  nav: PropTypes.string,
  setNav: PropTypes.func,
};
export default AutoScheduleNav;

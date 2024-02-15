import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
const DropDown = ({ children, className, classNameActive, title }) => {
  const [isShow, setIsShow] = useState(true);
  const classes = classNames("", className);
  const classesActive = classNames("", classNameActive);
  return (
    <>
      <button
        className={!isShow ? `${classes}` : `${classesActive}`}
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        {title}
      </button>
      <div style={{ display: !isShow ? "block" : "none" }}>{children}</div>
    </>
  );
};
DropDown.propTypes = {
  title: PropTypes.string,
  classNameActive: PropTypes.string,
  clasName: PropTypes.string,
  children: PropTypes.node,
};
export default DropDown;

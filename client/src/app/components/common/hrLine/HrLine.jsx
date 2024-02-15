import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
const HrLine = ({ className }) => {
  const classes = classNames("hr-style", className);
  return <hr className={classes}></hr>;
};
HrLine.propTypes = {
  classNames: PropTypes.string,
};
export default HrLine;

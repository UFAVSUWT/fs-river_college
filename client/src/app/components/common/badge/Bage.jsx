import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
const Badge = observer(({ title, className }) => {
  const classes = classNames(
    `${toggleClassName(
      "badge ",
      "badge-white ",
      "badge-black ",
      "badge-contrast "
    )}`,
    className
  );
  return (
    <div style={{ fontSize: toggleFontSize(0.875) }} className={classes}>
      {title}
    </div>
  );
});

Badge.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
Badge.defaultProps = {
  title: "default badge",
};
export default Badge;

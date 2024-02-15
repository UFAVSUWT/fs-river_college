import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { toggleImagesClassName } from "../../../utils/disabled";
import theme from "../../../store/theme";
const LiveCard = observer(({ title, children, className }) => {
  const classes = classNames("liveCard ", className);
  return (
    <div className={classes}>
      {children}
      <div
        className={
          theme.theme !== "black"
            ? toggleImagesClassName(
                "liveCard__title",
                "liveCard__title",
                "liveCard__title",
                "liveCard__title-off"
              )
            : toggleImagesClassName(
                "liveCard__title",
                "liveCard__title",
                "liveCard__title",
                "liveCard__title"
              )
        }
      >
        {title}
      </div>
    </div>
  );
});
LiveCard.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
export default LiveCard;

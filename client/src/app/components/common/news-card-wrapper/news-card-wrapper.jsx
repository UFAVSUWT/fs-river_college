import React from "react";
import PropTypes from "prop-types";
const NewsCardsWrapper = ({ children }) => {
  return <div className="news-cards-wrapper">{children}</div>;
};

NewsCardsWrapper.propTypes = {
  children: PropTypes.node,
};
export default NewsCardsWrapper;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CarouselContext } from "../carouselContext";

export const PageCarousel = ({ children }) => {
  const { width } = useContext(CarouselContext);
  return (
    <div
      className="page__main-container"
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};

PageCarousel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
};

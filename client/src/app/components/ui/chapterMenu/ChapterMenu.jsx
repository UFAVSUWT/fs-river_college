import { NavLink } from "react-router-dom";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import React from "react";
import PropTypes from "prop-types";
const ChapterMenu = ({ title, linksArray }) => {
  return (
    <>
      <div
        className={toggleClassName(
          "chapter__menu",
          "chapter__menu-white",
          "chapter__menu-black",
          "chapter__menu-contrast"
        )}
      >
        {title ? (
          <h3
            /*   style={{ fontSize: toggleFontSize(1) }} */
            className={`chapter__menu-title ${toggleClassName(
              "title",
              "title-white",
              "title-black",
              "title-contrast"
            )}`}
          >
            {title}
          </h3>
        ) : null}

        {linksArray ? (
          <ul style={{ fontSize: toggleFontSize(16) }}>
            {linksArray.map((element) => (
              <li key={element.path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? toggleClassName(
                          "chapter__menu-active",
                          "chapter__menu-white-active",
                          "chapter__menu-black-active",
                          "chapter__menu-contrast-active"
                        )
                      : toggleClassName(
                          "chapter__menu-item",
                          "chapter__menu-white-item",
                          "chapter__menu-black-item",
                          "chapter__menu-contrast-item"
                        )
                  }
                  to={element.path}
                  end
                >
                  {element.title}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};
ChapterMenu.propTypes = {
  title: PropTypes.string,
  linksArray: PropTypes.array,
};
export default ChapterMenu;

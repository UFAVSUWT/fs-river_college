import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../assets/svg/arrowButton.svg";
import { observer } from "mobx-react-lite";
import { toggleIconColor } from "../../../utils/disabled";
const NewsCard = observer(({ link, image, date, title, staticCard, id }) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(`${id}`);
  };
  return (
    <div
      className="newsCard-wrapper"
      onClick={!staticCard ? () => onNavigate() : null}
    >
      <NavLink to={link}>
        {image !== null && (
          <div className="imageContainer">
            <img src={image} alt="Картинка уплыла :(" />
            {date ? <div className="time">{date}</div> : null}
          </div>
        )}

        <div className="titleContainer">
          {" "}
          {title}
          <div>
            <Arrow
              width={"25px"}
              height={"25px"}
              fill={toggleIconColor("#83d9b8")}
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
});
export default NewsCard;

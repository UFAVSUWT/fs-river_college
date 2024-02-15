import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { toggleClassName } from "../../../../utils/disabled";

import Image from "../../../common/image/Image";
const SecurityPage = observer(() => {
  return (
    <div className="applicantsPage">
      <div className="applicantsPage__header">
        <h1>Безопсность</h1>
        <h1>Ознакомьтесь с информацией</h1>
      </div>
      <div className="applicantsPage__main">
        <Image
          src="img/newsimg/safety.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="applicants__container">
          <ul
            className={toggleClassName(
              "container-links",
              "container-links-white",
              "container-links-black",
              "container-links-contrast"
            )}
          >
            <li>
              {" "}
              <NavLink to={"./"}>
                Сезонные заболевания и меры борьбы с ними
              </NavLink>
            </li>
            <li>
              <NavLink to={"./"}>Короновирус</NavLink>
            </li>
            <li>
              <NavLink to={"./"}>Противодействия коррупции</NavLink>
            </li>
            <li>
              <NavLink to={"./"}>Памятка ВГУВТ без коррупции</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});
export default SecurityPage;

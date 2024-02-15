import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  toggleClassName,
  toggleFontSize,
  toggleIconColor,
} from "../../../../utils/disabled";
import Button from "../../../common/button/Button";
import { ReactComponent as ArrowButton } from "../../../../assets/svg/arrowButton.svg";
import Image from "../../../common/image/Image";
import Pamyatka from "../../../../assets/doc/enrollee/Памятка_Расписка.docx";
import { ReactComponent as DOC } from "../../../../assets/svg/office/word.svg";
const ApplicantsPage = observer(() => {
  return (
    <div className="applicantsPage">
      <div className="infocontainer__button eventsBtn__container">
        <span
          className={toggleClassName(
            "infocontainer__titile",
            "infocontainer__titile-white",
            "infocontainer__titile-black",
            "infocontainer__titile-contrast"
          )}
        >
          Приемная кампания
        </span>
        <NavLink to="enrollee/applicantsInfo">
          <Button
            style={{ fontSize: toggleFontSize(18) }}
            className={toggleClassName(
              "infopage__button",
              "white white-radius",
              "black black-radius",
              "contrast contrast-radius"
            )}
          >
            <span>Сведения для поступающих</span>
            {<ArrowButton fill={toggleIconColor("#C80000")} />}
          </Button>
        </NavLink>
      </div>

      <div className="applicantsPage__main">
        <Image
          src="img/newsimg/postuplenie.png"
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
              <NavLink to={"enrollee/reception"}>
                Приемная кампания 2024
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"enrollee/submissionDoc"}>Подача документов</NavLink>
            </li>
            <li>
              <NavLink to={"enrollee/messageFromDirector"}>
                Обращение директора
              </NavLink>
            </li>
            <li>
              <NavLink to={"enrollee/monitoring"}>
                Мониторинг подачи документов
              </NavLink>
            </li>
            <li>
              <NavLink to={"enrollee/applicantsInfo"}>
                Узнать как стать нашим курсантом
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"enrollee/open-day"}>Дни открытых дверей</NavLink>
            </li>
            <li>
              {" "}
              <DOC height={"25px"} width={"25px"} />
              <a href={Pamyatka} target={"_blank"} rel="noreferrer">
                {" "}
                Памятка для абитуриента
              </a>
            </li>
            <li>
              <NavLink to={"enrollee/dormitory"}>
                Информация о заселении в общежитие и оплате
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});
export default ApplicantsPage;

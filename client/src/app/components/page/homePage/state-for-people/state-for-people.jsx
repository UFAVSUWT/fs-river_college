import React from "react";
import EducationContainer from "../../../common/educationContainer/education-container";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import missiya from "../../../../assets/pdf/stateForPeople/Миссия и ключевые цели принцыпов клиентоцентричности.pdf";
import model from "../../../../assets/pdf/stateForPeople/Организационная модель внедрения клиентоцентричности.pdf";
import reestr from "../../../../assets/pdf/stateForPeople/Реестр основных услуг.pdf";
import standart from "../../../../assets/pdf/stateForPeople/Стандарт государство для людей.pdf";
import BreadCrumbs from "../../../common/breadCrumbs/BreadCrumbs";
const StateForPeople = () => {
  return (
    <>
      <BreadCrumbs />
      <EducationContainer title="Государство для людей">
        <ul>
          {" "}
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />{" "}
            <a
              itemProp="opMain"
              href={missiya}
              target={"_blank"}
              rel="noreferrer"
            >
              Миссия и ключевые цели принципов клиентоцентричности Уфимского
              филиала ФГБОУ ВО "ВГУВТ"
            </a>
          </li>{" "}
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />{" "}
            <a
              itemProp="opMain"
              href={model}
              target={"_blank"}
              rel="noreferrer"
            >
              Организационная модель внедрения клиентоцентричности в Уфимском
              филиале ФГБОУ ВО "ВГУВТ"
            </a>
          </li>{" "}
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />{" "}
            <a
              itemProp="opMain"
              href={reestr}
              target={"_blank"}
              rel="noreferrer"
            >
              Реестр основных услуг, оказываемых в Уфимском филиале ФГБОУ ВО
              "ВГУВТ" предоставляемых в электронной форме
            </a>
          </li>{" "}
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />{" "}
            <a
              itemProp="opMain"
              href={standart}
              target={"_blank"}
              rel="noreferrer"
            >
              Стандарт государство для людей
            </a>
          </li>
        </ul>
      </EducationContainer>
    </>
  );
};
export default StateForPeople;

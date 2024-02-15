import React from "react";
import { NavLink } from "react-router-dom";
import RPV_SM from "../../../../../assets/pdf/educationPage/260205/RPV_SM.pdf";
import Image16 from "../../../../../assets/pdf/educationPage/260205/9.jpg";
import OOP9 from "../../../../../assets/pdf/educationPage/260205/oop/OOP9.pdf";
import Annot9 from "../../../../../assets/pdf/educationPage/260205/annot/annot9.pdf";
import KPV from "../../../../../assets/pdf/educationPage/KPV.pdf";
import UP12 from "../../../../../assets/pdf/educationPage/260205/syllabus/UP_260205_9.pdf";
const SPOEkspluatSudovEnergUstanovok_20_260205 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">26.02.05</td>
      <td>
        <NavLink
          itemProp="eduName"
          to="../../educationPrograms/shipPowerPlants2020"
        >
          Эксплуатация судовых энергетических установок (ФГОС от 07.05.2014 г. №
          443)
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink
          itemProp="eduProf"
          to="../../educationPrograms/shipPowerPlants2020"
        >
          Эксплуатация судовых энергетических установок (прием 2020)
        </NavLink>
      </td>
      <td itemProp="eduForm">Очная</td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a itemProp="opMain" href={OOP9} target={"_blank"} rel="noreferrer">
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="educationPlan"
              href={UP12}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="educationAnnotation"
              href={Annot9}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/shipPowerPlants2020"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/shipPowerPlants2020FOS"
            >
              Скачать РП РЦ
            </NavLink>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="educationShedule"
              href={Image16}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        {" "}
        <ul>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/shipPowerPlants2020FOS"
            >
              Скачать
            </NavLink>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a href={RPV_SM} target={"_blank"} rel="noreferrer">
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a href={KPV} target={"_blank"} rel="noreferrer">
              Скачать
            </a>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <NavLink to={"../../local-acts"}>
              Локальные нормативные акты
            </NavLink>
          </li>
        </ul>
      </td>
    </tr>
  );
};
export default SPOEkspluatSudovEnergUstanovok_20_260205;

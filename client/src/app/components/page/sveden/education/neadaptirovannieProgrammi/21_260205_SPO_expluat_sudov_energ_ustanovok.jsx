import React from "react";
import { NavLink } from "react-router-dom";
import RPV_SM from "../../../../../assets/pdf/educationPage/260205/СМ 2021 гп/ВР СМ 2021-2022 г.п.pdf";
import Image16 from "../../../../../assets/pdf/educationPage/260205/СМ 2021 гп/5. Календарный рафик учебного процесса.pdf";
import OOP9 from "../../../../../assets/pdf/educationPage/260205/СМ 2021 гп/1. Описание образовательной программы.pdf";
import Annot9 from "../../../../../assets/pdf/educationPage/260205/СМ 2021 гп/3. Аннотация к рабочим  программам дисциплиндля специальности.pdf";
import KPV from "../../../../../assets/pdf/educationPage/260205/СМ 2021 гп/8. Календарный план Воспитательной работы.pdf";
import UP12 from "../../../../../assets/pdf/educationPage/260205/СМ 2021 гп/2. Учебный план.pdf";
const SPOEkspluatSudovEnergUstanovok_21_260205 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">26.02.05</td>
      <td>
        <NavLink
          itemProp="eduName"
          to="../../educationPrograms/shipPowerPlants2021"
        >
          Эксплуатация судовых энергетических установок ФГОС №674 от 26.11.2020
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink
          itemProp="eduProf"
          to="../../educationPrograms/shipPowerPlants2021"
        >
          Эксплуатация судовых энергетических установок (прием 2021)
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
              to="../../educationPrograms/shipPowerPlants2021"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/shipPowerPlants2021FOS"
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
              to="../../educationPrograms/shipPowerPlants2021FOS"
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
export default SPOEkspluatSudovEnergUstanovok_21_260205;

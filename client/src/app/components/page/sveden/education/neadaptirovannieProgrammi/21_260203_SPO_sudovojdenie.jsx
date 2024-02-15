import React from "react";
import { NavLink } from "react-router-dom";
import KPV from "../../../../../assets/pdf/educationPage/260203/СВ 2021 гп/8. Календарный план ВР.pdf";
import RPV_SV from "../../../../../assets/pdf/educationPage/260203/СВ 2021 гп/ВР СВ  2021-2022 г.п..pdf";
import Image1 from "../../../../../assets/pdf/educationPage/260203/СВ 2021 гп/8. Календарный план ВР.pdf";
import OOP1 from "../../../../../assets/pdf/educationPage/260203/СВ 2021 гп/1. ООП   26 02 03 Судовождение  Среднее образование.pdf";
import UP1 from "../../../../../assets/pdf/educationPage/260203/СВ 2021 гп/2. Учебный план 26.02.03 Судовождение.pdf";

import Annot1 from "../../../../../assets/pdf/educationPage/260203/СВ 2021 гп/3. Аннотация к рабочим программам  и профессиональным модулям для специальности  СПО 26.02.03 Судовождение.pdf";

const SPOSudovojdenie_21_260203 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">26.02.03</td>
      <td>
        <NavLink itemProp="eduName" to="../../educationPrograms/navigation2021">
          Судовождение ФГОС №691 от 02.12.2020 (в ред. Приказа Минобранауки
          России от 13.07.2021 №450)
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink itemProp="eduProf" to="../../educationPrograms/navigation2021">
          Судовождение (прием 2021)
        </NavLink>
      </td>
      <td itemProp="eduForm">Очная</td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a itemProp="opMain" href={OOP1} target={"_blank"} rel="noreferrer">
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
              href={UP1}
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
              href={Annot1}
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
              to="../../educationPrograms/navigation2021"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/navigation2021FOS"
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
              href={Image1}
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
              to="../../educationPrograms/navigation2021FOS"
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
            <a href={RPV_SV} target={"_blank"} rel="noreferrer">
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
export default SPOSudovojdenie_21_260203;

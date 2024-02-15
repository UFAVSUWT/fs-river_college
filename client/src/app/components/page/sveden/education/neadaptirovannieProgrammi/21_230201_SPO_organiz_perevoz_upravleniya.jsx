import React from "react";
import { NavLink } from "react-router-dom";
import RPV_OP from "../../../../../assets/pdf/educationPage/230201/ОП 2021 гп/ВР ОП  2021-2022 г.п..pdf";
import Image22 from "../../../../../assets/pdf/educationPage/230201/ОП 2021 гп/5. Календарный график учебного процесса.pdf";
import OOP13 from "../../../../../assets/pdf/educationPage/230201/ОП 2021 гп/1. Описание образовательной программы ППССЗ.pdf";
import annot_OP from "../../../../../assets/pdf/educationPage/230201/ОП 2021 гп/3. Аннотации программ дисциплин и проф.модулей.pdf";
import KPV from "../../../../../assets/pdf/educationPage/230201/ОП 2021 гп/8. Календарный план Воспитательной работы.pdf";
import UP17 from "../../../../../assets/pdf/educationPage/230201/ОП 2021 гп/2. Учебный план 23.02.01.pdf";

const SPOOrganiz_perevoz_upravlenia_21_230201 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">23.02.01</td>
      <td>
        <NavLink
          itemProp="eduName"
          to="../../educationPrograms/organizationOfTransportation2021"
        >
          Организация перевозок и управление на транспорте (по видам) ФГОС №376
          от 22.04.2014 (в ред. Приказа Минобранауки России от 13.07.2021 №450)
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink
          itemProp="eduProf"
          to="../../educationPrograms/organizationOfTransportation2021"
        >
          Организация перевозок и управление на транспорте (по видам) (прием
          2021)
        </NavLink>
      </td>
      <td itemProp="eduForm">Очная</td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="opMain"
              href={OOP13}
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
              itemProp="educationPlan"
              href={UP17}
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
              href={annot_OP}
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
              to="../../educationPrograms/organizationOfTransportation2021"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/organizationOfTransportation2021FOS"
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
              href={Image22}
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
              to="../../educationPrograms/organizationOfTransportation2021FOS"
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
            <a href={RPV_OP} target={"_blank"} rel="noreferrer">
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
export default SPOOrganiz_perevoz_upravlenia_21_230201;

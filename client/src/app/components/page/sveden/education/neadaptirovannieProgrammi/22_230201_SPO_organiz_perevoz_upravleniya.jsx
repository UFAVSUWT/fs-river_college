import React from "react";
import { NavLink } from "react-router-dom";
import RPV_OP from "../../../../../assets/pdf/educationPage/230201/ОП 2022 гп/ВР ОП 2022-2023.pdf";
import Image22 from "../../../../../assets/pdf/educationPage/230201/ОП 2022 гп/5. Календарный график учебного процесса.pdf";
import OOP13 from "../../../../../assets/pdf/educationPage/230201/ОП 2022 гп/1. Описание образовательной программы.pdf";
import annot_OP from "../../../../../assets/pdf/educationPage/230201/ОП 2022 гп/3. Аннотации программ дисциплин.pdf";
/* import KPV from "../../../../../assets/pdf/educationPage/230201/ОП 2022 гп/7. Рабочая программа воспитания.pdf"; */
import UP17 from "../../../../../assets/pdf/educationPage/230201/ОП 2022 гп/2. Учебный план очная.pdf";
import UP27 from "../../../../../assets/pdf/educationPage/230201/ОП 2022 гп/2. Учебный план заочная.pdf";

const SPOOrganiz_perevoz_upravlenia_22_230201 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">23.02.01</td>
      <td>
        <NavLink
          itemProp="eduName"
          to="../../educationPrograms/organizationOfTransportation2022"
        >
          Организация перевозок и управление на транспорте (по видам) ФГОС №376
          от 22.04.2014 (в ред. Приказа Минобранауки России от 13.07.2021 №450)
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink
          itemProp="eduProf"
          to="../../educationPrograms/organizationOfTransportation2022"
        >
          Организация перевозок и управление на транспорте (по видам) (прием
          2022)
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
              Скачать (очная)
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="educationPlan"
              href={UP27}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать (заочная)
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
              to="../../educationPrograms/organizationOfTransportation2022"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/organizationOfTransportation2022FOS"
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
              to="../../educationPrograms/organizationOfTransportation2022FOS"
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
            <a href={"KPV"} target={"_blank"} rel="noreferrer">
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
export default SPOOrganiz_perevoz_upravlenia_22_230201;

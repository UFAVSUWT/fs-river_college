import React from "react";
import { NavLink } from "react-router-dom";
import RPV_OP from "../../../../../assets/pdf/educationPage/230201/RPV_OP.pdf";
import Image22 from "../../../../../assets/pdf/educationPage/230201/13.jpg";
import OOP13 from "../../../../../assets/pdf/educationPage/230201/oop/OOP13.pdf";
import annot_OP from "../../../../../assets/pdf/educationPage/230201/annot/annot_OP.pdf";
import KPV from "../../../../../assets/pdf/educationPage/KPV.pdf";
import UP17 from "../../../../../assets/pdf/educationPage/230201/syllabus/UP_230201_13.pdf";

const SPOOrganiz_perevoz_upravlenia_20_230201 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">23.02.01</td>
      <td>
        <NavLink
          itemProp="eduName"
          to="../../educationPrograms/organizationOfTransportation2020"
        >
          Организация перевозок и управление на транспорте (по видам) ФГОС №376
          от 22.04.2014 (в ред. Приказа Минобранауки России от 13.07.2021 №450)
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink
          itemProp="eduProf"
          to="../../educationPrograms/organizationOfTransportation2020"
        >
          Организация перевозок и управление на транспорте (по видам) (прием
          2020)
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
              to="../../educationPrograms/organizationOfTransportation2020"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/organizationOfTransportation2020FOS"
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
              to="../../educationPrograms/organizationOfTransportation2020FOS"
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
export default SPOOrganiz_perevoz_upravlenia_20_230201;

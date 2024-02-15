import React from "react";
import { NavLink } from "react-router-dom";
import KPV from "../../../../../assets/pdf/educationPage/KPV.pdf";
import RPV_SV from "../../../../../assets/pdf/educationPage/260203/RPV_SV.pdf";
import Image1 from "../../../../../assets/pdf/educationPage/260203/1.1.jpg";
import Image2 from "../../../../../assets/pdf/educationPage/260203/1.2.jpg";
import OOP1 from "../../../../../assets/pdf/educationPage/260203/oop/OOP1.pdf";
import UP1 from "../../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_1-1.pdf";
import UP2 from "../../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_1-2.pdf";
import Annot1 from "../../../../../assets/pdf/educationPage/260203/annot/annot1.pdf";

const SPOSudovojdenie_20_260203 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">26.02.03</td>
      <td>
        <NavLink itemProp="eduName" to="../../educationPrograms/navigation2020">
          Судовождение ФГОС №441 от 07.05.2014
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink itemProp="eduProf" to="../../educationPrograms/navigation2020">
          Судовождение (прием 2020)
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
              Скачать (9 Классов)
            </a>
          </li>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a
              itemProp="educationPlan"
              href={UP2}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать (11 классов)
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
              to="../../educationPrograms/navigation2020"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/navigation2020FOS"
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
              Скачать (9 классов)
            </a>
            <li className="doc__item">
              <PDF height={"25px"} width={"25px"} />
              <a href={Image2} target={"_blank"} rel="noreferrer">
                Скачать (11 классов)
              </a>
            </li>
          </li>
        </ul>
      </td>
      <td>
        {" "}
        <ul>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/navigation2020FOS"
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
export default SPOSudovojdenie_20_260203;

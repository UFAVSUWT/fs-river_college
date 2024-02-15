import React from "react";
import { NavLink } from "react-router-dom";
import KPV from "../../../../../assets/pdf/educationPage/KPV.pdf";
import RPV_SV from "../../../../../assets/pdf/educationPage/260203/RPV_SV.pdf";
import Image4 from "../../../../../assets/pdf/educationPage/260203/2.1.jpg";
import Image6 from "../../../../../assets/pdf/educationPage/260203/2.3.jpg";
import OOP2 from "../../../../../assets/pdf/educationPage/260203/oop/OOP2.pdf";
import Annot2 from "../../../../../assets/pdf/educationPage/260203/annot/annot2.pdf";
import UP3 from "../../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_2-1-3.pdf";
const SPOSudovojdenie_19_260203 = ({ PDF }) => {
  return (
    <tr itemProp="eduOp">
      <td itemProp="eduCode">26.02.03</td>
      <td>
        <NavLink itemProp="eduName" to="../../educationPrograms/navigation2019">
          Судовождение ФГОС №441 от 07.05.2014
        </NavLink>
      </td>
      <td itemProp="eduLevel">Cреднее профессиональное образование</td>
      <td>
        <NavLink itemProp="eduProf" to="../../educationPrograms/navigation2019">
          Судовождение (прием 2019)
        </NavLink>
      </td>
      <td itemProp="eduForm">Очная</td>
      <td>
        <ul>
          <li className="doc__item">
            <PDF height={"25px"} width={"25px"} />
            <a itemProp="opMain" href={OOP2} target={"_blank"} rel="noreferrer">
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
              href={UP3}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать (9 классов)
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
              href={Annot2}
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
              to="../../educationPrograms/navigation2019"
            >
              Скачать РП
            </NavLink>
          </li>
          <li className="doc__item">
            <NavLink
              itemProp="educationRpd"
              to="../../educationPrograms/navigation2019FOS"
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
              href={Image6}
              target={"_blank"}
              rel="noreferrer"
            >
              Скачать (9 классов)
            </a>
            <li className="doc__item">
              <PDF height={"25px"} width={"25px"} />
              <a href={Image4} target={"_blank"} rel="noreferrer">
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
              to="../../educationPrograms/navigation2019FOS"
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
export default SPOSudovojdenie_19_260203;

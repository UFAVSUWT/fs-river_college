import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import RP_UCH_PR_260203 from "../../../../assets/pdf/educationPage/260203/RP_pr_prakt_2018ugl_3-10.pdf";
import FOS_PR_PR_260203 from "../../../../assets/pdf/educationPage/260203/FOS_pr_prakt_2018ugl_3-10.pdf";

import RP_260203 from "../../../../assets/pdf/educationPage/260203/RP_Uch_prakt_2018ugl_3-10.pdf";
import FOS_UCH_PR_260203 from "../../../../assets/pdf/educationPage/260203/FOS_Uch_prakt_2018ugl_3-10.pdf";

const Navigation2019FOS = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Ссылка на рабочие программы практик, предусмотренных образовательной
        программой 26.02.03 "Судовождение"
      </h1>
      <h2>Рабочие программы практик</h2>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование дисциплины</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={RP_260203} target={"_blank"} rel="noreferrer">
                Рабочая программа учебной практики
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={RP_UCH_PR_260203} target={"_blank"} rel="noreferrer">
                Рабочая программа производственной практики
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>ФОНД ОЦЕНОЧНЫХ СРЕДСТВ</h2>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование дисциплины</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={FOS_UCH_PR_260203} target={"_blank"} rel="noreferrer">
                ФОС учебной практики
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={FOS_PR_PR_260203} target={"_blank"} rel="noreferrer">
                ФОС производственной практики
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default Navigation2019FOS;

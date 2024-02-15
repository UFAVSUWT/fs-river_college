import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import rp_ucheb_prakt from "../../../../assets/pdf/educationPage/260203/СВ 2021 гп/6. Рабочая программа учебной практики 2021.pdf";
import rp_proizv_prakt from "../../../../assets/pdf/educationPage/260203/СВ 2021 гп/6. Рабочая программа производственной практики 2021.pdf";
import rp_diplom_prakt from "../../../../assets/pdf/educationPage/260203/СВ 2021 гп/6. Рабочая программа преддипломной практики.pdf";

const Navigation2021FOS = () => {
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
              <a href={rp_ucheb_prakt} target={"_blank"} rel="noreferrer">
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
              <a href={rp_proizv_prakt} target={"_blank"} rel="noreferrer">
                Рабочая программа производственной практики
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={rp_diplom_prakt} target={"_blank"} rel="noreferrer">
                Рабочая программа производственной практики
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/*  <h2>ФОНД ОЦЕНОЧНЫХ СРЕДСТВ</h2>
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
                ФОС учебной практики (очная)
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
                ФОС производственной практики (очная)
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table> */}
    </section>
  );
};
export default Navigation2021FOS;

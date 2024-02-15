import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import praktika_proizvod_plavat from "../../../../assets/pdf/educationPage/260506/praktika_proizvod_plavat.pdf";
import praktika_proizvod_plavatSig from "../../../../assets/pdf/educationPage/260506/praktika_proizvod_plavat.pdf";
import praktika_proizvod_sudoremont from "../../../../assets/pdf/educationPage/260506/praktika_proizvod_sudoremont.pdf";
import praktika_proizvod_sudoremontSig from "../../../../assets/pdf/educationPage/260506/praktika_proizvod_sudoremont.pdf";
import praktika_uchebn_oznakomit from "../../../../assets/pdf/educationPage/260506/praktika_uchebn_oznakomit.pdf";
import praktika_uchebn_oznakomitSig from "../../../../assets/pdf/educationPage/260506/praktika_uchebn_oznakomit.pdf";
import FOS_proizv_prak_plav from "../../../../assets/pdf/educationPage/260506/FOS_proizv_prak_plav.pdf";
import FOS_proizv_prak_plavSig from "../../../../assets/pdf/educationPage/260506/FOS_proizv_prak_plav.pdf";
import FOS_proizv_prak_sudorem from "../../../../assets/pdf/educationPage/260506/FOS_proizv_prak_sudorem.pdf";
import FOS_proizv_prak_sudoremSig from "../../../../assets/pdf/educationPage/260506/FOS_proizv_prak_sudorem.pdf";
import FOS_uchebn_prak from "../../../../assets/pdf/educationPage/260506/FOS_uchebn_prak.pdf";
import FOS_uchebn_prakSig from "../../../../assets/pdf/educationPage/260506/FOS_uchebn_prak.pdf";

const ShipPowerPlantsVO2023FOS = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Ссылка на рабочие программы практик, предусмотренных образовательной
        программой "26.05.06 Эксплуатация судовых энергетических установок"
      </h1>
      <h2>Рабочие программы практик</h2>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование дисциплины</th>
            <th>ЭЦП</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                href={praktika_proizvod_plavat}
                target={"_blank"}
                rel="noreferrer"
              >
                Производственная практика (плавательная)
              </a>
            </td>
            <td>
              <a
                href={praktika_proizvod_plavatSig}
                target={"_blank"}
                rel="noreferrer"
              >
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                href={praktika_proizvod_sudoremont}
                target={"_blank"}
                rel="noreferrer"
              >
                Производственная практика (судоремонтная)
              </a>
            </td>
            <td>
              <a
                href={praktika_proizvod_sudoremontSig}
                target={"_blank"}
                rel="noreferrer"
              >
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                href={praktika_uchebn_oznakomit}
                target={"_blank"}
                rel="noreferrer"
              >
                Учебная практика (ознакомительная)
              </a>
            </td>
            <td>
              <a
                href={praktika_uchebn_oznakomitSig}
                target={"_blank"}
                rel="noreferrer"
              >
                ЭЦП
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>ФОНД ОЦЕНОЧНЫХ СРЕДСТВ</h2>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование дисциплины</th>
            <th>ЭЦП</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={FOS_proizv_prak_plav} target={"_blank"} rel="noreferrer">
                Производственная практика (плавательная)
              </a>
            </td>
            <td>
              <a
                href={FOS_proizv_prak_plavSig}
                target={"_blank"}
                rel="noreferrer"
              >
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                href={FOS_proizv_prak_sudorem}
                target={"_blank"}
                rel="noreferrer"
              >
                Производственная практика (судоремонтная)
              </a>
            </td>
            <td>
              <a
                href={FOS_proizv_prak_sudoremSig}
                target={"_blank"}
                rel="noreferrer"
              >
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={FOS_uchebn_prak} target={"_blank"} rel="noreferrer">
                Учебная практика (ознакомительная)
              </a>
            </td>
            <td>
              <a href={FOS_uchebn_prakSig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default ShipPowerPlantsVO2023FOS;

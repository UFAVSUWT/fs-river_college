import React from "react";
import Prikaz from "../../../../../../assets/pdf/applicant/Приказ о стоимости обучения 2023-24 с приложением 1-5 курсы.pdf";
import Prilojenie from "../../../../../../assets/xlsx/Приложения к приказу о стоимости обучения.xlsx";

import { ReactComponent as PDF } from "../../../../../../assets/svg/office/pdf.svg";
import { ReactComponent as EXCEL } from "../../../../../../assets/svg/office/excel.svg";
import { toggleClassName } from "../../../../../../utils/disabled";
import { observer } from "mobx-react-lite";
const EducationCosts = observer(() => {
  return (
    <section>
      <h1>
        Стоимость обучения на коммерческой основе на 2023/2024 учебный год
      </h1>
      <p>
        Ознакомиться со стоимостью обучения по каждой программе можно в
        следующих документах:
      </p>
      <p>
        <EXCEL width={"25px"} height={"25px"} />{" "}
        <a
          href={Prilojenie}
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
          target={"_blank"}
          rel="noreferrer"
        >
          Стоимость обучения для поступающих на 1 курс в 2023 году по программам
          среднего профессионального образования, обучающихся по договорам об
          образовании за счет средств физических и/или юридических лиц в
          Уфимский филиал ФГБОУ ВО «ВГУВТ»
        </a>
      </p>
      <p>
        <PDF width={"25px"} height={"25px"} />{" "}
        <a
          href={Prikaz}
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
          target={"_blank"}
          rel="noreferrer"
        >
          Приказ о стоимости обучения 2023-2024 год
        </a>
      </p>
    </section>
  );
});
export default EducationCosts;

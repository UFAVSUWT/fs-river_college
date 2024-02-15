import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import Pologenie_Parus from "../../../../assets/pdf/educationPage/Pologenie_Parus.pdf";
import Pologhenie_DO from "../../../../assets/pdf/educationPage/Pologhenie_DO.pdf";
import Pologhenie_EL_Sreda from "../../../../assets/pdf/educationPage/Pologhenie_EL_Sreda.pdf";
import Pologhenie_kontrolDO from "../../../../assets/pdf/educationPage/Pologhenie_kontrolDO.pdf";
import FOS_IA_SV_uglubl from "../../../../assets/pdf/educationPage/260203/FOS_IA_SV_uglubl.pdf";
import Programma_IA_SV_uglubl from "../../../../assets/pdf/educationPage/260203/Programma_IA_SV_uglubl.pdf";
import Pologenie_attest_vipusk from "../../../../assets/pdf/educationPage/260203/Pologenie_attest_vipusk.pdf";
import Pologenie_OOP from "../../../../assets/pdf/educationPage/260203/Pologenie_OOP.pdf";

const LocalActs = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Методические и иные документы, разработанные для обеспечения
        образовательного процесса
      </h1>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Документы</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={Pologenie_attest_vipusk}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение об итоговой аттестации выпускников
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={Pologenie_OOP}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение об основной образовательной программе
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={Programma_IA_SV_uglubl}
                target={"_blank"}
                rel="noreferrer"
              >
                Программа итоговой аттестации для специальности 260203
                "Судовождение" (углубленная)
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={FOS_IA_SV_uglubl}
                target={"_blank"}
                rel="noreferrer"
              >
                Фонды оценочных средств итоговой аттестации для специальности
                260203 "Судовождение" (углубленная)
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={Pologhenie_DO}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение о дистанционном обучении
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={Pologenie_Parus}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение о создании электронных учебных курсов в системе
                дистанционного обучения "Парус"
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={Pologhenie_kontrolDO}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение о текущем контроле и промежуточной аттестации
                обучающихся с применением дистанционных образовательных
                технологий
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={Pologhenie_EL_Sreda}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение об электронной информационно-образовательной среде
              </a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                itemProp="methodology"
                href={Programma_IA_SV_uglubl}
                target={"_blank"}
                rel="noreferrer"
              >
                Программа итоговой аттестации для специальности 260203
                "Судовождение" (углубленная)
              </a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default LocalActs;

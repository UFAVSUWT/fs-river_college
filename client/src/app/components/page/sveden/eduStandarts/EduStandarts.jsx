import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import standart_230201_376 from "../../../../assets/pdf/eduStandarts/standart_230201_376.pdf";
import standart_260203_441 from "../../../../assets/pdf/eduStandarts/standart_260203_441.pdf";
import standart_260203_691 from "../../../../assets/pdf/eduStandarts/standart_260203_691.pdf";
import standart_260205_443 from "../../../../assets/pdf/eduStandarts/standart_260205_443.pdf";
import standart_260205_674 from "../../../../assets/pdf/eduStandarts/standart_260205_674.pdf";
import standart_260206_444 from "../../../../assets/pdf/eduStandarts/standart_260206_444.pdf";
import standart_260206_675 from "../../../../assets/pdf/eduStandarts/standart_260206_675.pdf";
const EduStandarts = observer(() => {
  return (
    <div
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <h1
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        ФЕДЕРАЛЬНЫЕ ГОСУДАРСТВЕННЫЕ ОБРАЗОВАТЕЛЬНЫЕ СТАНДАРТЫ
      </h1>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Среднее профессиональное образование
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Название и ссылка на скачивание</td>
            <td>Код дисциплины</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li className="doc__item">
                  <PDF width={"25px"} height={"25px"} />
                  <a
                    itemProp="eduFedDoc"
                    href={standart_260203_691}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.03 Судовождение от 02.12.2020 № 691
                  </a>
                </li>

                <li className="doc__item ">
                  <PDF width={"25px"} height={"25px"} />
                  <a
                    itemProp="eduFedDoc"
                    href={standart_260203_441}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.03 Судовождение от 07.05.2014 № 441
                  </a>
                </li>
              </ul>
            </td>
            <td>26.02.03</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li className="doc__item">
                  <PDF width={"25px"} height={"25px"} />
                  <a
                    itemProp="eduFedDoc"
                    href={standart_260205_443}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.05 Эксплуатация судовых энергетических установок
                    от 07.05.2014 № 443
                  </a>
                </li>

                <li className="doc__item">
                  <PDF width={"25px"} height={"25px"} />
                  <a
                    itemProp="eduFedDoc"
                    href={standart_260205_674}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.05 Эксплуатация судовых энергетических установок
                    от 26.11.2020 № 674
                  </a>
                </li>
              </ul>
            </td>
            <td>26.02.05</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li className="doc__item">
                  <PDF width={"25px"} height={"25px"} />
                  <a
                    itemProp="eduFedDoc"
                    href={standart_260206_444}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.06 Эксплуатация судового электрооборудования и
                    средств автоматики от 07.05.2014 № 444
                  </a>
                </li>

                <li className="doc__item ">
                  <PDF width={"25px"} height={"25px"} />
                  <a
                    itemProp="eduFedDoc"
                    href={standart_260206_675}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.06 Эксплуатация судового электрооборудования и
                    средств автоматики от 26.11.2020 № 675
                  </a>
                </li>
              </ul>
            </td>
            <td> 26.02.06</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li className="doc__item ">
                  <PDF width={"25px"} height={"25px"} />
                  <a
                    itemProp="eduFedDoc"
                    href={standart_230201_376}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 23.02.01 Организация перевозок и управление на
                    транспорте (по видам) от 22.04.2014 № 376
                  </a>
                </li>
              </ul>
            </td>
            <td>23.02.01</td>
          </tr>
        </tbody>
      </table>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        ОБРАЗОВАТЕЛЬНЫЕ СТАНДАРТЫ
      </h3>
      <p>Образовательные стандарты не разрабатываются и не реализуются</p>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        САМОСТОЯТЕЛЬНО УСТАНАВЛИВАЕМЫЕ ТРЕБОВАНИЯ
      </h3>
      <p>
        Самостоятельно устанавливаемые требования не разрабатываются и не
        реализуются
      </p>
    </div>
  );
});
export default EduStandarts;

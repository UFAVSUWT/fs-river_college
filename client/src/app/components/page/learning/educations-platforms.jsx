import React from "react";
import { toggleClassName } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
import EducationContainer from "../../common/educationContainer/education-container";
const EducationsPlatforms = observer(() => {
  return (
    <EducationContainer>
      <container>
        <h3
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Сторонние электронные образовательные и информационные ресурсы:
        </h3>
        <ol itemProp="eoisSide">
          <li>
            <a
              href="https://minobrnauki.gov.ru"
              target={"_blank"}
              rel="noreferrer"
            >
              minobrnauki.gov.ru
            </a>{" "}
            - Министерство науки и высшего образования Российской Федерации
          </li>
          <li>
            <a href="https://edu.gov.ru" target={"_blank"} rel="noreferrer">
              edu.gov.ru
            </a>{" "}
            - Министерство просвещения Российской Федерации
          </li>
          <li>
            <a
              href="http://obrnadzor.gov.ru/ru/"
              target={"_blank"}
              rel="noreferrer"
            >
              obrnadzor.gov.ru/ru
            </a>{" "}
            - Федеральная служба по надзору в сфере образования и науки
          </li>
          <li>
            <a href="http://window.edu.ru/" target={"_blank"} rel="noreferrer">
              window.edu.ru
            </a>{" "}
            - Информационная система "Единое окно доступа к образовательным
            ресурсам"
          </li>
          <li>
            <a href="http://fcior.edu.ru/" target={"_blank"} rel="noreferrer">
              fcior.edu.ru
            </a>{" "}
            - Федеральный центр информационно-образовательных ресурсов
          </li>
          <li>
            <a href="https://www.garant.ru/" target={"_blank"} rel="noreferrer">
              www.garant.ru
            </a>{" "}
            - «ГАРАНТ», информационно-правовой портал{" "}
          </li>
          <li>
            <a
              href="https://www.consultant.ru/"
              target={"_blank"}
              rel="noreferrer"
            >
              www.consultant.ru
            </a>
            - «Консультант плюс»- Разработка правовых систем
          </li>
        </ol>

        <h3
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Электронные библиотечные системы и ресурсы:
        </h3>
        <ol itemProp="erList">
          <li>
            Электронный каталог{" "}
            <a
              href="http://lib.vsuwt.ru/marcweb2/"
              target={"_blank"}
              rel="noreferrer"
            >
              ВГУВТ
            </a>{" "}
            (через Электронный каталог ВГУВТ возможен доступ к электронной
            библиотеке университета и НРУ)
          </li>
          <li>
            Электронно-библиотечная система{" "}
            <a href="https://urait.ru/" target={"_blank"} rel="noreferrer">
              «Юрайт»
            </a>{" "}
          </li>
          <li>
            Электронно-библиотечная система{" "}
            <a href="http://e.lanbook.com" target={"_blank"} rel="noreferrer">
              «Лань»
            </a>{" "}
          </li>
          <li>
            Электронно-библиотечная система{" "}
            <a href="https://znanium.com/" target={"_blank"} rel="noreferrer">
              «Знаниум»
            </a>{" "}
          </li>
          <li>
            Электронно – библиотечная система{" "}
            <a
              href="https://www.morkniga.ru/library/"
              target={"_blank"}
              rel="noreferrer"
            >
              "Моркнига"
            </a>{" "}
          </li>
        </ol>
      </container>
    </EducationContainer>
  );
});
export default EducationsPlatforms;

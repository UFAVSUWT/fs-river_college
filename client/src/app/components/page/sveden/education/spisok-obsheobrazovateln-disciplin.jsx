import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import listDisciplin260203 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/1. Список дисциплин 26.02.03.pdf";
import listDisciplin260205 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/2. Список дисциплин 26.02.05.pdf";
import listDisciplin260206 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/3. Список дисциплин 26.02.06.pdf";
import listDisciplin230201 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/4. Список дисциплин 23.02.01.pdf";
import listPractic260203 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/5. Список практик 26.02.03.pdf";
import listPractic260205 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/6. Список практик 26.02.05.pdf";
import listPractic260206 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/7. Список практик 26.02.06.pdf";
import listPractic230201 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/8. Список практик 23.02.01.pdf";
import listPractic260506 from "../../../../assets/pdf/educationPage/2. Информация о реализ.уровнях образования/В1 Список практик 26.05.06.pdf";
const SpisokObsheobrazovatelnDisciplin = () => {
  return (
    <ul>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listDisciplin260203} target={"_blank"} rel="noreferrer">
          Список дисциплин 26.02.03
        </a>
      </li>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listDisciplin260205} target={"_blank"} rel="noreferrer">
          Список дисциплин 26.02.05
        </a>
      </li>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listDisciplin260206} target={"_blank"} rel="noreferrer">
          Список дисциплин 26.02.06
        </a>
      </li>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listDisciplin230201} target={"_blank"} rel="noreferrer">
          Список дисциплин 23.02.01
        </a>
      </li>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listPractic260203} target={"_blank"} rel="noreferrer">
          Список практик 26.02.03
        </a>
      </li>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listPractic260205} target={"_blank"} rel="noreferrer">
          Список практик 26.02.05
        </a>
      </li>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listPractic260206} target={"_blank"} rel="noreferrer">
          Список практик 26.02.06
        </a>
      </li>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listPractic230201} target={"_blank"} rel="noreferrer">
          Список практик 23.02.01
        </a>
      </li>
      <li className="doc__item">
        <PDF height={"25px"} width={"25px"} />
        <a href={listPractic260506} target={"_blank"} rel="noreferrer">
          Список практик 26.05.06
        </a>
      </li>
    </ul>
  );
};
export default SpisokObsheobrazovatelnDisciplin;

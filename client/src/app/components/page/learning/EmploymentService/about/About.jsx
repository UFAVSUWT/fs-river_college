import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../utils/disabled";
import {ReactComponent as PDF} from "../../../../../assets/svg/office/pdf.svg"
import soglashenie_39 from "../../../../../assets/pdf/learning/Соглашение №39 от 19.06.2023 о сотрудничестве и совместой деятельности на рынке труда  студентов и выпускников.PDF"
const About = observer(() => {
  return (
    <>
      <section>
        <h1>Служба трудоустройства выпускников филиала </h1>
        <div>
          <section>
            <h2>Место нахождения Службы трудоустройства выпускников</h2>
            <p>
              450017, г. Уфа, ул. Ахметова, д. 275, кабинет 226, левое крыло, 2
              этаж, общежитие.
            </p>
          </section>
          <section>
            <h2>Состав структурного подразделения и контактная информация</h2>
            <p>
              Еникеев Алик Гайсинович – заместитель директора по
              учебно-производственной работы (руководитель службы
              трудоустройства выпускников)
            </p>
            <p>
              e-mail: opp@uf-vsuwt.ru, тел.: 8 (347) 215-14-00, доб. # 314
            </p>
            <p>
              <a
                href="https://vk.com/vgavtufa"
                target={"_blank"}
                rel="noreferrer"
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
              >
                Мы Вконтакте
              </a>
            </p>
          </section>
        </div>
      </section>
      <section>
        <h2>Полезные документы:</h2>
        <ul>
        <li>
            <PDF height={"25px"} width={"25px"} />{" "}
            <a
              href={soglashenie_39}
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Соглашение №39 от 19.06.2023 г. о сотрудничестве и совместой деятельности по вопросам содействия в поиске подходящей работы, социально-профессиональной адаптации на рынке труда студентов и выпускников
            </a>
          </li>
          <li>
            <a
              href="http://www.consultant.ru/document/cons_doc_LAW_130855/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Приказ Минтранса России от 15.03.2012 N 62 (ред. от 13.05.2015)
              "Об утверждении Положения о дипломировании членов экипажей морских
              судов"
            </a>
          </li>
          <li>
            <a
              href="http://www.consultant.ru/document/cons_doc_LAW_297185/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Приказ Минтранса России от 12.03.2018 N 87 "Об утверждении
              Положения о дипломировании членов экипажей судов внутреннего
              водного транспорта"
            </a>
          </li>
          <li>
            <PDF height={"25px"} width={"25px"} />{" "}
            <a
              href="https://vsuwt.ru/obrazovanie/tsentr-sodeystviya-trudoustroystvu-vypusknikov/files/dokumenty/%d0%9f%d1%80%d0%b8%d0%ba%d0%b0%d0%b7%20%d0%9c%d0%b8%d0%bd%d0%be%d0%b1%d1%80%d0%bd%d0%b0%d1%83%d0%ba%d0%b8%20%d0%a0%d0%a4%20N%20885,%20%d0%9c%d0%b8%d0%bd%d0%bf%d1%80%d0%be%d1%81%d0%b2%d0%b5%d1%89%d0%b5%d0%bd%d0%b8%d1%8f%20%d0%a0%d0%a4%20N%20390%20%d0%be%d1%82%2005.08.2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Приказ Минобрнауки РФ N 885, Минпросвещения РФ N 390 от 05.08.2020
              о практической подготовке обучающихся
            </a>
          </li>
          <li>
            <PDF height={"25px"} width={"25px"} />{" "}
            <a
              href="https://vsuwt.ru/obrazovanie/tsentr-sodeystviya-trudoustroystvu-vypusknikov/files/dokumenty/%d0%9f%d0%b8%d1%81%d1%8c%d0%bc%d0%be%20%d0%be%20%d0%bf%d1%80%d0%b0%d0%b2%d0%be%d0%b2%d0%be%d0%bc%20%d1%80%d0%b5%d0%b3%d1%83%d0%bb%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b8%20%d0%9f%d0%9f%d0%9e%20%d0%be%d1%82%2030.10.2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Письмо Минобрнауки России от 30.10.2020 № МН-5/20730 "О
              направлении вопросов-ответов"
            </a>
          </li>
        </ul>
      </section>
    </>
  );
});
export default About;

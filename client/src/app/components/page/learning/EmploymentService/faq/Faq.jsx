import { observer } from "mobx-react-lite";
import React from "react";
import Doc1 from "../../../../../assets/pdf/employmentService/pismo_vopros.pdf";
import { toggleClassName } from "../../../../../utils/disabled";
const Faq = observer(() => {
  return (
    <section>
      <h1>
        Вопросы и ответы по организации практики и трудоустройства выпускников
      </h1>
      <p>
        На этой странице размещены популярные вопросы по организации практики и
        трудоустройства и ответы на эти вопросы. Задать свой вопрос или
        комментировать ответ Вы можете сообщением в нашей группе{" "}
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
          ВКонтакте
        </a>{" "}
        или по{" "}
        <a
          href="mailto:opp@uf-vsuwt.ru"
          target={"_blank"}
          rel="noreferrer"
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
        >
          электронным адресам службы трудоустройства.
        </a>
      </p>
      <p>
        <b>Вопрос:</b> Может ли проводиться практическая подготовка у
        индивидуальных предпринимателей?
      </p>
      <p>
        <b>Ответ:</b> согласно части 7 статьи 13 Федерального закона № 273-ФЗ
        практическая подготовка может быть организована в организации,
        осуществляющей деятельность по профилю соответствующей образовательной
        программы. В соответствии со статьей 11 Налогового кодекса Российской
        Федерации организации - это юридические лица, образованные в
        соответствии с законодательством Российской Федерации, в связи с чем
        практическую подготовку невозможно проводить у индивидуальных
        предпринимателей.
      </p>
      <p>
        <b>Источник: </b>{" "}
        <a
          href={Doc1}
          target={"_blank"}
          rel="noreferrer"
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
        >
          Письмо Минобрнауки России от 30.10.2020 № МН-5/20730 "О направлении
          вопросов-ответов" (вопрос №4)
        </a>
      </p>
    </section>
  );
});
export default Faq;

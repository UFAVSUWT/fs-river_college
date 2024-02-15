import React from "react";
import List from "../../../../../../assets/doc/enrollee/Списки подавших документы - с указанием сведений о приеме 2023г..docx";
import Svodka from "../../../../../../assets/doc/enrollee/Сводка на сайт.docx";
import { ReactComponent as DOC } from "../../../../../../assets/svg/office/word.svg";
import { toggleClassName } from "../../../../../../utils/disabled";
const ListsOfPersonsWhoAppliedForAdmission = () => {
  return (
    <section>
      <h1>Списки лиц, подавших заявление на поступление 2023 г.</h1>
      <p>
        Списки подавших документы - с указанием сведений о приеме 2023 г.{" "}
        <a
          href={List}
          target={"_blank"}
          rel="noreferrer"
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
        >
          <DOC width={"25px"} height={"25px"} />
        </a>{" "}
        <a
          href={List}
          target={"_blank"}
          rel="noreferrer"
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
        >
          скачать
        </a>
      </p>
      <p>
        Ежедневная сводка{" "}
        <a
          href={Svodka}
          target={"_blank"}
          rel="noreferrer"
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
        >
          <DOC width={"25px"} height={"25px"} />
        </a>{" "}
        <a
          href={Svodka}
          target={"_blank"}
          rel="noreferrer"
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
        >
          скачать
        </a>
      </p>
    </section>
  );
};
export default ListsOfPersonsWhoAppliedForAdmission;

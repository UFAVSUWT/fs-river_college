import React from "react";
import { ReactComponent as DOC } from "../../../../../../assets/svg/office/word.svg";
import { toggleClassName } from "../../../../../../utils/disabled";
import spiski from "../../../../../../assets/doc/enrollee/Список рекомендованных к зачислению без среднего балла.docx"
import { observer } from "mobx-react-lite";
const DraftOrdersForEnrollment = observer(() => {
  return (
    <section>
      <h1>Проекты приказов на зачисление</h1>
      <p>Список лиц, рекомендованных к зачислению{" "}
        <a
          href={spiski}
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
          href={spiski}
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
        </a></p>
    </section>
  );
});
export default DraftOrdersForEnrollment;

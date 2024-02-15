import React from "react";
import { toggleClassName } from "../../../../../../utils/disabled";
import { ReactComponent as DOC } from "../../../../../../assets/svg/office/word.svg";
import prikaz26 from "../../../../../../assets/doc/enrollee/Приказ № 26 от 16.08.2023 №371-Спо-1 СВ.docx";
import prikaz27 from "../../../../../../assets/doc/enrollee/Приказ № 27 от 17.08.2023 №370-Спо1 ОП.docx";
import prikaz32 from "../../../../../../assets/doc/enrollee/Приказ № 32 от 17.08.2023 №372-Спо-1 СМ.docx";
import prikaz33 from "../../../../../../assets/doc/enrollee/Приказ № 33 от 17.08.2023 №373-Спо-1 ЭМ.docx";
import prikaz34 from "../../../../../../assets/doc/enrollee/Приказ № 34 от 25.08.2023.docx";
import prikaz35 from "../../../../../../assets/doc/enrollee/Приказ № 35 от 25.08.2023.docx";
import prikaz39 from "../../../../../../assets/doc/enrollee/Приказ № 39 от 01.12.2023.docx";
import prikaz40 from "../../../../../../assets/doc/enrollee/Приказ № 40 от 29.11.2023.docx";
const EnlistedOrders = () => {
  return (
    <section>
      <h1>Приказы зачисленных</h1>
      <p>
        Приказ № 39 от 01.12.2023г.
        <a
          href={prikaz39}
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
          href={prikaz39}
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
        Приказ № 40 от 01.12.2023г.
        <a
          href={prikaz40}
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
          href={prikaz40}
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
        Приказ №26 от 16.08.2023 №371-Спо-1 СВ Судовождение{" "}
        <a
          href={prikaz26}
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
          href={prikaz26}
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
        Приказ №27 от 17.08.2023 №370-Спо1 ОП Организация перевозок и управление
        на транспорте (по видам){" "}
        <a
          href={prikaz27}
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
          href={prikaz27}
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
        Приказ №32 от 17.08.2023 №372-Спо-1 СМ Эксплуатация судовых
        энергетических установок{" "}
        <a
          href={prikaz32}
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
          href={prikaz32}
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
        Приказ №33 от 17.08.2023 №373-Спо-1 ЭМ Эксплуатация судового
        электрооборудования и средств автоматики{" "}
        <a
          href={prikaz33}
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
          href={prikaz33}
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
        Приказ №34 от 25.08.2023г. № 422-Спо/1 ОП Организация перевозок и
        управление на транспорте (по видам)
        <a
          href={prikaz34}
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
          href={prikaz34}
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
        Приказ №35 от 25.08.2023 г. № 423-Спо/1 ЭМ Эксплуатация судового
        электрооборудования и средств автоматики{" "}
        <a
          href={prikaz35}
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
          href={prikaz35}
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
export default EnlistedOrders;

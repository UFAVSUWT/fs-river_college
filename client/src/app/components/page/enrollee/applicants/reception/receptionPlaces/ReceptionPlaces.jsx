import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../../utils/disabled";
const ReceptionPlaces = observer(() => {
  return (
    <section>
      <h1>Места приема документов, необходимых для поступления</h1>
      <h2>
        Почтовый адрес для направления документов, необходимых для поступления:
      </h2>
      <p>
        450017, г. Уфа, ул. Ахметова, 275, тел.{" "}
        <a
          href="tel:+7 (347) 2782886"
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
          target={"_blank"}
          rel="noreferrer"
        >
          +7 (347) 215-14-00 доб. 4
        </a>
      </p>
      <p>
        Электронный адрес для направления документов, необходимых для
        поступления в электронной форме:{" "}
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
          UF-VSUWT@yandex.ru
        </a>
      </p>
    </section>
  );
});
export default ReceptionPlaces;

import { observer } from "mobx-react-lite";
import React from "react";

import { toggleClassName } from "../../../../utils/disabled";
import Ustav from "../../../../assets/pdf/documentPage/Ustav_2017.pdf";
import Licenz from "../../../../assets/pdf/documentPage/licenz_vip20220916.pdf";
import Pologenie from "../../../../assets/pdf/documentPage/Pologen_2022.pdf";
import Akkr from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019.pdf";
import PolozObObuch from "../../../../assets/pdf/training/polozObObuch.PDF";
import PolozObPlatn from "../../../../assets/pdf/training/polozObPlatn.pdf";
import ObrazecDiplomaOProfPerepodg from "../../../../assets/pdf/training/obrazecDiplomaOProfPerepodg.pdf";
import ObrazecDiplomaOProfPodg from "../../../../assets/pdf/training/obrazecDiplomaOProfPodg.pdf";
import ObrazecProfRab from "../../../../assets/pdf/training/obrazecProfRab.pdf";
import TrenazPodg from "../../../../assets/pdf/training/trenazPodg.pdf";
import PovKval from "../../../../assets/pdf/training/povKval.pdf";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import { NavLink } from "react-router-dom";

const AboutCdo = observer(() => {
  return (
    <div
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <section className="education__container-content">
        <h1 className="education__container-title">
          Центр конвенционной подготовки и дополнительного образования
        </h1>
        <p>Наш адрес: 450017 г. Уфа, ул. Ахметова , д.275, ком. 7</p>
        <p>Контакты:</p>
        <ul>
          {" "}
          <ul>
            <li>
              <a
                href="tel:+7 (347) 2151400"
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
               +7 (347) 215-14-00 доб. 3
              </a>
            </li>
            <li>
              {" "}
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
                okpdo@uf-vsuwt.ru
              </a>
            </li>
          </ul>
        </ul>
      </section>
      <div className="education__container-content">
        <h1>
          О центре конвенционной подготовки и дополнительного образования{" "}
        </h1>
        <h2>Основные задачи </h2>
        <p>
          Удовлетворение образовательных и профессиональных потребностей,
          профессиональное развитие человека, обеспечение соответствия его
          квалификации меняющимся условиям профессиональной деятельности и
          социальной среды посредством реализации дополнительных
          профессиональных программ:
        </p>
        <ul>
          <li>
            программ повышения квалификации, направленных на совершенствование и
            (или) получение новой компетенции, необходимой для профессиональной
            деятельности, и (или) повышение профессионального уровня в рамках
            имеющейся квалификации;
          </li>
          <li>
            программ профессиональной переподготовки, направленных на получение
            компетенции, необходимой для выполнения нового вида профессиональной
            деятельности, приобретение новой квалификации.
          </li>
        </ul>
        <p>
          Организация профессионального обучения, направленного на приобретение
          лицами различного возраста профессиональной компетенции, в том числе
          для работы с конкретным оборудованием, технологиями,
          аппаратно-программными и иными профессиональными средствами, получение
          указанными лицами квалификации по профессии рабочего, должности
          служащего и присвоение им (при наличии) квалификационных разрядов,
          классов, категорий по профессии рабочего или должности служащего без
          изменения уровня образования, посредством реализации основных программ
          профессионального обучения:
        </p>
        <ul>
          <li>
            программ профессиональной подготовки по профессиям рабочих и
            должностям служащих, направленных на профессиональное обучение лиц,
            ранее не имевших профессии рабочего или должности служащего;
          </li>
          <li>
            программ переподготовки рабочих и служащих, направленных на
            профессиональное обучение лиц, уже имеющих профессию рабочего,
            профессии рабочих или должность служащего, должности служащих, в
            целях получения новой профессии рабочего или новой должности
            служащего с учетом потребностей производства, вида профессиональной
            деятельности;
          </li>
          <li>
            программ повышения квалификации рабочих и служащих, направленных на
            профессиональное обучение лиц, уже имеющих профессию рабочего,
            профессии рабочих или должность служащего, должности служащих, в
            целях последовательного совершенствования профессиональных знаний,
            умений и навыков по имеющейся профессии рабочего или имеющейся
            должности служащего без повышения образовательного уровня.
          </li>
        </ul>
        <p>Документация</p>
        <ul>
          <li>
            Уставные документы, свидетельства, лицензии, образцы документов
          </li>
          <ul>
            <li>
              <a
                href={Ustav}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={Ustav}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Устав образовательной организации
              </a>
            </li>
            <li>
              <a
                href={Licenz}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={Licenz}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Лицензия образовательной организации
              </a>
            </li>
            <li>
              <a
                href={Akkr}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={Akkr}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Свидетельство об аккредитации образовательной организации
              </a>
            </li>
            <li>
              <a
                href={Pologenie}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={Pologenie}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение о ДПО
              </a>
            </li>
            <li>
              <a
                href={PolozObObuch}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={PolozObObuch}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение о профессиональном обучении
              </a>
            </li>
            <li>
              <a
                href={PolozObPlatn}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={PolozObPlatn}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Положение об оказании платных образовательных услуг
              </a>
            </li>
          </ul>
          <li>Образцы выдаваемых документов</li>
          <ul>
            <li>
              <a
                href={ObrazecDiplomaOProfPerepodg}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={ObrazecDiplomaOProfPerepodg}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Образец диплома о профессиональной переподготовке
              </a>
            </li>
            <li>
              <a
                href={ObrazecDiplomaOProfPodg}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={ObrazecDiplomaOProfPodg}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Образец диплома о профессиональной подготовке
              </a>
            </li>
            <li>
              <a
                href={ObrazecProfRab}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={ObrazecProfRab}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Образец свидетельства о профессии рабочего
              </a>
            </li>
            <li>
              <a
                href={TrenazPodg}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={TrenazPodg}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Образец свидетельства о прохождении тренажерной подготовки
              </a>
            </li>
            <li>
              <a
                href={PovKval}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                <PDF width={"25px"} height={"25px"} />
              </a>{" "}
              <a
                href={PovKval}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                Образец удостоверения о повышении квалификации
              </a>
            </li>
            <li>
              <NavLink
                to={"../professionalTrainingPrograms"}
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
              >
                Перечень программ профессионального обучения
              </NavLink>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
});
export default AboutCdo;

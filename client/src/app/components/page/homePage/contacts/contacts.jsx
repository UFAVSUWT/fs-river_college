import React from "react";
import { toggleClassName, toggleIconColor } from "../../../../utils/disabled";
import { ReactComponent as Logo } from "../../../../assets/svg/riveruniversityLogo.svg";

const Contacts = () => {
  return (
    <>
      {" "}
      <section className="margin-tb1 education__container-content">
        <h1 className="education__container-title">Контакты</h1>
        <div className="margin-tb1 flex applicantsEnrollee-header">
          <div className="applicantsEnrollee-header-body">
            <p>
              Уфимский филиал ФГБОУ ВО «ВГУВТ» располагается по адресу: 450017,
              Республика Башкортостан, г. Уфа, ул. Ахметова, д. 275
            </p>
            <p>
              Пн-Пт: <b>с 9.00 до 17.15.</b>
            </p>
            <p>Обед с 12.00 до 13.00</p>
            <p>
              Сб, Вс: <b>Выходной</b>
            </p>
            <h1>Возникли вопросы? Позвоните нам или напишите письмо:</h1>
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
                  8 (347) 215-14-00
                </a>
              </li>

              <li>
                {" "}
                <a
                  href="uf-vsuwt@uf-vsuwt.ru"
                  target={"_blank"}
                  rel="noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  uf-vsuwt@uf-vsuwt.ru
                </a>
              </li>
            </ul>
          </div>

          <div className="applicantsEnrollee-header-logo">
            <Logo
              fill={toggleIconColor("#0C1C2B", "", "#000")}
              width="50%"
              height={"50%"}
            />
            <div className="applicantsEnrollee-header-title">
              Свяжи свою <br /> жизнь с морем!
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2109.826323963219!2d55.88651099532258!3d54.78380368264479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1684927322761!5m2!1sru!2sru"
            style={{
              width: "100%",
              height: "400px",
              style: "border:0;",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
            title="myMap"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default Contacts;

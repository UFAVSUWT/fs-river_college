import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
import vipusk from "../../../../assets/img/reviews/vipusk.png";
import work from "../../../../assets/img/reviews/work.png";
import prakt from "../../../../assets/img/reviews/prakt.png";
import pedagogi from "../../../../assets/img/reviews/pedagogi.png";
const Reviews = observer(() => {
  return (
    <>
      {" "}
      <div className="reviews_container">
        <h1>Анкетирование</h1>
        <section>
          <h2>Уважаемые работодатели!</h2>
          <div>
            {" "}
            <div className="content">
              <p>
                Уважаемые работодатели! С целью повышения качества образования,
                просим Вас принять участие в опросе по следующей ссылке:{" "}
                <a
                  href="https://forms.yandex.ru/u/6571a759c769f108ebbf9bf6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  Анкета работодателя
                </a>
              </p>
            </div>
            <div className="image">
              <img src={work} alt="изображение уплыло" />
            </div>
          </div>
        </section>
        <section>
          <h2>Уважаемые студенты!</h2>
          <div>
            {" "}
            <div className="content">
              <p>
                Уважаемые студенты! С целью повышения качества образования,
                просим Вас принять участие в опросе по следующей ссылке:{" "}
                <a
                  href="https://forms.yandex.ru/u/6566b7e073cee7258f0d5de8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  Анкета студента, прощедшего практику
                </a>
              </p>
            </div>
            <div className="image">
              <img src={prakt} alt="изображение уплыло" />
            </div>
          </div>
        </section>
        <section>
          <h2>Уважаемые выпускники!</h2>
          <div>
            {" "}
            <div className="content">
              <p>
                В целях совершенствования качества образования мы проводим
                анкетирование наших выпускников. Ответив на вопросы нашей
                анкеты, Вы поможете нам сделать процесс обучения в нашем филиале
                еще более эффективным. Для этого вам нужно заполнить анкету.
                Ваше мнение важно для нас!{" "}
                <a
                  href="https://forms.yandex.ru/u/6572bba150569027c63cbd62/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  Анкета выпускника
                </a>
              </p>
            </div>
            <div className="image">
              <img src={vipusk} alt="изображение уплыло" />
            </div>
          </div>
        </section>
        <section>
          <h2>Уважаемые сотрудники!</h2>
          <div>
            {" "}
            <div className="content">
              <p>
                В целях совершенствования качества образования мы проводим
                анкетирование наших педагогических работников. Ответив на
                вопросы нашей анкеты, Вы поможете нам сделать процесс обучения и
                условия труда в нашем филиале еще лучше. Для этого вам нужно
                заполнить анкету. Ваше мнение важно для нас!{" "}
                <a
                  href="https://forms.yandex.ru/u/657bc875d04688a12a6bc577/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  Анкета педагогического работника
                </a>
              </p>
            </div>
            <div className="image">
              <img src={pedagogi} alt="изображение уплыло" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
});
export default Reviews;

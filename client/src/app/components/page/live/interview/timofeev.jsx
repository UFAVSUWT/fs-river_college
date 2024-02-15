import React from "react";
import { Carousel } from "antd";
import timofeev from "../../../../assets/img/interview/timofeev/1.jpg";
import timofeev1 from "../../../../assets/img/interview/timofeev/2.jpg";
import timofeev2 from "../../../../assets/img/interview/timofeev/3.jpg";
import timofeev3 from "../../../../assets/img/interview/timofeev/4.jpg";
import timofeev4 from "../../../../assets/img/interview/timofeev/5.jpg";
import timofeev5 from "../../../../assets/img/interview/timofeev/6.jpg";
import timofeev6 from "../../../../assets/img/interview/timofeev/7.jpg";
import timofeev7 from "../../../../assets/img/interview/timofeev/8.jpg";
import timofeev8 from "../../../../assets/img/interview/timofeev/9.jpg";
import timofeev9 from "../../../../assets/img/interview/timofeev/10.jpg";
import timofeev10 from "../../../../assets/img/interview/timofeev/11.jpg";
import timofeev11 from "../../../../assets/img/interview/timofeev/12.jpg";
import timofeev12 from "../../../../assets/img/interview/timofeev/13.jpg";
import timofeev13 from "../../../../assets/img/interview/timofeev/14.jpg";

const Timofeev = () => {
  return (
    <section className="interview-container">
      <h1>ВЫПУСКНИК-2023-БУДУЩИЙ КАПИТАН</h1>
      <div className="image-wrapper">
        <img src={timofeev11} alt="Фото уплыло:(" height="100%" width="100%" />
        <p>
          <i>Стань капитаном своей судьбы!</i>
        </p>
      </div>
      <p>
        Тимофеев Даниил Аркадьевич - выпускник 2023 года, получил диплом «с
        отличием», будущий капитан, может быть преподаватель, в настоящее время
        проходит срочную службу в рядах Вооруженных Сил Российской Федерации.
        Даниил – именной стипендиат Главы Республики Башкортостан, Правительства
        Российской Федерации.
      </p>
      <p>
        <strong>
          Ты отличник, получал именные стипендии, наверное, все время учебы
          провел за учебниками?
        </strong>
      </p>
      <p>
        - Нет, конечно, из четырех лет и десяти месяцев учебы набегает в сумме
        больше года практики, а там только теплоход, вода, работа. А еще новые
        города, красивые места, новые люди и впечатления.
      </p>
      <p>
        <strong>И где ты побывал на практике?</strong>
      </p>
      <p>
        - И на севере, и на юге: реки Лена, Яна, Индигирка, Алдан, Волга, Кама,
        Нева, Дон; моря – Лаптевых, Восточно-Сибирское, Азовское, Черное. Ходил
        на грузовом флоте: танкеры и сухогрузы.
      </p>
      <p>
        <strong>
          Ты сказал, что срок обучения больше четырех лет, за такой срок можно
          институт окончить.
        </strong>
      </p>
      <p>
        - Время быстро пролетело, больше четырех лет мы учимся, потому что
        обучение идет по углубленному уровню, проще говоря, я не просто
        судоводитель, а имею право управлять судовыми энергетическими
        установками. Фактически, это две специальности: и судоводителя и
        судомеханика. А это для флота очень ценно.
      </p>
      <p>
        <strong>Чем были наполнены эти годы?</strong>
      </p>
      <p>
        - Я был старшиной группы, занимался гиревым спортом, волейболом
        участвовал в соревнованиях, с 1 по 4 курс танцевал в нашей студии. На
        старших курсах стал победителем во Всероссийском конкурсе
        профессионального мастерства по специальности «Судовождение», вместе с
        ребятами также взяли диплом победителей в хакатоне «Цифровая экосистема
        ВГУВТ – взгляд в будущее».
      </p>
      <p>
        <strong>Какие планы на ближайшее будущее?</strong>
      </p>
      <p>
        - Отслужить в армии, продолжить обучение по специальности и получить
        высшее образование, стать капитаном. Еще хотелось бы, также, как и
        другие капитаны, закончившие наш филиал, приходить в межнавигационный
        период и попробовать себя преподавателем.
      </p>

      <div className="carousel-wrapper">
        <Carousel autoplay={true} dotPosition="top">
          <div>
            <img src={timofeev} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev1} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev2} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev3} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev4} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev5} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev6} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev7} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev8} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev9} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev10} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev12} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={timofeev13} alt="Фото уплыло:(" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default Timofeev;

import React from "react";
import { Carousel } from "antd";
import abkadirov from "../../../../assets/img/interview/abkadirov/Абкадиров 1.jpg";
import abkadirov2 from "../../../../assets/img/interview/abkadirov/1 УРУшник Абкадиров И.А. -  курсант.jpg";
import abkadirov3 from "../../../../assets/img/interview/abkadirov/2 Групповая практика 1975 года 02a.jpg";
import abkadirov4 from "../../../../assets/img/interview/abkadirov/5 .jpg";
import abkadirov5 from "../../../../assets/img/interview/abkadirov/АБКАДИРОВ 001.jpg";
import abkadirov6 from "../../../../assets/img/interview/abkadirov/АБКАДИРОВ 008a.jpg";
import abkadirov7 from "../../../../assets/img/interview/abkadirov/АБКАДИРОВ 008b.jpg";
import abkadirov8 from "../../../../assets/img/interview/abkadirov/АБКАДИРОВ 008c.jpg";

import abkadirov10 from "../../../../assets/img/interview/abkadirov/Ливерпуль, CAWERN PUB снаружи, CLUB напротив в подвале.jpg";

const customDotStyle = {
  width: "12px",
  height: "12px",
  backgroundColor: "red", // Измените цвет точек здесь
  borderRadius: "50%",
};

const Abkadirov = () => {
  return (
    <section className="interview-container">
      <h1>КАПИТАН-ПРЕПОДАВАТЕЛЬ</h1>
      <div className="image-wrapper">
        <img src={abkadirov} alt="Фото уплыло:(" height="100%" width="100%" />
        <p>
          <i>
            «Флот – мощная и большая организация – работа по душе найдется
            каждому…» Абкадиров Ильдар Ангамович
          </i>
        </p>
      </div>
      <p>
        Абкадиров Ильдар Ангамович - выпускник 1977 года, капитан дальнего
        плавания, в настоящее время, преподаватель специальных судоводительских
        дисциплин Уфимского филиала ФГБОУ ВО «ВГУВТ».
      </p>
      <p>
        <strong>
          Можете перечислить, где побывали, каких океанах и морях ходили как
          капитан дальнего плавания?
        </strong>
      </p>
      <p>
        - Совершенно верно задан вопрос, моряки, как известно не плавают, а
        «ходят». А ответ простой: кроме Антарктиды, побывал практически везде.
      </p>
      <p>
        <strong>Как Вы стали капитаном дальнего плавания?</strong>
      </p>
      <p>
        - Чтобы стать капитаном, надо начать путь от молодого штурмана и пройти
        все этапы, чтобы набраться опыта, просолиться и закалиться. Стать
        надежным старшим помощником капитана – старпомом. Тогда только капитан
        тебя будет рекомендовать в капитаны. Вообще, хороший капитан всегда
        набирает себе команду и растит «делает» свою команду.
      </p>
      <p>
        <strong>
          Как получилось, что мальчишка из далекой от океанов Башкирии пошел
          осваивать профессию судоводителя?
        </strong>
      </p>
      <p>
        - Мальчишками, гоняли на велосипедах, во дворе одного из зданий попали в
        клуб юных моряков, тогда решил – это мое будущее, о чем нисколько не
        жалею. Хотел пойти в мореходку, но меня, пятнадцатилетнего мальчишку,
        мама далеко не отпустила, только до Уфы, где тогда открылось Уфимское
        речное училище.
      </p>
      <p>
        <strong>Что Вам дала учеба в речном училище?</strong>
      </p>
      <p>
        - Любопытство, перспективы и выбор направления и в жизни, и в профессии.
      </p>
      <p>
        <strong>
          Ваше самое запомнившееся или любимое судно, на котором Вы поработали
          капитаном?
        </strong>
      </p>
      <p>
        - Было очень интересно ходить на рыболовецком судне по Баренцеву,
        Норвежскому и Гренландскому морям. Говорят, что «рыбак – дважды моряк».
        Этот опыт много дал в профессиональном плане: там надо много и очень
        виртуозно маневрировать. Это очень запомнилось.
      </p>
      <p>
        <strong>
          А в Вашей нынешней профессии – преподавателя судоводительских
          дисциплин, что больше всего нравится?
        </strong>
      </p>
      <p>
        - Когда приходят выпускники, состоявшиеся в профессии, в жизни и уже
        своим приходом, благодарят за переданные знаний и опыт.
      </p>
      <div className="carousel-wrapper">
        <Carousel dotStyle={customDotStyle} autoplay={true} dotPosition="top">
          <div>
            <img src={abkadirov} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={abkadirov2} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={abkadirov3} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={abkadirov4} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={abkadirov5} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={abkadirov6} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={abkadirov7} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={abkadirov8} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={abkadirov10} alt="Фото уплыло:(" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default Abkadirov;

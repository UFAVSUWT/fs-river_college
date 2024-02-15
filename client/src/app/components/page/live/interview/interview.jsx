import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import NewsCard from "../../../common/newsCard/news-card";
import abkadirov from "../../../../assets/img/interview/abkadirov/1 УРУшник Абкадиров И.А. -  курсант.jpg";
import portnyagina from "../../../../assets/img/interview/portnyagina/1.jpg";
import timofeev from "../../../../assets/img/interview/timofeev/11.jpg";
import tokmakov from "../../../../assets/img/interview/tokmakov/1.JPG";
const Interview = () => {
  const newsLinks = [
    {
      title: "ВЫПУСКНИК – КАПИТАН-ПРЕПОДАВАТЕЛЬ",
      image: abkadirov,
      link: "../../live/abkadirov",
    },
    {
      title: "ВЫПУСКНИК – КАПИТАН-ЖЕНЩИНА",
      image: portnyagina,
      link: "../../live/portnyagina",
    },
    {
      title: "ВЫПУСКНИК-2023 – БУДУЩИЙ КАПИТАН",
      image: timofeev,
      link: "../../live/timofeev",
    },
    {
      title: "ВЫПУСКНИК – КАПИТАН-НАЧАЛЬНИК",
      image: tokmakov,
      link: "../../live/tokmakov",
    },
  ];
  return (
    <section
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <h1 className="education__container-title">Карьера наших выпускников!</h1>
      <div className="education__container-content flex min-height university-news-container">
        {newsLinks.map((item, index) => {
          return (
            <NewsCard
              staticCard={true}
              key={index}
              link={item.link}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Interview;

import React, { useContext, useEffect, useState } from "react";
import { paginate } from "../../../../utils/utils";
import { observer } from "mobx-react-lite";
import PaginationComponent from "../../../common/pagination/paginstion";
import NewsCard from "../../../common/newsCard/news-card";
import NewsCardsWrapper from "../../../common/news-card-wrapper/news-card-wrapper";
import { Context } from "../../../../../index";
import { NewsStore } from "../../../../store/news-store";
const OurPride = observer(() => {
  const { news, isLoadingNews, loadNews } = NewsStore;
  useEffect(() => {
    loadNews();
  }, []);

  // сортируем новости постранично
  const prideNews = news.filter((n) => n.page === "STUDENT_PRIDE").reverse();
  // задаем размер страницы
  const pageSize = 12;
  // текущая страница
  const [currentPage, setCurrentPage] = useState(1);
  // получаем размер массива на одну страницу
  const newsCrop = paginate(prideNews, currentPage, pageSize);
  if (isLoadingNews) return "Загрузка";
  if (newsCrop.length === 0 || !newsCrop)
    return "На этой странице новостей пока что нет...";
  return (
    <>
      Разработка
      <NewsCardsWrapper>
        {newsCrop.map((n) => (
          <NewsCard
            id={n.id}
            staticCard={false}
            key={n.id}
            link={n.id}
            title={n.title}
            image={process.env.REACT_APP_API_URL + n.image}
          />
        ))}
      </NewsCardsWrapper>
      {prideNews.length <= pageSize ? null : (
        <PaginationComponent
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          news={prideNews}
        />
      )}
    </>
  );
});
export default OurPride;

import { Context } from "../../../../../index";
import React, { useContext, useEffect, useState } from "react";
import { paginate } from "../../../../utils/utils";
import { observer } from "mobx-react-lite";
import NewsCardsWrapper from "../../../common/news-card-wrapper/news-card-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
import PaginationComponent from "../../../common/pagination/paginstion";
import { NewsStore } from "../../../../store/news-store";

const StudentsLive = observer(() => {
  const { news, isLoadingNews, loadNews } = NewsStore;
  useEffect(() => {
    loadNews();
  }, []);
  // сортируем новости постранично
  const liveNews = news.filter((n) => n.page === "STUDENT_LIFE").reverse();
  // задаем размер страницы
  const pageSize = 12;
  // текущая страница
  const [currentPage, setCurrentPage] = useState(1);
  // получаем размер массива на одну страницу
  const newsCrop = paginate(liveNews, currentPage, pageSize);
  if (isLoadingNews) return "Загрузка";
  if (newsCrop.length === 0 || !newsCrop)
    return "На этой странице новостей пока что нет...";
  return (
    <>
      <NewsCardsWrapper>
        {newsCrop.map((n) => (
          <NewsCard
            id={n.id}
            staticCard={false}
            key={n.id}
            title={n.title}
            image={process.env.REACT_APP_API_URL + n.image}
          />
        ))}
      </NewsCardsWrapper>
      {liveNews.length <= pageSize ? null : (
        <PaginationComponent
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          news={liveNews}
        />
      )}
    </>
  );
});
export default StudentsLive;

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../../index";
import NewsCardsWrapper from "../../../common/news-card-wrapper/news-card-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
import PaginationComponent from "../../../common/pagination/paginstion";
import { paginate } from "../../../../utils/utils";
import { observer } from "mobx-react-lite";
import { NewsStore } from "../../../../store/news-store";
const Sport = observer(() => {
  const { news, isLoadingNews, loadNews } = NewsStore;
  useEffect(() => {
    loadNews();
  }, []);
  // сортируем новости постранично
  const sportNews = news.filter((n) => n.page === "STUDENT_SPORT").reverse();
  // задаем размер страницы
  const pageSize = 12;
  // текущая страница
  const [currentPage, setCurrentPage] = useState(1);
  // получаем размер массива на одну страницу
  const newsCrop = paginate(sportNews, currentPage, pageSize);
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
            link={n.id}
            title={n.title}
            image={process.env.REACT_APP_API_URL + n.image}
          />
        ))}
      </NewsCardsWrapper>
      {sportNews.length <= pageSize ? null : (
        <PaginationComponent
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          news={sportNews}
        />
      )}
    </>
  );
});
export default Sport;

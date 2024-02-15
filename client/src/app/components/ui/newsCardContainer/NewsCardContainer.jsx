import React, { useState } from "react";
import NewsCard from "../../common/newsCard/news-card";
import NewsCardsWrapper from "../../common/news-card-wrapper/news-card-wrapper";

import { NewsStore } from "../../../store/news-store";
import { toJS } from "mobx";
const NewsCardContainer = () => {
  const [isShowing, setIsShowing] = useState(false);

  const { news, isLoadingNews } = NewsStore;

  const refersedNews = toJS(news).reverse();

  const firstNews = refersedNews.find((n) => n.card === "1");
  const secondNews = refersedNews.find((n) => n.card === "2");
  const thirdNews = refersedNews.find((n) => n.card === "3");
  const fourthNews = refersedNews.find((n) => n.card === "4");
  const fifthNews = refersedNews.find((n) => n.card === "5");
  const sixthNews = refersedNews.find((n) => n.card === "6");

  if (isLoadingNews) return "Загрузка...";
  return (
    <div
      onClick={() => setIsShowing(!isShowing)}
      className={isShowing ? "showing" : ""}
    >
      <NewsCardsWrapper>
        {firstNews === undefined ? null : (
          <NewsCard
            key={firstNews?.id}
            id={firstNews?.id}
            staticCard={false}
            title={firstNews?.title}
            image={process.env.REACT_APP_API_URL + firstNews?.image}
          />
        )}
        {secondNews === undefined ? null : (
          <NewsCard
            key={secondNews?.id}
            id={secondNews?.id}
            staticCard={false}
            title={secondNews?.title}
            image={process.env.REACT_APP_API_URL + secondNews?.image}
          />
        )}
        {thirdNews === undefined ? null : (
          <NewsCard
            key={thirdNews?.id}
            id={thirdNews?.id}
            staticCard={false}
            title={thirdNews?.title}
            image={process.env.REACT_APP_API_URL + thirdNews?.image}
          />
        )}
        {fourthNews === undefined ? null : (
          <NewsCard
            key={fourthNews?.id}
            id={fourthNews?.id}
            staticCard={false}
            title={fourthNews?.title}
            image={process.env.REACT_APP_API_URL + fourthNews?.image}
          />
        )}
        {fifthNews === undefined ? null : (
          <NewsCard
            key={fifthNews?.id}
            id={fifthNews?.id}
            staticCard={false}
            title={fifthNews?.title}
            image={process.env.REACT_APP_API_URL + fifthNews?.image}
          />
        )}
        {sixthNews === undefined ? null : (
          <NewsCard
            key={sixthNews?.id}
            id={sixthNews?.id}
            staticCard={false}
            title={sixthNews?.title}
            image={process.env.REACT_APP_API_URL + sixthNews?.image}
          />
        )}
      </NewsCardsWrapper>
    </div>
  );
};
export default NewsCardContainer;

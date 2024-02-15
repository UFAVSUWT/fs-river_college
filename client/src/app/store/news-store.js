import { makeAutoObservable } from "mobx";
import {
  createNews as createNewNews,
  fetchNews,
/*   editNews as editCurrentNews, */
} from "../httpService/newsApi";

export const NewsStore = makeAutoObservable({
  news: [],
  isLoadingNews: false,
  errorNews: null,
  isCreateNewsLoading: false,
  errorOfCreateingNews: null,
  currentNews: {},
  isEditedNewsLoading: false,
  errorEditedNews: null,

  *loadNews() {
    NewsStore.isLoadingNews = true;
    try {
      const data = yield fetchNews();
      if (data) {
        NewsStore.news = data;
      } else {
        NewsStore.errorNews = "Данные не найдены";
      }
    } catch (e) {
      if (e) NewsStore.error = e.message;
    } finally {
      NewsStore.isLoadingNews = false;
    }
  },
  *createNews(news, onNavigate) {
    NewsStore.errorOfCreateingNews = null;
    NewsStore.isCreateNewsLoading = true;
    try {
      const data = yield createNewNews(news);
      if (data) {
        NewsStore.news.push(data);
        NewsStore.currentNews = data;
      } else {
        NewsStore.errorOfCreateingNews =
          "Что-то пошло не так, новость не создана :(";
      }
    } catch (e) {
      if (e) NewsStore.errorOfCreateingNews = e.message;
    } finally {
      NewsStore.isCreateNewsLoading = false;
      onNavigate(NewsStore.currentNews);
      NewsStore.currentNews = {};
    }
  },
  /*   *editCurrentNews(currentNews) {
    NewsStore.isEditedNewsLoading = true;
    try {
      const data = yield editCurrentNews(currentNews);
      if (data) {
        NewsStore.news = NewsStore.news.map((e) => {
          if (e.id === currentNews.id) {
            return { ...data };
          }
        });
      } else {
        NewsStore.errorEditedNews =
          "Что-то пошло не так, новость не создана :(";
      }
    } catch (e) {
      if (e) NewsStore.errorEditedNews = e.message;
    } finally {
      NewsStore.isEditedNewsLoading = false;
    }
  }, */
});

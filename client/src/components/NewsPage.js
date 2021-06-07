import React from "react";
import NewsCard from "./NewsCard";

class NewsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Новости</h1>
        <NewsCard topic="Заголовок новости 1" news_text="Текст новости 1" />
        <NewsCard topic="Заголовок новости 2" news_text="Текст новости 2" />
        <NewsCard topic="Заголовок новости 3" news_text="Текст новости 3" />
        <NewsCard topic="Заголовок новости 4" news_text="Текст новости 4" />
      </div>
    );
  }
}

export default NewsPage;

// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ cards, isPathSaved }) {
  return (
    <ul className="moviesCardList">
      {cards.map((cardData) => (
        <li key={cardData.id} className="moviesCardList-item">
          <MoviesCard
            src={cardData.src}
            alt="фильм"
            title={cardData.title}
            dateTime="PT1H42M"
            duration="1ч42м"
            saved={false}
            isPathSaved={isPathSaved}
          ></MoviesCard>
        </li>
      ))}
    </ul>
  );
}

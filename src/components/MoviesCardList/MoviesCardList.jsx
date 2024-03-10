// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const urlBeatfilm = "https://api.nomoreparties.co";

// обработка данных о длительности фильма
function getFormattedDuration(data) {
  const hours = Math.floor(data / 60); // целое количество часов
  const minutes = data % 60; // остаток от деления на 60
  return `${hours > 0 ?  hours : '0'}ч${minutes}м`;
}
function getHours(data) {
  const hours = Math.floor(data / 60); // целое количество часов
  return `${hours > 0 ?  hours : '0'}`;
}
function getMinutes(data) {
  const minutes = data % 60; // остаток от деления на 60
  return minutes;
}

export default function MoviesCardList({ cards, isPathSaved, visibleCards }) {
//export default function MoviesCardList({ cards, isPathSaved }) {
  return (
    <ul className="moviesCardList">
      {/*{cards.map((cardData) => (*/}
      {cards.slice(0, visibleCards).map((cardData) => (
        <li key={cardData.id} className="moviesCardList-item">
          <MoviesCard
            src={`${urlBeatfilm}${cardData.src}`}
            alt="фильм"
            title={cardData.title}
            dateTime={`PT${getHours(cardData.duration)}H${getMinutes(cardData.duration)}M`}
            duration={getFormattedDuration(cardData.duration)}
            trailerLink={cardData.trailerLink}
            saved={false}
            isPathSaved={isPathSaved}
          ></MoviesCard>
        </li>
      ))}
    </ul>
  );
}

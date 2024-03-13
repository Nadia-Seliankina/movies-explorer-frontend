// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

// обработка данных о длительности фильма
function getFormattedDuration(data) {
  const hours = Math.floor(data / 60); // целое количество часов
  const minutes = data % 60; // остаток от деления на 60
  return `${hours > 0 ? hours : "0"}ч${minutes}м`;
}
function getHours(data) {
  const hours = Math.floor(data / 60); // целое количество часов
  return `${hours > 0 ? hours : "0"}`;
}
function getMinutes(data) {
  const minutes = data % 60; // остаток от деления на 60
  return minutes;
}

export default function MoviesCardList({
  cards,
  isPathSaved,
  visibleCards,
  onLikeCard,
  savedCards,
}) {

  // есть ли в массиве с сохраненными фильмами id фильма, что рендерим
  function isLiked(card) {
    return savedCards.some((item) => {
      return item.movieId === card.movieId;
    });
  }

  // сравниваю данные карточки с API с массивом сохраненных карточек
  // если фильм сохранен пользователем, добавляем к карточке найденного фильма новый ключ с id фильма из БД
  function setId(itemF) {
    savedCards.forEach((itemS) => {
      if (itemF.movieId === itemS.movieId) {
        //добавляем новое свойство в карточку найденного фильма
        itemF._id = itemS._id;
      }
    });
  }

  return (
    <ul className="moviesCardList">
      {cards.slice(0, visibleCards).map((cardData) => (
        <li key={cardData.movieId} className="moviesCardList-item">
          <MoviesCard
            movieId={cardData.movieId}
            card={cardData}
            image={cardData.image}
            alt="фильм"
            title={cardData.nameRU}
            dateTime={`PT${getHours(cardData.duration)}H${getMinutes(
              cardData.duration
            )}M`}
            duration={getFormattedDuration(cardData.duration)}
            trailerLink={cardData.trailerLink}
            nameEN={cardData.nameEN}
            nameRU={cardData.nameRU}
            isPathSaved={isPathSaved}
            onLikeCard={onLikeCard}
            isSaved={isLiked(cardData)}
            _id={setId(cardData)}
          ></MoviesCard>
        </li>
      ))}
    </ul>
  );
}

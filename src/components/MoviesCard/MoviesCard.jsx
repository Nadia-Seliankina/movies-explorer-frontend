// компонент одной карточки фильма
import "./MoviesCard.css";

export default function MoviesCard({
  image,
  alt,
  title,
  duration,
  dateTime,
  isPathSaved,
  trailerLink,
  onLikeCard,
  card,
  isSaved
}) {
  const handleLikeClick = () => {
    onLikeCard(card);
  };

  return (
    <div className="moviesCard">
      <a
        className="moviesCard__btn-play"
        href={trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="moviesCard__img" src={image} alt={alt} />
      </a>
      <div className="moviesCard__container">
        <div className="moviesCard__info">
          <h2 className="moviesCard__title">{title}</h2>
          <time className="moviesCard__time" dateTime={dateTime}>
            {duration}
          </time>
        </div>
        <button
          type="button"
          onClick={handleLikeClick}
          className={
            isPathSaved
              ? "moviesCard__btn-delete"
              : `moviesCard__btn-save ${
                  isSaved ? "moviesCard__btn-save_saved" : ""
                }`
          }
        ></button>
      </div>
    </div>
  );
}

// компонент одной карточки фильма
import "./MoviesCard.css";

export default function MoviesCard({ src, alt, title, duration, dateTime, saved, isPathSaved }) {
  return (
    <div className="moviesCard">
      <button className="moviesCard__btn-play">
        <img className="moviesCard__img" src={src} alt={alt} />
      </button>
      <div className="moviesCard__container">
        <div className="moviesCard__info">
          <h2 className="moviesCard__title">{title}</h2>
          <time className="moviesCard__time" dateTime={dateTime}>{duration}</time>
        </div>
        <button
          className={isPathSaved ? "moviesCard__btn-delete" : `moviesCard__btn-save ${
            saved ? "moviesCard__btn-save_saved" : ""
          }`}
        ></button>
      </div>
    </div>
  );
}

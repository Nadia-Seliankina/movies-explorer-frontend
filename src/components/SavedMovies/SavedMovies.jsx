// компонент страницы с сохранёнными карточками фильмов
import s from './SavedMovies.module.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';

export default function SavedMovies() {
    return (
        <div className={s.savedMovies}>
            <MoviesCardList></MoviesCardList>
            <MoviesCard></MoviesCard>
        </div>
    );
}
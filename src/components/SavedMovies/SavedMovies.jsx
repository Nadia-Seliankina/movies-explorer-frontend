// компонент страницы с сохранёнными карточками фильмов
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';

export default function SavedMovies() {
    return (
        <div className="SavedMovies">
            <Header></Header>
            <MoviesCardList></MoviesCardList>
            <MoviesCard></MoviesCard>
        </div>
    );
}
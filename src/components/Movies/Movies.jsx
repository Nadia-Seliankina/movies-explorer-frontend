// компонент страницы с поиском по фильмам
import SearchForm from './SearchForm/SearchForm.jsx';
import Preloader from './Preloader/Preloader.jsx';
import MoviesCard from './MoviesCard/MoviesCard.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import s from './Movies.module.css';

export default function Movies() {
    return (
        <div className={s.movies}>
            <SearchForm></SearchForm>
            <Preloader></Preloader>
            <MoviesCard></MoviesCard>
            <MoviesCardList></MoviesCardList>
        </div>
    );
}

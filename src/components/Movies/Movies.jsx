// компонент страницы с поиском по фильмам
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCard from './MoviesCard/MoviesCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import './Movies.css';

export default function Movies() {
    return (
        <div className='Movies'>
            <Header></Header>
            <SearchForm></SearchForm>
            <Preloader></Preloader>
            <MoviesCard></MoviesCard>
            <MoviesCardList></MoviesCardList>
        </div>
    );
}

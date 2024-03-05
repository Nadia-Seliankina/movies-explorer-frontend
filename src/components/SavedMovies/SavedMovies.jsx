// компонент страницы с сохранёнными карточками фильмов
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies({ onClickMenu }) {
    return (
        <>
            <Header isLight={true} onClickMenu={onClickMenu}></Header>
            <main className="savedMovies">
                <SearchForm />
                <MoviesCardList isPathSaved={true} />
            </main>
            <Footer />
        </>
    );
}
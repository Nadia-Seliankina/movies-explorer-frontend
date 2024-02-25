// компонент страницы с поиском по фильмам
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

export default function Movies({ isSearchEmpty }) {
  return (
    <>
      <Header isLight={true}></Header>
      <main className="movies">
        <SearchForm />
        {isSearchEmpty ? (
          <Preloader></Preloader>
        ) : (
          <>
            <MoviesCardList isPathSaved={false} />
            <div className="movies__more">
              <button className="movies__btn-more">Ещё</button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

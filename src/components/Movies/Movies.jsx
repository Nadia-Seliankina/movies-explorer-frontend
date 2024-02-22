// компонент страницы с поиском по фильмам
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
/*import Preloader from "./Preloader/Preloader";*/
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Movies() {
  return (
    <>
      <Header isLight={true}></Header>
      <main className="movies">
        <SearchForm />
        {/*<Preloader></Preloader>*/}
        <MoviesCardList isPathSaved={false}/>
        <div className="movies__more">
          <button className="movies__btn-more">Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

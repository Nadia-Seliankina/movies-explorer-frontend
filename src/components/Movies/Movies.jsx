// компонент страницы с поиском по фильмам
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";

// функция нормализации, принимает массив карточек, возращает его без лишнего мусора
const mapCards = (cards) => {
  return cards.map((item) => ({
    id: item.id,
    title: item.nameRU,
    src: item.image.url,
    duration: item.duration
  }));
};

export default function Movies({ isSearchEmpty }) {
  const [searchQuery, setSearchQuery] = useState("");
  // здесь будем хранить карточки, которые получили с сервера
  const [cards, setCards] = useState([]);
  // preloader статуса загрузки карточек
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    handleRequestSearch();
  }

  // Запросы к серверу
  function handleRequestSearch() {
    setIsLoading(true);
      moviesApi
      .getAllMovies()
      .then((res) => setCards(mapCards(res)))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    handleRequestSearch();
  }, []);

  return (
    <>
      <Header isLight={true}></Header>
      <main className="movies">
        <SearchForm
          onChangeInput={handleInputChange}
          valueInput={searchQuery}
          onSubmit={handleSearchFormSubmit}
        />
        {(isSearchEmpty || isLoading) ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList
              cards={cards}
              isPathSaved={false}
            />
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

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
const mapCards = (movies) => {
  return movies.map((item) => ({
    id: item.id,
    title: item.nameRU,
    src: item.image.url,
    duration: item.duration,
    nameRU: item.nameRU,
    nameEN: item.nameEN,
    trailerLink: item.trailerLink
  }));
};

export default function Movies({ onClickMenu }) {
  const [searchQuery, setSearchQuery] = useState("");
  // здесь будем хранить карточки, которые получили с сервера
  const [initialCards, setinItialCards] = useState([]);
  // карточки после сабмита поиска
  const [foundCards, setFoundCards] = useState([]);
  // preloader статуса загрузки карточек
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  // отправка формы
  const [isSubmited, setIsSubmited] = useState(false);
  // фильтр короткометражек
  //const [isShortMovies, setIsShortMovies] = useState([]);

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
    if(e.target.value === "") {
      setIsSearchEmpty(true);
    }
  }

  // Запросы к серверу
  function handleRequestSearch() {
    setIsLoading(true);
    moviesApi
    .getAllMovies()
    .then((res) => setinItialCards(mapCards(res)))
    .catch((err) => console.log(err))
    .finally(() => {
    setIsLoading(false);
    });
    setFoundCards(
      initialCards.filter((item) => {
        return (item.nameRU || item.nameEN).toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
    setIsSubmited(false);
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setIsSubmited(true);
    //handleRequestSearch();
    setIsSearchEmpty(false);
  }

  //useEffect(() => {
    //handleRequestSearch();
  //}, []); // Выполнять 1 раз при mount - запрос на сервер

  useEffect(() => {
    handleRequestSearch();
  }, [isSubmited]);




  //function handleShortMovies() {
    //setIsShortMovies(foundCards.filter((item) => {
      //return item.duration > 40;
    //})
    //)
  //}

  //useEffect(() => {
    //handleShortMovies();
  //}, [isShortMovies]);

  return (
    <>
      <Header isLight={true} onClickMenu={onClickMenu}></Header>
      <main className="movies">
        <SearchForm
          onChangeInput={handleInputChange}
          valueInput={searchQuery}
          onSubmit={handleSearchFormSubmit}
          //checked={} 
          //setChecked={}
        />
        {isSearchEmpty || isLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList cards={foundCards} isPathSaved={false} />
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

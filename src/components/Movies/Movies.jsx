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

export default function Movies({ onClickMenu, isLogged }) {
  const [searchQuery, setSearchQuery] = useState("");
  // здесь будем хранить карточки, которые получили с сервера
  const [initialCards, setinItialCards] = useState([]);
  // карточки после сабмита поиска
  const [foundCards, setFoundCards] = useState([]);
  // фильтр короткометражек
  const [shortCards, setShortCards] = useState([]);
  // preloader статуса загрузки карточек
  const [isLoading, setIsLoading] = useState(false);
  // инпут поиска
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  // отправка формы
  const [isSubmited, setIsSubmited] = useState(false);
  // значение чекбокса
  const [isChecked, setIsChecked] = useState(false);

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
    if(e.target.value === "") {
      setIsSearchEmpty(true);
    }
  }

  function handleChangeCheckbox(e) {
    setIsChecked(e.target.checked);
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
    if(isChecked) {
      setShortCards(
        foundCards.filter((item) => {
          return item.duration <= 40;
        })
      );
    };
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

  useEffect(() => {
    if(isChecked) {
    handleRequestSearch();
    }
  }, [isChecked]);

  return (
    <>
      <Header isLight={true} onClickMenu={onClickMenu} isLogged={isLogged}></Header>
      <main className="movies">
        <SearchForm
          onChangeInput={handleInputChange}
          valueInput={searchQuery}
          onSubmit={handleSearchFormSubmit}
          onChecked={isChecked}
          handleChangeCheckbox={handleChangeCheckbox}
        />
        {isSearchEmpty || isLoading ? (
          <Preloader />
        ) : (
          <>
            {/*<MoviesCardList cards={foundCards} isPathSaved={false} />*/}
            {!isChecked && <MoviesCardList cards={foundCards} isPathSaved={false} />}
            {isChecked && <MoviesCardList cards={shortCards} isPathSaved={false} />}
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

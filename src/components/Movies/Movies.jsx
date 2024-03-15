// компонент страницы с поиском по фильмам
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";

const urlBeatfilm = "https://api.nomoreparties.co";

// функция нормализации, принимает массив карточек, возращает его без лишнего мусора
const mapCards = (movies) => {
  return movies.map((item) => ({
    movieId: item.id,
    image: `${urlBeatfilm}${item.image.url}`,
    duration: item.duration,
    nameRU: item.nameRU,
    nameEN: item.nameEN,
    trailerLink: item.trailerLink,
    country: item.country,
    director: item.director,
    year: item.year,
    description: item.description,
    thumbnail: `${urlBeatfilm}${item.image.formats.thumbnail.url}`,
  }));
};

export default function Movies({ onClickMenu, loggedIn, onLikeCard, savedCards }) {
  // значение инпута поиска
  const searchQueryInStorage = localStorage.getItem("searchQuery")
    ? localStorage.getItem("searchQuery")
    : "";
  const [searchQuery, setSearchQuery] = useState(searchQueryInStorage);
  // здесь будем хранить карточки, которые получили с сервера
  const [initialCards, setinItialCards] = useState([]);
  // карточки после сабмита поиска
  const foundCardsInStorage = localStorage.getItem("foundCards")
    ? JSON.parse(localStorage.getItem("foundCards"))
    : [];
  const [foundCards, setFoundCards] = useState(foundCardsInStorage);
  // фильтр короткометражек
  const [shortCards, setShortCards] = useState([]);
  // количество отображаемых карточек
  const visibleCardsInStorage = localStorage.getItem("visibleCards")
    ? localStorage.getItem("visibleCards")
    : 0;
  const [visibleCards, setVisibleCards] = useState(visibleCardsInStorage);
  // preloader статуса загрузки карточек
  const [isLoading, setIsLoading] = useState(false);
  // инпут поиска
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  // отправка формы
  const [isSubmited, setIsSubmited] = useState(false);
  // значение чекбокса
  const isCheckedInStorage = localStorage.getItem("isChecked")
    ? JSON.parse(localStorage.getItem("isChecked"))
    : false;
  const [isChecked, setIsChecked] = useState(isCheckedInStorage);
  // сообщение об ошибке после сабмита
  const [messageErrorForm, setMessageErrorForm] = useState("");
  // сообщение об отсутствии результатов поиска
  const [isNofingFind, setIsNofingFind] = useState("");
  // отображение кнопки "Ещё"
  const [isBtnMoreVisible, setIsBtnMoreVisible] = useState(false);

  function handleInputChange(e) {
    setSearchQuery(e.target.value); // текущее значение инпута
    if (e.target.value === "") {
      setIsSearchEmpty(true);
    }
    setIsNofingFind("");
    setVisibleCards(0);
    setIsBtnMoreVisible(false);
  }

  function handleChangeCheckbox(e) {
    setIsChecked(e.target.checked);
    localStorage.setItem("isChecked", e.target.checked);
  }

  // Запросы к серверу
  function handleRequestSearch() {
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((res) => {
        if (res) {
          setinItialCards(mapCards(res));
        }
      })
      .catch((err) => {
        console.log(`При поиске фильмов: ${err.message}`);
        setMessageErrorForm(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });

    setFoundCards(
      initialCards.filter((item) => {
        return (item.nameRU || item.nameEN)
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      })
    );

    localStorage.setItem("foundCards", JSON.stringify(foundCards));
    
    if (isChecked) {
      setShortCards(
        foundCards.filter((item) => {
          return item.duration <= 40;
        })
      );
    }
    setIsSubmited(false);
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setIsSubmited(true);
    setIsSearchEmpty(false);

    if (window.innerWidth >= 1024) {
      setVisibleCards((prevValue) => prevValue + 16);
      localStorage.setItem("visibleCards", 16);
    }
    if (544 < window.innerWidth && window.innerWidth < 1024) {
      setVisibleCards((prevValue) => prevValue + 8);
      localStorage.setItem("visibleCards", 8);
    }
    if (window.innerWidth <= 544) {
      setVisibleCards((prevValue) => prevValue + 5);
      localStorage.setItem("visibleCards", 5);
    }

    localStorage.setItem("searchQuery", searchQuery);
  }

  useEffect(() => {
    if (foundCardsInStorage.length > 0) {
      setIsNofingFind("");
    }
    if (foundCards.length === 0 && !isChecked) {
      setIsNofingFind("Ничего не найдено");
      setIsBtnMoreVisible(false);
    }
    
    console.log(foundCards.length);

    if (foundCards.length > 16 && window.innerWidth >= 1024 && !isChecked) {
      setIsBtnMoreVisible(true);
    }
    if (
      foundCards.length > 8 &&
      544 < window.innerWidth &&
      window.innerWidth < 1024 && !isChecked
    ) {
      setIsBtnMoreVisible(true);
    }
    if (foundCards.length > 5 && window.innerWidth <= 544 && !isChecked) {
      setIsBtnMoreVisible(true);
    }
  }, [foundCards, isChecked]);

  useEffect(() => {
    if (foundCardsInStorage.length > 0) {
      setIsNofingFind("");
    }
    if (shortCards.length === 0 && isChecked) {
      setIsNofingFind("Ничего не найдено");
      setIsBtnMoreVisible(false);
    }
    console.log(shortCards.length);
    if (shortCards.length > 16 && window.innerWidth >= 1024 && isChecked) {
      setIsBtnMoreVisible(true);
    }
    if (
      shortCards.length > 8 &&
      544 < window.innerWidth &&
      window.innerWidth < 1024
    ) {
      setIsBtnMoreVisible(true);
    }
    if (shortCards.length > 5 && window.innerWidth <= 544 && isChecked) {
      setIsBtnMoreVisible(true);
    }
  }, [shortCards, isChecked]);

  function handleShowMoreCards() {
    if (window.innerWidth >= 1024) {
      setVisibleCards((prevValue) => prevValue + 4);
    }
    if (544 < window.innerWidth && window.innerWidth < 1024) {
      setVisibleCards((prevValue) => prevValue + 2);
    }
    if (window.innerWidth <= 544) {
      setVisibleCards((prevValue) => prevValue + 2);
    }
  }

  useEffect(() => {
    // все карточки видны отключаем кнопку
    if (foundCards.length <= visibleCards && !isChecked) {
      setIsBtnMoreVisible(false);
    }
  }, [foundCards, isChecked]);

  useEffect(() => {
    // все карточки видны отключаем кнопку
    if (shortCards.length <= visibleCards && isChecked) {
      setIsBtnMoreVisible(false);
    }
  }, [shortCards, isChecked]);

  

  // после каждого сабмита
  useEffect(() => {
    handleRequestSearch();
  }, [isSubmited]);

  useEffect(() => {
    if (isChecked) {
      handleRequestSearch();
    }
  }, [isChecked]);

  useEffect(() => {
    // при монтировании берем инфо из ЛС
    if(searchQueryInStorage) {
      setIsSearchEmpty(false);
    }

    setFoundCards(foundCardsInStorage);
    setIsNofingFind("");

    if (foundCardsInStorage.length === 0) {
      setIsNofingFind("Ничего не найдено");
    }

    if (window.innerWidth >= 1024) {
      setVisibleCards(16);
    }
    if (544 < window.innerWidth && window.innerWidth < 1024) {
      setVisibleCards(8);
    }
    if (window.innerWidth <= 544) {
      setVisibleCards(5);
    }

    const handleResize = () => {
      if (window.innerWidth  >= 1024) {
        setVisibleCards((prevValue) => prevValue);
      }
      if (544 < window.innerWidth && window.innerWidth < 1024) {
        setVisibleCards((prevValue) => prevValue);
      }
      if (window.innerWidth <= 544) {
        setVisibleCards((prevValue) => prevValue);
      }
    };
    setTimeout(handleResize, 3000);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header
        isLight={true}
        onClickMenu={onClickMenu}
        isLogged={loggedIn}
      ></Header>
      <main className="movies">
        <SearchForm
          onChangeInput={handleInputChange}
          valueInput={searchQuery}
          onSubmit={handleSearchFormSubmit}
          isChecked={isChecked}
          handleChangeCheckbox={handleChangeCheckbox}
        />
        {isSearchEmpty || isLoading ? (
          <Preloader />
        ) : (
          <>
            {!isChecked && (
              <MoviesCardList
                cards={foundCards}
                isPathSaved={false}
                visibleCards={visibleCards}
                onLikeCard={onLikeCard}
                savedCards={savedCards}
              />
            )}
            {isChecked && (
              <MoviesCardList
                cards={shortCards}
                isPathSaved={false}
                visibleCards={visibleCards}
                onLikeCard={onLikeCard}
                savedCards={savedCards}
              />
            )}
            <div
              className={`movies__more ${
                isBtnMoreVisible ? "" : "movies__more_off"
              }`}
            >
              <button
                className="movies__btn-more"
                type="button"
                onClick={handleShowMoreCards}
              >
                Ещё
              </button>
            </div>
            <div className="movies__nofind">{isNofingFind}</div>
            <span className="movies__error">{messageErrorForm}</span>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

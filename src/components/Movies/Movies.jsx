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
    trailerLink: item.trailerLink,
  }));
};

export default function Movies({ onClickMenu, isLogged }) {
  // значение инпута поиска
  const [searchQuery, setSearchQuery] = useState("");
  // здесь будем хранить карточки, которые получили с сервера
  const [initialCards, setinItialCards] = useState([]);
  // карточки после сабмита поиска
  const [foundCards, setFoundCards] = useState([]);
  // фильтр короткометражек
  const [shortCards, setShortCards] = useState([]);
  // количество отображаемых карточек
  const [visibleCards, setVisibleCards] = useState(0);
  // preloader статуса загрузки карточек
  const [isLoading, setIsLoading] = useState(false);
  // инпут поиска
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  // отправка формы
  const [isSubmited, setIsSubmited] = useState(false);
  // значение чекбокса
  const [isChecked, setIsChecked] = useState(false);
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
  }

  function handleChangeCheckbox(e) {
    setIsChecked(e.target.checked);
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
      console.log(`setVisibleCards 16 ${window.innerWidth}`);
    }
    if (544 < window.innerWidth && window.innerWidth < 1024) {
      setVisibleCards((prevValue) => prevValue + 8);
      console.log(`setVisibleCards 8 ${window.innerWidth}`);
    }
    if (window.innerWidth <= 544) {
      setVisibleCards((prevValue) => prevValue + 5);
      console.log(`setVisibleCards 5 ${window.innerWidth}`);
    }
  }

  function handleShowMoreCards() {
    if (window.innerWidth >= 1024) {
      setVisibleCards((prevValue) => prevValue + 4);
      console.log(`handleShowMoreCards ${window.innerWidth}`);
    }
    if (544 < window.innerWidth && window.innerWidth < 1024) {
      setVisibleCards((prevValue) => prevValue + 2);
      console.log(`handleShowMoreCards ${window.innerWidth}`);
    }
    if (window.innerWidth <= 544) {
      setVisibleCards((prevValue) => prevValue + 2);
      console.log(`handleShowMoreCards ${window.innerWidth}`);
    }
  }

  useEffect(() => {
    if (foundCards.length === 0) {
      setIsNofingFind("Ничего не найдено");
      setIsBtnMoreVisible(false);
    }
    console.log(foundCards.length);

    if (foundCards.length > 16 && window.innerWidth >= 1024) {
    setIsBtnMoreVisible(true);
    }
    if (foundCards.length > 8 && 544 < window.innerWidth && window.innerWidth < 1024) {
      setIsBtnMoreVisible(true);
    }
    if (foundCards.length > 5 && window.innerWidth <= 544) {
      setIsBtnMoreVisible(true);
    }
  }, [foundCards]);

  useEffect(() => {
    handleRequestSearch();
  }, [isSubmited]);

  useEffect(() => {
    if (isChecked) {
      handleRequestSearch();
    }
  }, [isChecked]);

  useEffect(() => {
    // все карточки видны отключаем кнопку
    if (foundCards.length <= visibleCards) {
    setIsBtnMoreVisible(false);
    }
    console.log(`${foundCards.length} < ${visibleCards}`);
  }, [foundCards, visibleCards]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header
        isLight={true}
        onClickMenu={onClickMenu}
        isLogged={isLogged}
      ></Header>
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
            {!isChecked && (
              <MoviesCardList
                cards={foundCards}
                isPathSaved={false}
                visibleCards={visibleCards}
              />
            )}
            {isChecked && (
              <MoviesCardList cards={shortCards} isPathSaved={false} visibleCards={visibleCards}/>
            )}
            <div className={`movies__more ${
                  isBtnMoreVisible ? "" : "movies__more_off"
                }`}>
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

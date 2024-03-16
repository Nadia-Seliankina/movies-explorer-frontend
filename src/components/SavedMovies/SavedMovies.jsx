// компонент страницы с сохранёнными карточками фильмов
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";

export default function SavedMovies({
  onClickMenu,
  loggedIn,
  savedCards,
  onLikeCard,
}) {
  // значение инпута поиска
  const [searchQuery, setSearchQuery] = useState("");
  // валидация инпута
  const [errors, setErrors] = useState("");
  //const [isValid, setIsValid] = useState(false);
  // карточки после сабмита поиска
  const [foundCards, setFoundCards] = useState([]);
  // фильтр короткометражек
  const [shortCards, setShortCards] = useState([]);
  // отправка формы
  const [isSubmited, setIsSubmited] = useState(false);
  // значение чекбокса
  const [isChecked, setIsChecked] = useState(false);
  // сообщение об отсутствии результатов поиска
  const [isNofingFind, setIsNofingFind] = useState("");

  function handleInputChange(e) {
    setSearchQuery(e.target.value); // текущее значение инпута
    setIsSubmited(false);
    setIsNofingFind("");
    
    //setIsValid(e.target.closest(".searchForm").checkValidity()); // получаем объект формы, получем статус валидности
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity("Нужно ввести ключевое слово");
    } else {
      e.target.setCustomValidity("");
    }
    setErrors(e.target.validationMessage);
  }

  function handleChangeCheckbox(e) {
    setIsChecked(e.target.checked);
  }

  // Поиск по массиву сохраненых карточек
  function handleRequestSearch() {
    setFoundCards(
      savedCards.filter((item) => {
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
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setIsSubmited(true);
  }

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
    if (foundCards.length === 0 && !isChecked) {
      setIsNofingFind("Ничего не найдено");
    }
  }, [foundCards, isChecked]);

  useEffect(() => {
    if (shortCards.length === 0 && isChecked) {
      setIsNofingFind("Ничего не найдено");
    }
  }, [shortCards, isChecked]);

  return (
    <>
      <Header
        isLight={true}
        onClickMenu={onClickMenu}
        isLogged={loggedIn}
      ></Header>
      <main className="savedMovies">
        <SearchForm
          onChangeInput={handleInputChange}
          valueInput={searchQuery}
          onSubmit={handleSearchFormSubmit}
          isChecked={isChecked}
          handleChangeCheckbox={handleChangeCheckbox}
          //isDisabledBtn={!isValid}
          errorMessage={errors}
        />
        <>
          {!isSubmited && !isChecked && (
            <MoviesCardList
              isPathSaved={true}
              cards={savedCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />
          )}
          {isSubmited && !isChecked && (
            <MoviesCardList
              isPathSaved={true}
              cards={foundCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />
          )}
          {isSubmited && isChecked && (
            <MoviesCardList
              isPathSaved={true}
              cards={shortCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />
          )}
          {!isSubmited && isChecked && (
            <MoviesCardList
              isPathSaved={true}
              cards={shortCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />
          )}
          {isSubmited && <div className="savedMovies__nofind">{isNofingFind}</div>}
        </>
      </main>
      <Footer />
    </>
  );
}

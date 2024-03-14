// компонент страницы с сохранёнными карточками фильмов
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function SavedMovies({ onClickMenu, loggedIn, savedCards, onLikeCard }) {
  // значение инпута поиска
  const [searchQuery, setSearchQuery] = useState("");
  // карточки после сабмита поиска
  const [foundCards, setFoundCards] = useState([]);
  // фильтр короткометражек
  const [shortCards, setShortCards] = useState([]);
  // отправка формы
  const [isSubmited, setIsSubmited] = useState(false);
  // значение чекбокса
  const [isChecked, setIsChecked] = useState(false);
  // сообщение об ошибке после сабмита
  //const [messageErrorForm, setMessageErrorForm] = useState("");
  // сообщение об отсутствии результатов поиска
  //const [isNofingFind, setIsNofingFind] = useState("");
  // инпут поиска
  //const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  function handleInputChange(e) {
    setSearchQuery(e.target.value); // текущее значение инпута
    setIsSubmited(false);
    //setIsNofingFind("");
    //if (e.target.value === "") {
        //setIsSearchEmpty(true);
    //}
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

  //function handleCheckSearch() {
    //setShortCards(
        //savedCards.filter((item) => {
            //return item.duration <= 40;
      //})
    //);
  //}

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setIsSubmited(true);
    //setIsSearchEmpty(false);
  }

  //useEffect(() => {
    //if (foundCards.length === 0) {
      //setIsNofingFind("Ничего не найдено");
      //setIsBtnMoreVisible(false);
    //}
    //console.log(foundCards.length);
  //}, [foundCards]);

  // после каждого сабмита
  useEffect(() => {
    handleRequestSearch();
  }, [isSubmited]);

  useEffect(() => {
    if (isChecked) {
        handleRequestSearch();
    }
  }, [isChecked]);

  //useEffect(() => {
    //if (isChecked) {
        //handleCheckSearch();
    //}
  //}, [isSearchEmpty]);

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
        />
        <>
          {!isSubmited && !isChecked && <MoviesCardList
              isPathSaved={true}
              cards={savedCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />}
           {isSubmited && !isChecked && <MoviesCardList
              isPathSaved={true}
              cards={foundCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />}
            {isSubmited && isChecked && <MoviesCardList
              isPathSaved={true}
              cards={shortCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />}
            {!isSubmited && isChecked && <MoviesCardList
              isPathSaved={true}
              cards={shortCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />}

          {/*{!isChecked && (
            <MoviesCardList
              isPathSaved={true}
              cards={savedCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />
          )}
          {isSubmited && (
          <MoviesCardList
              isPathSaved={true}
              cards={foundCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />
          )}
          {isChecked && (
            <MoviesCardList
              isPathSaved={true}
              cards={shortCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />
          )}*/}
          {/*<div className="movies__nofind">{isNofingFind}</div>*/}
          {/*<span className="movies__error">{messageErrorForm}</span>*/}
        </>
      </main>
      <Footer />
    </>
  );
}

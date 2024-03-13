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
  //const [searchQuery, setSearchQuery] = useState("");
  // карточки после сабмита поиска
  //const foundCardsInStorage = localStorage.getItem("foundCards")
    //? JSON.parse(localStorage.getItem("foundCards"))
    //: [];
  //const [foundCards, setFoundCards] = useState([]);
  // фильтр короткометражек
  //const [shortCards, setShortCards] = useState([]);
  // количество отображаемых карточек
  //const [visibleCards, setVisibleCards] = useState(0);
  // preloader статуса загрузки карточек
  //const [isLoading, setIsLoading] = useState(false);
  // инпут поиска
  //const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  // отправка формы
  //const [isSubmited, setIsSubmited] = useState(false);
  // значение чекбокса
  //const isCheckedInStorage = localStorage.getItem("isChecked")
    //? JSON.parse(localStorage.getItem("isChecked"))
    //: false;
  //const [isChecked, setIsChecked] = useState(false);
  // сообщение об ошибке после сабмита
  //const [messageErrorForm, setMessageErrorForm] = useState("");
  // сообщение об отсутствии результатов поиска
  //const [isNofingFind, setIsNofingFind] = useState("");

  //function handleInputChange(e) {
    //setSearchQuery(e.target.value); // текущее значение инпута
    //if (e.target.value === "") {
      //setIsSearchEmpty(true);
    //}
    //setIsNofingFind("");
    //setVisibleCards(0);
  //}

  //function handleChangeCheckbox(e) {
    //setIsChecked(e.target.checked);
  //}

  // Запросы к серверу
  //function handleRequestSearch() {
    //setIsLoading(true);
    //moviesApi
      //.getAllMovies()
      //.then((res) => {
        //if (res) {
          //setinItialCards(mapCards(res));
        //}
      //})
      //.catch((err) => {
        //console.log(`При поиске фильмов: ${err.message}`);
        //setMessageErrorForm(
          //"Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        //);
      //})
      //.finally(() => {
        //setIsLoading(false);
      //});
    //setFoundCards(
      //initialCards.filter((item) => {
        //return (item.nameRU || item.nameEN)
          //.toLowerCase()
          //.includes(searchQuery.toLowerCase());
      //})
    //);
    //if (isChecked) {
      //setShortCards(
        //foundCards.filter((item) => {
          //return item.duration <= 40;
        //})
      //);
    //}
    //setIsSubmited(false);
  //}

  //function handleSearchFormSubmit(e) {
    //e.preventDefault();
    //setIsSubmited(true);
    //setIsSearchEmpty(false);
  //}

  //useEffect(() => {
    //if (foundCards.length === 0) {
      //setIsNofingFind("Ничего не найдено");
      //setIsBtnMoreVisible(false);
    //}
    //console.log(foundCards.length);
  //}, [foundCards]);

  // после каждого сабмита
  //useEffect(() => {
    //handleRequestSearch();
  //}, [isSubmited]);

  //useEffect(() => {
    //if (isChecked) {
      //handleRequestSearch();
    //}
  //}, [isChecked]);

  return (
    <>
      <Header
        isLight={true}
        onClickMenu={onClickMenu}
        isLogged={loggedIn}
      ></Header>
      <main className="savedMovies">
        <SearchForm
          //onChangeInput={handleInputChange}
          //valueInput={searchQuery}
          //onSubmit={handleSearchFormSubmit}
          //onChecked={isChecked}
          //handleChangeCheckbox={handleChangeCheckbox}
        />
        <>
          {/*{!isChecked && (*/}
            <MoviesCardList
              isPathSaved={true}
              cards={savedCards}
              onLikeCard={onLikeCard}
              savedCards={savedCards}
            />
          {/*)}*/}
          {/*isChecked && (
            <MoviesCardList
              isPathSaved={true}
              cards={shortCards}
            />
          )*/}
          {/*<div className="movies__nofind">{isNofingFind}</div>*/}
          {/*<span className="movies__error">{messageErrorForm}</span>*/}
        </>
      </main>
      <Footer />
    </>
  );
}

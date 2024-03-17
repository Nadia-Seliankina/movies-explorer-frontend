// компонент страницы с сохранёнными карточками фильмов
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { RegExSearch } from "../../utils/RegExSearch";

export default function SavedMovies({
  onClickMenu,
  loggedIn,
  savedCards,
  onLikeCard,
  foundCards,
  shortCards,
  handleRequestSearch,
  searchQuery,
  setSearchQuery,
  isChecked,
  setIsChecked
}) {
  
  // валидация инпута
  const [errors, setErrors] = useState("");
  const [isValid, setIsValid] = useState(false);
  // отправка формы
  const [isSubmited, setIsSubmited] = useState(false);
  // сообщение об отсутствии результатов поиска
  const [isNofingFind, setIsNofingFind] = useState("");

  function handleInputChange(e) {
    setSearchQuery(e.target.value); // текущее значение инпута
    setIsSubmited(false);
    setIsNofingFind("");
  }

  function handleChangeCheckbox(e) {
    setIsChecked(e.target.checked);
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
    if (foundCards.length > 0) {
      setIsNofingFind("");
    }
  }, [foundCards, isChecked]);

  useEffect(() => {
    if (shortCards.length === 0 && isChecked) {
      setIsNofingFind("Ничего не найдено");
    }
    if (shortCards.length > 0) {
      setIsNofingFind("");
    }
  }, [shortCards, isChecked]);

  // валидация
  useEffect(() => {
    const isValidSearch = RegExSearch.test(searchQuery);
    setIsValid(isValidSearch);
    setErrors("");
    if (!isValidSearch) {
      setIsValid(false);
      setErrors("Нужно ввести ключевое слово");
    }
  }, [isSubmited]);

  useEffect(() => {
    setErrors("");
  }, []);

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

// компонент страницы с поиском по фильмам
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import api from "../../utils/ApiUnsplash";

// функция нормализации, принимает массив карточек, возращает его без лишнего мусора
const mapCards = (cards) => {
  return cards.map((item) => ({
    src: item.urls.full,
    title: item.alt_description,
    id: item.id,
  }));
};

export default function Movies({ isSearchEmpty }) {
  const [searchQuery, setSearchQuery] = useState("");
  // здесь будем хранить карточки, которые получили с сервера
  const [cards, setCards] = useState([]);
  // спинер статуса загрузки карточек
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    handleRequest();
  }

  // Запросы к серверу
  function handleRequest() {
    setIsLoading(true);
    api
      .search(searchQuery)
      .then((res) => setCards(mapCards(res.results)))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    handleRequest();
  }, []);

  // Временный вывод в консоль для просмотра карточек
  //useEffect(() => {
  //api.search(searchQuery).then(res => console.log(res.results));
  //}, [cards]);

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

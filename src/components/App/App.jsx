// корневой компонент приложения
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../User/Profile/Profile";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PopupMenu from "../PopupMenu/PopupMenu";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

function App() {
  // состояние попапа меню
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  // Контекст, чтобы все компоненты приложения могли получить доступ к этим данным
  // Стейт, отвечающий за данные текущего пользователя
  const [currentUser, setCurrentUser] = useState({
    //email: "nadia4@inbox.ru",
    //name: "Nadia-4",
    //_id: "65b964d71f9de47f0c510d4f"
  });

  const handleMenuClick = () => {
    setIsMenuPopupOpen(true);
  };

  const closeMenuPopup = () => {
    setIsMenuPopupOpen(false);
  };

  useEffect(() => {
    mainApi
        .getUserActive()
        .then((dataUser) => {
          console.log(dataUser);
          setCurrentUser(dataUser);
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies onClickMenu={handleMenuClick} />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile isProfile={true} isEditOk={false} isEditBad={false}/>} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Pop-up menu*/}
      <PopupMenu
          isOpen={isMenuPopupOpen}
          onClose={closeMenuPopup}
      />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

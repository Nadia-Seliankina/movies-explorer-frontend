// корневой компонент приложения
import { Routes, Route, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// импортируем компоненты приложения
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../User/Profile/Profile";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PopupMenu from "../PopupMenu/PopupMenu";
import ProtectedRoute from "../ProtectedRoute";
// запросы к серверу
import mainApi from "../../utils/MainApi";
import * as AuthApi from "../../utils/AuthApi";
// импортируем CSS
import "./App.css";

function App() {
  // состояние попапа меню
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  // preloader статуса загрузки инфо
  const [isLoadingInfo, setIsLoadingInfo] = useState(true);

  // Контекст, чтобы все компоненты приложения могли получить доступ к этим данным
  // Стейт, отвечающий за данные текущего пользователя
  const [currentUser, setCurrentUser] = useState({});

  // Статус пользователя
  //const [loggedIn, setLoggedIn] = useState(false);
  const loggedInStorage = JSON.parse(localStorage.getItem("loggedIn"));
  const [loggedIn, setLoggedIn] = useState(loggedInStorage);

  const navigate = useNavigate();

  // управление попапом меню
  const handleMenuClick = () => {
    setIsMenuPopupOpen(true);
  };
  const closeMenuPopup = () => {
    setIsMenuPopupOpen(false);
  };
  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget && isMenuPopupOpen) {
      setIsMenuPopupOpen(false);
    }
  };

  // проверка ТОКЕНА
  // useCallback позволяет кэшировать определение функции между повторными рендерами
  //const tokenCheck = useCallback(async () => {
  //try {
  //setIsLoadingInfo(true);
  //let token = localStorage.getItem("token");
  //if (!token) {
  //throw new Error("no token");
  //}
  //const userActive = await AuthApi.checkToken(token);
  //if (!userActive) {
  //throw new Error("invalid user");
  //}
  //if (userActive) {
  //setLoggedIn(true);
  //setCurrentUser(userActive);
  //}
  //} catch (err) {
  //console.log(err);
  //} finally {
  //setIsLoadingInfo(false);
  //}
  //}, []);

  const token = localStorage.getItem("token");

  // ПРОВЕРКА ТОКЕНА
  const tokenCheck = (token) => {
    setIsLoadingInfo(true);
    return AuthApi.checkToken(token)
      .then((res) => {
        if (!token) {
          throw new Error("invalid user");
        }
        if (token) {
          localStorage.setItem("loggedIn", true);
          setLoggedIn(true);
          console.log("token ok");
          const userData = {
            name: res.name,
            email: res.email,
          };
          //setCurrentUser({ name, email });
          setCurrentUser(userData);
          console.log(currentUser);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingInfo(false);
      });
  };

  //const doAuthenticate = useCallback((dataUser) => {
  //localStorage.setItem("token", dataUser.token);
  //setLoggedIn(true);
  //setCurrentUser(dataUser);
  //}, []);

  const doAuthenticate = (res) => {
    localStorage.setItem("token", res.token);
    setLoggedIn(true);
    localStorage.setItem("loggedIn", true);
    const userData = {
      name: res.name,
      email: res.email,
    };
    setCurrentUser(userData);
    console.log(currentUser);
  };

  // РЕГИСТРАЦИЯ
  //const handleRegister = useCallback(async (name, email, password) => {
  //try {
  //setIsLoadingInfo(true);
  //const dataUser = await AuthApi.register(name, email, password);
  //doAuthenticate(dataUser);
  //return dataUser;
  //} catch (err) {
  //console.log(err);
  //} finally {
  //setIsLoadingInfo(false);
  //navigate("/movies", { replace: true });
  //}
  //}, []);

  const handleRegister = (name, email, password) => {
    setIsLoadingInfo(true);
    return AuthApi.register(name, email, password)
      .then((res) => {
        if (!res)
          throw new Error(
            "Ошибка авторизации. Проверьте имя пользователя или пароль"
          );
        if (res) {
          console.log("handleRegister");
          //localStorage.setItem("token", res.token);
          //setLoggedIn(true);
          //localStorage.setItem('loggedIn', true);
          //const userData = {
          //name: res.name,
          //email: res.email,
          //};
          //setCurrentUser(userData);
          //console.log(currentUser);
          doAuthenticate(res);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingInfo(false);
      });
  };

  // АВТОРИЗАЦИЯ
  //const handleLogin = useCallback(async (emailLogin, passwordLogin) => {
  //try {
  //setIsLoadingInfo(true);
  //const dataUser = await AuthApi.authorize(emailLogin, passwordLogin);
  //if (!dataUser) {
  //throw new Error("Неверные почта или пароль пользователя");
  //}
  //if (dataUser.token) {
  //doAuthenticate(dataUser);
  //}
  //return dataUser;
  //} catch (err) {
  //console.log(err);
  //} finally {
  //setIsLoadingInfo(false);
  //navigate("/movies", { replace: true });
  //}
  //}, []);

  const handleLogin = (email, password) => {
    setIsLoadingInfo(true);
    return AuthApi.authorize(email, password)
      .then((res) => {
        if (!res) throw new Error("Неправильное имя пользователя или пароль");
        if (res.token) {
          console.log("handleLogin");
          //localStorage.setItem("token", res.token);
          //setLoggedIn(true);
          //localStorage.setItem('loggedIn', true);
          //const userData = {
          //name: res.name,
          //email: res.email,
          //};
          //setCurrentUser(userData);
          //console.log(currentUser);
          doAuthenticate(res);
          navigate("/movies", { replace: true });
          //setUserEmail(email);
          //localStorage.setItem('email', email);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingInfo(false);
      });
  };

  // ВЫХОД ИЗ АККАУНТА
  const handleLogout = useCallback(() => {
    console.log("handleLogout");
    setLoggedIn(false);
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("token");
    setCurrentUser({});
    navigate("/", { replace: true });
    //localStorage.removeItem("email");
  }, []);

  // данные текущего пользователя
  //useEffect(() => {
  //mainApi
  //.getUserActive()
  //.then((dataUser) => {
  //console.log(dataUser);
  //setCurrentUser(dataUser);
  //})
  //.catch((err) => console.log(err));
  //}, []);

  // попап меню
  useEffect(() => {
    if (!isMenuPopupOpen) return;
    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        setIsMenuPopupOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    // удаление обработчика
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isMenuPopupOpen]);

  // наличие токена
  //useEffect(() => {
  //tokenCheck();
  //}, [tokenCheck]);

  // при монтировании проверяем наличие токена
  useEffect(() => {
    //const token = localStorage.getItem("token");
    tokenCheck(token);
  }, [token]);

  // заглушка во время загрузки данных
  if (isLoadingInfo) {
    return "...Загрузка...>>>";
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Main onClickMenu={handleMenuClick} isLogged={loggedIn} />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                onClickMenu={handleMenuClick}
                isLogged={loggedIn}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                onClickMenu={handleMenuClick}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onClickMenu={handleMenuClick}
                isProfile={true}
                isEditOk={false}
                isEditBad={false}
                onLogout={handleLogout}
                userData={currentUser}
              />
            }
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* Pop-up menu*/}
        <PopupMenu
          isOpen={isMenuPopupOpen}
          onClose={closeMenuPopup}
          onMouseDown={handleOverlayClose}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

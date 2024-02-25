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

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies isSearchEmpty={true} />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile isProfile={true} isEditOk={false} isEditBad={false}/>} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Pop-up menu*/}
      <PopupMenu
          isOpen={false}
      />
    </div>
  );
}

export default App;

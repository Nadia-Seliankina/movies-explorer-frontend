// корневой компонент приложения
import s from './App.module.css';
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Main from '../Main/Main';
import SavedMovies from '../SavedMovies/SavedMovies';
import User from '../User/User';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className={s.app}>
      <Header></Header>
      <Navigation></Navigation>
      <Main></Main>
      <Movies></Movies>
      <SavedMovies></SavedMovies>
      <User></User>
      <Footer></Footer>
    </div>
  );
}

export default App;

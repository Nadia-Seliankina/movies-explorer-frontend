// компонент страницы «О проекте». Он будет содержать только презентационные компоненты и в будущем,
// за исключением шапки навигации
import "./Main.css";
/*import Header from '../Header/Header';*/
import Promo from "./Promo/Promo";
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio';
/*import Footer from '../Footer/Footer';*/

export default function Main() {
  return (
    <>
      {/*<Header></Header>*/}
      <main className="main">
        <Promo></Promo>
        <NavTab></NavTab>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
      {/*<Footer></Footer>*/}
    </>
  );
}

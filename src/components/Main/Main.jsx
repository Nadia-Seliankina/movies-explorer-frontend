// компонент страницы «О проекте». Он будет содержать только презентационные компоненты и в будущем,
// за исключением шапки навигации
import s from './Main.module.css';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

export default function Main() {
    return (
        <div className={s.main}>
            <Promo></Promo>
            <NavTab></NavTab>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
        </div>
    );
}

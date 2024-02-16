// компонент с навигацией по странице «О проекте»
import "./NavTab.css";

export default function NavTab() {
  return (
    <nav className="navTab">
      <ul className="navTab__list">
        <li className="navTab__item"><a className="navTab__link" href="#aboutProject">О проекте</a></li>
        <li className="navTab__item"><a className="navTab__link" href="#techs">Технологии</a></li>
        <li className="navTab__item"><a className="navTab__link" href="#aboutMe">Студент</a></li>
      </ul>
    </nav>
  );
}

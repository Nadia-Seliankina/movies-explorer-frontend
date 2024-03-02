// компонент, который отрисовывает шапку сайта на страницу.
// Шапка на главной странице, как и на других страницах, должна менять отображение,
// если пользователь авторизован или не авторизован. Такое поведение нужно сразу предусмотреть в вёрстке,
// даже несмотря на то, что сама авторизация ещё не реализована.
import "./Header.css";
import Navigatiion from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

export default function Header({ isLight, onClickMenu }) {
  // Исользуем JavaScript-шаблон для склейки значения атрибута
  const classNameHeader = `header ${isLight ? "header_light" : ""}`;

  return (
    <header className={classNameHeader}>
      <Logo></Logo>
      <Navigatiion isLogged={true} onClickMenu={onClickMenu}></Navigatiion>
    </header>
  );
}

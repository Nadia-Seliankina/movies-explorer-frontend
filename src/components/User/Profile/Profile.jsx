// компонент страницы изменения профиля
import Header from "../../Header/Header";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Header isLight={true}></Header>
      <main className="profile">
        <div className="profile__greeting">Привет, Виталий!</div>
        <div className="profile__container">
          <div className="profile__item">
            <p className="profile__item-title">Имя</p>
            <p className="profile__item-value">Виталий</p>
          </div>
          <div className="profile__item">
            <p className="profile__item-title">E-mail</p>
            <p className="profile__item-value">pochta@yandex.ru</p>
          </div>
        </div>
        <button className="profile__btn-edit">Редактировать</button>
        <button className="profile__btn-exit">Выйти из аккаунта</button>
      </main>
    </>
  );
}

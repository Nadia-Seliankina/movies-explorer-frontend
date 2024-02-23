// компонент страницы изменения профиля
import Header from "../../Header/Header";
import "./Profile.css";

export default function Profile({ isProfile, isEditOk, isEditBad }) {
    return (
        <>
            <Header isLight={true}></Header>
            <main className="profile">
                <div className="profile__container">
                    <div className="profile__greeting">Привет, Виталий!</div>
                    <form className="profile__form">
                        <fieldset className="profile__fieldset">
                            <div className="profile__fieldset-item">
                                <label className="profile__label" htmlFor="name">
                                    Имя
                                </label>
                                <input
                                    className="profile__input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value="Виталий"
                                />
                            </div>
                            <div className="profile__line"></div>
                            <div className="profile__fieldset-item">
                                <label className="profile__label" htmlFor="email">E-mail</label>
                                <input
                                    className="profile__input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value="pochta@yandex.ru"
                                />
                            </div>
                        </fieldset>
                        <span className={`profile__input-error ${isEditBad ? "" : "profile__input-error_off"}`}>При обновлении профиля произошла ошибка.</span>
                        <button className={`profile__btn-save ${isEditOk ? "" : ""} ${isEditBad ? "profile__btn-save_inactive" : ""} ${isProfile ? "profile__btn-save_off" : ""}`}>Сохранить</button>
                    </form>
                    <button className={`profile__btn-edit ${isProfile ? "" : "profile__btn-edit_off"}`}>Редактировать</button>
                    <button className={`profile__btn-exit ${isProfile ? "" : "profile__btn-exit_off"}`}>Выйти из аккаунта</button>
                </div>
            </main>
        </>
    );
}

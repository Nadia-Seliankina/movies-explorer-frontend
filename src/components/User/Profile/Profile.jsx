// компонент страницы изменения профиля
import Header from "../../Header/Header";
import "./Profile.css";

export default function Profile({ isProfile, isEditOk, isEditBad, onLogout, userData }) {
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
                                    id="name-profile"
                                    name="name-profile"
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
                                    id="email-profile"
                                    name="email-profile"
                                    required
                                    value="pochta@yandex.ru"
                                />
                            </div>
                        </fieldset>
                        <span className="profile__input-span" id="name-profile-error"></span>
                        <span className="profile__input-span" id="email-profile-error"></span>
                        <span className={`profile__input-error ${isEditBad ? "" : "profile__input-error_off"}`}>При обновлении профиля произошла ошибка.</span>
                        <button className={`profile__btn-save ${isEditOk ? "" : ""} ${isEditBad ? "profile__btn-save_inactive" : ""} ${isProfile ? "profile__btn-save_off" : ""}`}>Сохранить</button>
                    </form>
                    <button className={`profile__btn-edit ${isProfile ? "" : "profile__btn-edit_off"}`}>Редактировать</button>
                    <button type="button" onClick={onLogout} className={`profile__btn-exit ${isProfile ? "" : "profile__btn-exit_off"}`}>Выйти из аккаунта</button>
                </div>
            </main>
        </>
    );
}

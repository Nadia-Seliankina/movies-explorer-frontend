// компонент страницы изменения профиля
import { useContext, useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Profile.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../../hooks/useForm";

export default function Profile({
  loggedIn,
  onClickMenu,
  isSending,
  messageErrorForm,
  onLogout,
  onProfile,
  isProfileEdit,
  onClickEdit
}) {
  
  // Подписываемся на контекст CurrentUserContext
  const currentUser = useContext(CurrentUserContext);

  const [isDataEdited, setIsDataEdited] = useState(false);
  const [isNameEdited, setIsNameEdited] = useState(false);
  const [isEmailEdited, setIsEmailEdited] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.nameProfile || !values.emailProfile) {
      return;
    }
    //onProfile({ nameRegister, emailRegister, passwordRegister });
    let { nameProfile, emailProfile } = values;
    onProfile(nameProfile, emailProfile).then((res) => {
      console.log("onProfile");
    });
  };

  useEffect(() => {
    if(values.nameProfile !== currentUser.name && values.nameProfile !== undefined) {
      setIsNameEdited(true);
    }
    if(values.nameProfile === currentUser.name) {
      setIsNameEdited(false);
    }
  }, [values.nameProfile]);

  useEffect(() => {
    if(values.emailProfile !== currentUser.email && values.emailProfile !== undefined) {
      setIsEmailEdited(true);
    }
    if(values.emailProfile === currentUser.email) {
      setIsEmailEdited(false);
    }
  }, [values.emailProfile]);


  useEffect(() => {
    if(isEmailEdited || isNameEdited) {
      setIsDataEdited(true);
    } else {
      setIsDataEdited(false);
    }
  }, [isNameEdited, isEmailEdited]);

  // для сброса значения формы
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  return (
    <>
      <Header
        isLight={true}
        onClickMenu={onClickMenu}
        isLogged={loggedIn}
      ></Header>
      <main className="profile">
        <div className="profile__container">
          <div className="profile__greeting">{`Привет, ${currentUser.name}`}</div>
          <form
            className="profile__form"
            id="formProfile"
            noValidate
            onSubmit={handleSubmit}
          >
            {isProfileEdit ? (
              <fieldset className="profile__fieldset">
                <div className="profile__fieldset-item">
                  <label className="profile__label" htmlFor="name">
                    Имя
                  </label>
                  <input
                    className="profile__input"
                    type="text"
                    id="nameProfile"
                    name="nameProfile"
                    required
                    value={values.nameProfile || currentUser.name}
                    onChange={handleChange}
                    minLength="2"
                    autoComplete="off"
                  />
                </div>
                <div className="profile__line"></div>
                <div className="profile__fieldset-item">
                  <label className="profile__label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="profile__input"
                    type="email"
                    id="emailProfile"
                    name="emailProfile"
                    required
                    value={values.emailProfile || currentUser.email}
                    onChange={handleChange}
                    placeholder="pochta@yandex.ru"
                    minLength="2"
                    autoComplete="off"
                  />
                </div>
              </fieldset>
            ) : (
              <fieldset className="profile__fieldset">
                <div className="profile__fieldset-item">
                  <label className="profile__label" htmlFor="name">
                    Имя
                  </label>
                  <input
                    className="profile__input"
                    value={currentUser.name}
                    disabled
                  />
                </div>
                <div className="profile__line"></div>
                <div className="profile__fieldset-item">
                  <label className="profile__label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="profile__input"
                    value={currentUser.email}
                    disabled
                  />
                </div>
              </fieldset>
            )}
            <span className="profile__input-span" id="nameProfile-error">
              {errors.nameProfile || ""}
            </span>
            <span className="profile__input-span" id="emailProfile-error">
              {errors.emailProfile || ""}
            </span>
            <span className="profile__input-error">
              {messageErrorForm}
            </span>
            <button
              type="submit"
              disabled={!isValid || isSending || !isDataEdited}
              className={`profile__btn-save ${isValid ? "" : ""} ${
                (!isValid || !isDataEdited) ? "profile__btn-save_inactive" : ""
              } ${isProfileEdit ? "" : "profile__btn-save_off"}`}
            >
              {isSending ? "Сохранение >>>" : "Сохранить"}
            </button>
          </form>
          <button
            type="button"
            onClick={onClickEdit}
            className={`profile__btn-edit ${
              isProfileEdit ? "profile__btn-edit_off" : ""
            }`}
          >
            Редактировать
          </button>
          <button
            type="button"
            onClick={onLogout}
            className={`profile__btn-exit ${
              isProfileEdit ? "profile__btn-exit_off" : ""
            }`}
          >
            Выйти из аккаунта
          </button>
        </div>
      </main>
    </>
  );
}

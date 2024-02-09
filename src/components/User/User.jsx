// Для работы со страницами регистрации, авторизации и редактирования профиля
import s from './User.module.css';
import Register from './Register/Register';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import FormElement from './FormElement/FormElement';
import ErrorElement from './ErrorElement/ErrorElement';

export default function User() {
    return (
        <div className={s.user}>
            <Register></Register>
            <Login></Login>
            <Profile></Profile>
            <FormElement></FormElement>
            <ErrorElement></ErrorElement>
        </div>
    );
}
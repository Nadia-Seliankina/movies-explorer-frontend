import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {

    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    return (
        <main className="notFoundPage">
            <div></div>
            <div className="notFoundPage__container">
                <p className="notFoundPage__number">404</p>
                <p className="notFoundPage__text">Страница не найдена</p>
            </div>
            <button className="notFoundPage__link" onClick={goBack}>Назад</button>
        </main>
    );
}
// презентационный компонент, который отрисовывает подвал
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info">
                <p className="footer__author">Надежда Селянкина © 2024</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target='_blank' rel="noopener noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/" target='_blank' rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </footer>
    );
}

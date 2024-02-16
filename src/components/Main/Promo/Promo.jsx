// компонент с вёрсткой баннера страницы «О проекте»
import './Promo.css';
import logoPrakticum from '../../../images/pic__COLOR_landing-logo.svg'

export default function Promo() {
    return (
        <section className="promo">
            <img className="promo__image" src={logoPrakticum} alt="логотип Практикума" />
            <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    );
}
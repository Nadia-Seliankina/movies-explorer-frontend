// компонент с информацией о студенте
import "./AboutMe.css";
import photo from "../../../images/personalPhoto.jpg"

export default function AboutMe() {
  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMe__title">
        <h2 className="aboutMe__title-text">Студент</h2>
      </div>
      <img className="aboutMe__photo" src={photo} alt="фото" />
      <p className="aboutMe__name">Виталий</p>
      <p className="aboutMe__prof">Фронтенд-разработчик, 30 лет</p>
      <p className="aboutMe__story">
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
        есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
        начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
        ушёл с постоянной работы.
      </p>
      <a className="aboutMe__link" href="https://github.com/Nadia-Seliankina" target='_blank' rel="noopener noreferrer">Github</a>
    </section>
  );
}

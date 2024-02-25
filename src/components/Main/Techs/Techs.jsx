// компонент с использованными технологиями
import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__title">
        <h2 className="techs__title-text">Технологии</h2>
      </div>
      <div className="techs__info">
        <p className="techs__info-text-big">7 технологий</p>
        <p className="techs__info-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__scheme">
          <li className="techs__scheme-item">HTML</li>
          <li className="techs__scheme-item">CSS</li>
          <li className="techs__scheme-item">JS</li>
          <li className="techs__scheme-item">React</li>
          <li className="techs__scheme-item">Git</li>
          <li className="techs__scheme-item">Express.js</li>
          <li className="techs__scheme-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

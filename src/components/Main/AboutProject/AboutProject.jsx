// компонент с описанием дипломного проекта
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject">
      <div className="aboutProject__title">
        <h2 className="aboutProject__title-text">О проекте</h2>
      </div>
      <div className="aboutProject__info">
        <div className="aboutProject__info-item">
          <h3 className="aboutProject__info-text-big">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__info-item">
          <h3 className="aboutProject__info-text-big">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__scheme">
        <p className="aboutProject__scheme-item aboutProject__scheme-item-short">1 неделя</p>
        <p className="aboutProject__scheme-item aboutProject__scheme-item-long">4 недели</p>
        <p className="aboutProject__scheme-item aboutProject__scheme-item-label">Back-end</p>
        <p className="aboutProject__scheme-item aboutProject__scheme-item-label">Front-end</p>
      </div>
    </section>
  );
}

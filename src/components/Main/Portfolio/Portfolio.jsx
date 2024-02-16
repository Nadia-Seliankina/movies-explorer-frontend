// компонент со ссылками на другие проекты
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__links">
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Nadia-Seliankina/how-to-learn"
            >
              Статичный сайт
            </a>
            <a
              className="portfolio__link-arrow"
              href="https://github.com/Nadia-Seliankina/how-to-learn"
            >
              ↗
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Nadia-Seliankina/russian-travel"
            >
              Адаптивный сайт
            </a>
            <a
              className="portfolio__link-arrow"
              href="https://github.com/Nadia-Seliankina/russian-travel"
            >
              ↗
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Nadia-Seliankina/react-mesto-api-full-gha"
            >
              Одностраничное приложение
            </a>
            <a
              className="portfolio__link-arrow"
              href="https://github.com/Nadia-Seliankina/react-mesto-api-full-gha"
            >
              ↗
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

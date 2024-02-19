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
              target='_blank' rel="noopener noreferrer"
            >
              Статичный сайт
            </a>
            <a
              className="portfolio__link-arrow"
              href="https://github.com/Nadia-Seliankina/how-to-learn"
              target='_blank' rel="noopener noreferrer"
            >
              ↗
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Nadia-Seliankina/russian-travel"
              target='_blank' rel="noopener noreferrer"
            >
              Адаптивный сайт
            </a>
            <a
              className="portfolio__link-arrow"
              href="https://github.com/Nadia-Seliankina/russian-travel"
              target='_blank' rel="noopener noreferrer"
            >
              ↗
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Nadia-Seliankina/react-mesto-api-full-gha"
              target='_blank' rel="noopener noreferrer"
            >
              Одностраничное приложение
            </a>
            <a
              className="portfolio__link-arrow"
              href="https://github.com/Nadia-Seliankina/react-mesto-api-full-gha"
              target='_blank' rel="noopener noreferrer"
            >
              ↗
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import pic0 from "../../images/pic__COLOR_pic.jpg";
import pic1 from "../../images/pic__COLOR_pic (1).jpg";
import pic2 from "../../images/pic__COLOR_pic (2).jpg";
import pic3 from "../../images/pic__COLOR_pic (3).jpg";
import pic4 from "../../images/pic__COLOR_pic (4).jpg";
import pic5 from "../../images/pic__COLOR_pic (5).jpg";
import pic6 from "../../images/pic__COLOR_pic (6).jpg";
import pic7 from "../../images/pic__COLOR_pic (7).jpg";
import pic8 from "../../images/pic__COLOR_pic (8).jpg";
import pic9 from "../../images/pic__COLOR_pic (9).jpg";
import pic10 from "../../images/pic__COLOR_pic (10).jpg";
import pic11 from "../../images/pic__COLOR_pic (11).jpg";
import pic12 from "../../images/pic__COLOR_pic (12).jpg";
import pic13 from "../../images/pic__COLOR_pic (13).jpg";
import pic14 from "../../images/pic__COLOR_pic (14).jpg";
import pic15 from "../../images/pic__COLOR_pic (15).jpg";

export default function MoviesCardList({ isPathSaved }) {
  return (
    <ul className="moviesCardList">
      <li className="moviesCardList-item">
        <MoviesCard src={pic0} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic1} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={true} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic2} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic3} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic4} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={true} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic5} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic6} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic7} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={true} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic8} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic9} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic10} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={true} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic11} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic12} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic13} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={true} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic14} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
      <li className="moviesCardList-item">
        <MoviesCard src={pic15} alt="фильм" title="33 слова о дизайне" dateTime="PT1H42M" duration="1ч42м" saved={false} isPathSaved={isPathSaved}></MoviesCard>
      </li>
    </ul>
  );
}

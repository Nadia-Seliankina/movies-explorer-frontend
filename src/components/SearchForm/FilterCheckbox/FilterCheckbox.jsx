// фильтр с чекбоксом «Только короткометражки»
import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <label className="filterCheckbox" htmlFor="yes">
      <input
        className="filterCheckbox-invisible"
        type="checkbox"
        name="choice"
        id="yes"
        value="короткие"
      />
      <span className="filterCheckbox-visible">
        Короткометражки
      </span>
    </label>
  );
}

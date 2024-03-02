// фильтр с чекбоксом «Только короткометражки»
import "./FilterCheckbox.css";

export default function FilterCheckbox({ checked, setChecked }) {

function handleChangeChecked(e) {
  setChecked(e.target.checked);
}

  return (
    <label className="filterCheckbox" htmlFor="yes">
      <input
        className="filterCheckbox-invisible"
        type="checkbox"
        name="choice"
        id="yes"
        value="короткие"
        checked={checked}
        onChange={handleChangeChecked}
      />
      <span className="filterCheckbox-visible">
        Короткометражки
      </span>
    </label>
  );
}

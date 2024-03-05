// фильтр с чекбоксом «Только короткометражки»
//import { useState } from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ isChecked, handleChangeCheckbox }) {

  return (
    <label className="filterCheckbox" htmlFor="yes">
      <input
        className="filterCheckbox-invisible"
        type="checkbox"
        name="choice"
        id="yes"
        // value="короткие"
        checked={isChecked}
        onChange={handleChangeCheckbox}
      />
      <span className="filterCheckbox-visible">
        Короткометражки
      </span>
    </label>
  );
}

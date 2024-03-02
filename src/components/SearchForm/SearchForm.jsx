// форма поиска, куда пользователь будет вводить запрос
import BtnSearch from "./BtnSearch/BtnSearch.jsx";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox.jsx";
import Input from "./Input/Input.jsx";
import "./SearchForm.css";
import lensGray from "../../images/lens-gray.svg"

export default function SearchForm({ onChangeInput, valueInput, onSubmit, checked, setChecked }) {
  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <div className="searchForm__container">
        <img className="searchForm__lens" src={lensGray} alt="лупа" />
        <Input value={valueInput} onChange={onChangeInput} />
        <BtnSearch />
        <div className="searchForm__vertical-line"></div>
        <FilterCheckbox checked={checked} setChecked={setChecked}/>
      </div>
      <div className="searchForm__line"></div>
    </form>
  );
}

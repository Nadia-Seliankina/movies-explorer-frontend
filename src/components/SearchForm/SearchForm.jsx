// форма поиска, куда пользователь будет вводить запрос
import BtnSearch from "./BtnSearch/BtnSearch.jsx";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox.jsx";
import Input from "./Input/Input.jsx";
import "./SearchForm.css";
import lensGray from "../../images/lens-gray.svg"

export default function SearchForm() {
  return (
    <form className="searchForm">
      <div className="searchForm__container">
        <img className="searchForm__lens" src={lensGray} alt="лупа" />
        <Input />
        <BtnSearch />
        <div className="searchForm__vertical-line"></div>
        <FilterCheckbox />
      </div>
      <div className="searchForm__line"></div>
    </form>
  );
}

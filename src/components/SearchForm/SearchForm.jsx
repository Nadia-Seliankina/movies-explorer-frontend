// форма поиска, куда пользователь будет вводить запрос
import BtnSearch from "./BtnSearch/BtnSearch.jsx";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox.jsx";
import Input from "./Input/Input.jsx";
import "./SearchForm.css";
import lensGray from "../../images/lens-gray.svg";

export default function SearchForm({
  onChangeInput,
  valueInput,
  onSubmit,
  isChecked,
  handleChangeCheckbox,
  isDisabledBtn,
  //messageErrorForm
}) {
  return (
    <form id="formMovie" className="searchForm" onSubmit={onSubmit}>
      <div className="searchForm__container">
        <img className="searchForm__lens" src={lensGray} alt="лупа" />
        <Input value={valueInput} onChange={onChangeInput}/>
        <BtnSearch isDisabled={isDisabledBtn}/>
        <div className="searchForm__vertical-line"></div>
        <FilterCheckbox
          isChecked={isChecked}
          handleChangeCheckbox={handleChangeCheckbox}
        />
      </div>
      <span className="searchForm__error" id="moviesInput-error"></span>
      <div className="searchForm__line"></div>
    </form>
  );
}

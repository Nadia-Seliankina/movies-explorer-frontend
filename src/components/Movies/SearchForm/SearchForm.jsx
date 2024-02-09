// форма поиска, куда пользователь будет вводить запрос
import Button from './Button/Button.jsx';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox.jsx';
import Input from './Input/Input.jsx';
import s from './SearchForm.module.css';

export default function SearchForm() {
    return (
        <div className={s.searchForm}>
            <Input></Input>
            <Button></Button>
            <FilterCheckbox></FilterCheckbox>
        </div>
    );
}
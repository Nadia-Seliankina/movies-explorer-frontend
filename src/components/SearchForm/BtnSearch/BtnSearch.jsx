import './BtnSearch.css';
import lens from "../../../images/lens.svg";

export default function BtnSearch() {
    return (
        <button className="btnSearch" type="submit">
            <img className="btnSearch__lens" src={lens} alt="лупа" />
        </button>
    );
}

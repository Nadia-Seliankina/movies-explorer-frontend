import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <img className="logo__img" src={logo} alt="логотип" />
      </Link>
    </div>
  );
}
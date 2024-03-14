import "./Input.css";

export default function Input({ value, onChange }) {
  return (
    <input
      type="text"
      className="input"
      id="moviesInput"
      name="moviesInput"
      placeholder="Фильм"
      value={value}
      onChange={onChange}
      required
      formid="formMovie"
      //minLength="2"
    ></input>
  );
}

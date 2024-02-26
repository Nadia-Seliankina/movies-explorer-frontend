import "./Input.css";

export default function Input({ value, onChange }) {
  return (
    <input
      type="text"
      className="input"
      name="movies"
      placeholder="Фильм"
      value={value}
      onChange={onChange}
      required
    ></input>
  );
}

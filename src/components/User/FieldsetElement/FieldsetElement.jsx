import "./FieldsetElement.css";

export default function FieldsetElement({
  label,
  inputId,
  type,
  name,
  value,
  required,
  spanId,
  placeholder
}) {
  return (
    <div className="fieldsetElement">
      <label className="fieldsetElement__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        className="fieldsetElement__input"
        type={type}
        id={inputId}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        minLength="2"
      />
      <span className="fieldsetElement__error" id={spanId}>
        Что-то пошло не так...
      </span>
    </div>
  );
}

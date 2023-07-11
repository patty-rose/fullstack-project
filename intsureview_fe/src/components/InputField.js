const InputField = ({
  type = "text",
  label,
  id,
  value,
  onChange,
  required,
  min,
  max,
  error
}) => (
  <fieldset>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      min={min}
      max={max}
    />
    {error && <p className="error-message">{error}</p>}
  </fieldset>
);

export default InputField;

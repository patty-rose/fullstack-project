const InputField = ({
  type = "text",
  label,
  id,
  value,
  onChange,
  required,
  min,
  max
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
  </fieldset>
);

export default InputField;

const InputField = ({
  type = "text",
  label,
  id,
  value,
  onChange,
  required,
}) => (
  <fieldset>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    />
  </fieldset>
);

export default InputField;

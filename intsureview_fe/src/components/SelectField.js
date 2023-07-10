const SelectField = ({
  label,
  id,
  value,
  onChange,
  required,
  options,
  error
}) => (
  <fieldset>
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={onChange} required={required}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="error-message">{error}</p>}
  </fieldset>
);

export default SelectField;

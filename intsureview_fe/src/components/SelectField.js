const SelectField = ({
  label,
  id,
  value,
  onChange,
  required,
  options,
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
  </fieldset>
);

export default SelectField;

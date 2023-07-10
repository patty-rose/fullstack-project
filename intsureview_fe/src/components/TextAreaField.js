import React from "react";

const TextAreaField = ({ label, id, value, onChange, error}) => (
  <fieldset>
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
    ></textarea>
    {error && <p className="error-message">{error}</p>}
  </fieldset>
);

export default TextAreaField;

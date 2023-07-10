import React from "react";

const TextAreaField = ({ label, id, value, onChange }) => (
  <fieldset>
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
    ></textarea>
  </fieldset>
);

export default TextAreaField;

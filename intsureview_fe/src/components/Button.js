import React from "react";

const Button = ({ onClick, type = "submit", children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;

import React from "react";

const SuccessOrFailure = ({ type, message }) => {
  return (
    <div className={`success-or-failure ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default SuccessOrFailure;
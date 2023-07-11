import React from "react";
import { render, screen } from "@testing-library/react";
import SuccessOrFailure from "../../components/SuccessOrFailure";

describe("SuccessOrFailure", () => {
  test("renders success message correctly", () => {
    const type = "success";
    const message = "Success!";
    render(<SuccessOrFailure type={type} message={message} />);
    const successElement = screen.getByText(message);
    expect(successElement).toBeInTheDocument();
  });

  test("renders failure message correctly", () => {
    const type = "failure";
    const message = "Failure!";
    render(<SuccessOrFailure type={type} message={message} />);
    const failureElement = screen.getByText(message);
    expect(failureElement).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button", () => {
  const buttonText = "test text";

  test("renders button with correct text and type", () => {
    render(<Button>{buttonText}</Button>);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  test("calls onClick handler when clicked", () => {
    const testOnClick = jest.fn();
    render(<Button onClick={testOnClick}>{buttonText}</Button>);
    const buttonElement = screen.getByText(buttonText);
    fireEvent.click(buttonElement);
    expect(testOnClick).toHaveBeenCalledTimes(1);
  });
});

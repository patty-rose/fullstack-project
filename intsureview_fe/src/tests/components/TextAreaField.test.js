import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextAreaField from "../../components/TextAreaField";

describe("TextAreaField", () => {
  const label = "test label";
  const id = "test id";

  test("renders the label correctly", () => {
    render(
      <TextAreaField label={label} id={id}  />
    );
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute("for", id);
  });

  test("renders the textarea correctly", () => {
    render(
      <TextAreaField label={label} id={id}  />
    );
    const textAreaElement = screen.getByLabelText(label);
    expect(textAreaElement).toBeInTheDocument();
    expect(textAreaElement).toHaveAttribute("id", id);
    expect(textAreaElement).toHaveValue("");
  });

  test("calls the onChange handler when the value changes", () => {
    const onChange = jest.fn();
    const newValue = "New value";
    render(
      <TextAreaField label={label} id={id} onChange={onChange} />
    );
    const textAreaElement = screen.getByLabelText(label);
    fireEvent.change(textAreaElement, { target: { value: newValue } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: newValue }),
      })
    );
  });

  test("renders an error message if error prop is provided", () => {
    const error = "test error";
    render(
      <TextAreaField label={label} id={id} error={error} />
    );
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });
});

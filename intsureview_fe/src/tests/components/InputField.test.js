import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../../components/InputField";

describe("InputField", () => {
  const label = 'test label';
  const id = 'test id';

  test("renders the label correctly", () => {
    render(<InputField label={label} id={id} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', id);
  });

  test("renders the input element correctly", () => {
    render(<InputField label={label} id={id}/>);
    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('id', id);
  });

  test("calls the onChange handler when the value changes", () => {
    const onChange = jest.fn();
    const newValue = 'new value';
    render(
      <InputField label={label} id={id} onChange={onChange} />
    );
    const inputElement = screen.getByLabelText(label);
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: newValue }),
      })
    );
  });

  test("renders the input element when type is 'number' correctly", () => {
    const testType = 'number'
    const min = 0;
    const max = 10;
    render(<InputField label={label} id={id} type={testType} min={min} max={max} />);
    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', testType);
    expect(inputElement).toHaveAttribute('id', id);
  });

  test("renders an error message if error prop is provided", () => {
    const error = 'test error';
    render(<InputField label={label} id={id} error={error} />);
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });
});
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
});
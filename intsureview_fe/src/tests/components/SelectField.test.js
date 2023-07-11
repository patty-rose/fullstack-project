import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectField from "../../components/SelectField";

describe("SelectField", () => {
  const label = "test label";
  const id = "test id";
  const options = ["Option 1", "Option 2"];

  test("renders the label correctly", () => {
    render(<SelectField label={label} id={id} options={options}/>);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute("for", id);
  });

  test("renders the select element correctly", () => {
    render(<SelectField label={label} id={id} options={options} />);
    const selectElement = screen.getByLabelText(label);
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAttribute("id", id);
    expect(selectElement).toHaveValue("");
    options.forEach((option) => {
      const optionElement = screen.getByText(option);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute("value", option);
    });
  });

  test("calls the onChange handler when an option is selected", () => {
    const onChange = jest.fn();
    render(
      <SelectField
        label={label}
        id={id}
        options={options}
        onChange={onChange}
      />
    );
    const selectElement = screen.getByLabelText(label);
    const selectedValue = "Option 2";
    fireEvent.change(selectElement, { target: { value: selectedValue } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: selectedValue }),
      })
    );
  });

  test("renders an error message if error prop is provided", () => {
    const error = "test error";
    render(
      <SelectField label={label} id={id} options={options} error={error} />
    );
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });
});

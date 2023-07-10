import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CentralContent from "../../components/CentralContent";

describe("CentralContent", () => {
  test("renders the form title correctly", () => {
    render(<CentralContent />);
    const headingElement = screen.getByText("Add a Test Recipe:");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders form with fields and button", () => {
    render(<CentralContent />);

    expect(screen.getByLabelText("Recipe Name")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Would you make this again?")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Recipe")).toBeInTheDocument();
    expect(screen.getByLabelText("Rating 0-10")).toBeInTheDocument();
    expect(screen.getByLabelText("Notes")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Submit Test Recipe" })
    ).toBeInTheDocument();
  });

  test("displays error messages for invalid form submission", () => {
    render(<CentralContent />);

    const submitButton = screen.getByRole("button", {
      name: "Submit Test Recipe",
    });
    fireEvent.click(submitButton);

    expect(screen.getByText("Recipe Name is required")).toBeInTheDocument();
    expect(screen.getByText("Selection required")).toBeInTheDocument();
    expect(screen.getByText("Recipe is required")).toBeInTheDocument();
    expect(screen.getByText("Rating is required")).toBeInTheDocument();
    expect(screen.getByText("Notes is required")).toBeInTheDocument();
  });

  test("displays success message for valid form submission", () => {
    render(<CentralContent />);

    const submitButton = screen.getByRole("button", {
      name: "Submit Test Recipe",
    });
    fireEvent.change(screen.getByLabelText("Recipe Name"), {
      target: { value: "Test Recipe" },
    });
    fireEvent.change(screen.getByLabelText("Would you make this again?"), {
      target: { value: "Yes" },
    });
    fireEvent.change(screen.getByLabelText("Recipe"), {
      target: { value: "test recipe content" },
    });
    fireEvent.change(screen.getByLabelText("Rating 0-10"), {
      target: { value: "7" },
    });
    fireEvent.change(screen.getByLabelText("Notes"), {
      target: { value: "test notes" },
    });
    fireEvent.click(submitButton);

    expect(
      screen.getByText("Form submitted successfully! You may submit another.")
    ).toBeInTheDocument();
  });
});

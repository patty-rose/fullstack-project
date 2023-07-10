import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CentralContent from "../../components/CentralContent";

describe("CentralContent", () => {
  test("renders the form title correctly", () => {
    render(<CentralContent />);
    const headingElement = screen.getByText("Add a Test Recipe:");
    expect(headingElement).toBeInTheDocument();
  });

  test('renders form with fields and button', () => {
    render(<CentralContent />);

    expect(screen.getByLabelText('Recipe Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Would you make this again?')).toBeInTheDocument();
    expect(screen.getByLabelText('Recipe')).toBeInTheDocument();
    expect(screen.getByLabelText('Rating 0-10')).toBeInTheDocument();
    expect(screen.getByLabelText('Notes')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit Test Recipe' })).toBeInTheDocument();
  });
});

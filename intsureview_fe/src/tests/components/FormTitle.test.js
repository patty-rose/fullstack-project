import React from "react";
import { render, screen } from "@testing-library/react";
import FormTitle from "../../components/FormTitle";

describe("FormTitle", () => {
  test("renders the title text", () => {
    const titleText = "test text";
    render(<FormTitle text={titleText} />);
    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
});

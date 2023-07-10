import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders header, central content, and footer", () => {
    render(<App />);
    const headerElement = screen.getByTestId("header");
    const centralContentElement = screen.getByTestId("central-content");
    const footerElement = screen.getByTestId("footer");
    expect(headerElement).toBeInTheDocument();
    expect(centralContentElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});

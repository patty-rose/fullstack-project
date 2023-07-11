import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer", () => {
  test("renders the copyright text", () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(/Brooklyn Granary & Mill © 2023/i);
    expect(copyrightElement).toBeInTheDocument();
  });

  test("renders the developer information", () => {
    render(<Footer />);
    const developerElement = screen.getByText(/Developed by Patty Otero/i);
    expect(developerElement).toBeInTheDocument();
  });
});

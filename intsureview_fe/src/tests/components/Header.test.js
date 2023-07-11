import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header component", () => {
  test("Creates a header component with the name of a fake company.", () => {
    const testText = `Brooklyn Granary & Mill`
    render(<Header />);
    const headerElement = screen.getByText(testText);
    expect(headerElement).toBeInTheDocument();
  });
});

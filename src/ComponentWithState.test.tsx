/*
  @see https://github.com/testing-library/react-testing-library
*/
import ComponentWithState from "./ComponentWithState";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("Hooks", () => {
  test("ComponentWithState", () => {
    render(<ComponentWithState />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("0");

    userEvent.click(button);
    expect(button).toHaveTextContent("1");

    userEvent.click(button);
    expect(button).toHaveTextContent("2");
  });
});

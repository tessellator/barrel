import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("counter", () => {
  render(<Counter />);
  expect(screen.getByTestId("counter")).toHaveTextContent("0");
});

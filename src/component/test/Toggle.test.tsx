import { fireEvent, render, screen } from "@testing-library/react";
import { Toggle } from "../Toggle";

describe("Toggle component", () => {
  it("should show toggle without options", () => {
    render(<Toggle options={[]} />);
    const toggleElement = screen.getByTestId(/toggle-test-id/i);
    expect(toggleElement).toBeVisible();
    expect(toggleElement).toBeEmptyDOMElement();
  });

  it("should show toggle with 2 options", () => {
    const handleClick = jest.fn();
    render(
      <Toggle
        options={[
          { label: "one", onClick: handleClick },
          { label: "two", onClick: handleClick },
        ]}
      />
    );
    const toggleElement = screen.getByTestId(/toggle-test-id/i);
    expect(toggleElement).toBeVisible();
    expect(toggleElement).not.toBeEmptyDOMElement();
    const toggleButtonOneElement = screen.getByText(/one/i);
    expect(toggleButtonOneElement).toBeVisible();
    const toggleButtonTwoElement = screen.getByText(/two/i);
    expect(toggleButtonTwoElement).toBeVisible();
    
    fireEvent.click(toggleButtonOneElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.click(toggleButtonTwoElement);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});

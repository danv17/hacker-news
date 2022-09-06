import { render, screen } from "@testing-library/react";
import { Dropdown } from "../Dropdown";

describe("Dropdown component", () => {
  it("should show dropdown with options but close", () => {
    render(
      <Dropdown
        label="Select your option"
        value={""}
        options={[
          { label: "Option 1", value: "1", icon: "" },
          { label: "Option 2", value: "2", icon: "" },
        ]}
        onSelect={() => {}}
      />
    );
    const dropdownElement = screen.getByText(/select your option/i);
    expect(dropdownElement).toBeVisible();
    const dropdownItemListElement = screen.getByTestId(
      /dropdown-item-list-test-id/i
    );
    expect(dropdownItemListElement).toBeEmptyDOMElement();
  });
});

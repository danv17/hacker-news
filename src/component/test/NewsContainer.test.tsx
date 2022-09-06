import { render, screen } from "@testing-library/react";
import { NewsContainer } from "../NewsContainer";

describe("NewsContainer component", () => {
  it("should render empty", () => {
    render(<NewsContainer />);
    const newsContainerElement = screen.getByTestId(/news-container-test-id/i);
    expect(newsContainerElement).toBeVisible();
    expect(newsContainerElement).toBeEmptyDOMElement();
  });
});

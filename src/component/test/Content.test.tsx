import { render, screen } from '@testing-library/react';
import { Content } from "../Content";

describe('Content component', () => {
  it('should render, show toggle and dropdown', () => {
    render(<Content/>)
    const toggleElement = screen.getByTestId(/toggle-test-id/i);
    expect(toggleElement).toBeVisible();
    const dropdownElement = screen.getByTestId(/dropdown-test-id/i);
    expect(dropdownElement).toBeVisible();
    const newsWrapperElement = screen.getByTestId(/news-wrapper-test-id/i);
    expect(newsWrapperElement).toBeVisible();
  });
});

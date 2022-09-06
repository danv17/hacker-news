import { render, screen } from '@testing-library/react';
import { Header } from "../Header";

describe('Header component', () => {
  it('should show header with text pass as title prop', () => {
    render(<Header title="this is a test" />);
    const headerElement = screen.getByText(/this is a test/i);
    expect(headerElement).toBeVisible();
  });
});

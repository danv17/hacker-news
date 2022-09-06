import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component", () => {
  it("should render and show header", () => {
    render(<App />);
    const appElement = screen.getByTestId(/app-test-id/i);
    expect(appElement).toBeVisible();
  });
});

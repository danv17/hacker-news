import { render, screen } from "@testing-library/react";
import { New } from "../New";
import { NewProps } from "../../types";

describe("New component", () => {
  it("should render with author, timeAgo and story_title props", () => {
    const hit: NewProps = {
      framework: "reactjs",
      objectID: "32732222",
      created_at: "2022-09-06T02:57:06.000Z",
      timeAgo: "8 minutes",
      author: "Schroedingersat",
      story_title:
        "Toyota and Woven Planet Have Developed New Portable Hydrogen Cartridge Prototype",
      story_url: "https://global.toyota/en/newsroom/corporate/37405994.html",
      favourite: false,
    };
    render(<New {...hit} />);
    const timeIconElement = screen.getByTestId(/time-icon-test-id/i);
    expect(timeIconElement).toBeVisible();
    const timeAgoElement = screen.getByText(/8 minutes ago/i);
    expect(timeAgoElement).toBeVisible();
    const authorElement = screen.getByText(/Schroedingersat/i);
    expect(authorElement).toBeVisible();
    const storyTitleElement = screen.getByText(/Toyota and Woven Planet Have Developed New Portable Hydrogen Cartridge Prototype/i)
    expect(storyTitleElement).toBeVisible();
  });

  it("should render with heart full icon", () => {
    const hit: NewProps = {
      framework: "reactjs",
      objectID: "32732222",
      created_at: "2022-09-06T02:57:06.000Z",
      timeAgo: "8 minutes",
      author: "Schroedingersat",
      story_title:
        "Toyota and Woven Planet Have Developed New Portable Hydrogen Cartridge Prototype",
      story_url: "https://global.toyota/en/newsroom/corporate/37405994.html",
      favourite: true,
    };
    render(<New {...hit} />);
    const heartFullIconElement = screen.getByTestId(/heart-full-icon-test-id/i);
    expect(heartFullIconElement).toBeVisible();
  });
});

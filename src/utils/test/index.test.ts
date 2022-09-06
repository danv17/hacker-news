import { getTimeAgo } from "..";

describe("getTimeAgo function", () => {
  it("should return in days", () => {
    const days = getTimeAgo(1071360000);
    expect(days).toBe("12 days");
  });

  it("should return time in hours", () => {
    const hours = getTimeAgo(8014479);
    expect(hours).toBe("2 hours");
  });

  it("should return in minutes", () => {
    const minutes = getTimeAgo(495584);
    expect(minutes).toBe("8 minutes");
  });

  it("should return in seconds", () => {
    const seconds = getTimeAgo(30637);
    expect(seconds).toBe("30 seconds");
  });
});

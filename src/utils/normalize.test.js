import { normalize } from "./normalize";

describe("Normalize util", () => {
  it("should return the value multiplied by 2 due the scale", () => {
    const size = normalize(16);

    expect(size).toBe(32);
  });
});

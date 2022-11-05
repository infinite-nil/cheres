import {
  getCardPosition,
  getCardSize,
  getGradientStop,
  getZIndex,
} from "./styles";

describe("Style utils", () => {
  describe("Card position", () => {
    it("should return the correct card possition for level 0", () => {
      const position = getCardPosition(0);

      expect(position).toBe(0);
    });

    it("should return the correct card possition for level 1", () => {
      const position = getCardPosition(1);

      expect(position).toBe(8);
    });
  });

  describe("Card size", () => {
    it("should return the correct card size for level 0", () => {
      const position = getCardSize(0);

      expect(position).toBe(`100%`);
    });

    it("should return the correct card size for level 1", () => {
      const position = getCardSize(1);

      expect(position).toBe(`92%`);
    });
  });

  describe("Card gradient stop", () => {
    it("should return the correct stop for the gradient pattern", () => {
      const position = getGradientStop(1);

      expect(position).toBe(0.9);
    });
  });

  describe("Card ZIndex", () => {
    it("should return the correct z-index for the level 0", () => {
      const position = getZIndex(0);

      expect(position).toBe(100);
    });

    it("should return the correct z-index for the level 1", () => {
      const position = getZIndex(1);

      expect(position).toBe(99);
    });
  });
});

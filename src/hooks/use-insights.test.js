import { renderHook, act } from "@testing-library/react-hooks";
import { useInsights } from "./use-insights";

describe("useInsights", () => {
  it("should return the correct number of items", () => {
    const { result } = renderHook(() => useInsights());
    const { insights } = result.current;

    expect(insights.length).toBe(3);
  });

  it("should update the items after run one cycle", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useInsights());
    const { insights, handleInsightCycle } = result.current;

    act(() => {
      handleInsightCycle();
    });

    waitForNextUpdate({ timeout: false }).then(() => {
      const firstInsight = insights[0];

      expect(firstInsight.title).toBe(
        /BTC value increased 3.53% today. Price: $21176,90/gi
      );
    });
  });
});

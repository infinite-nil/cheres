import { useMemo, useState } from "react";
import { ITEMS } from "@utils/data";

const useInsights = () => {
  const [insights, setInsights] = useState(ITEMS);
  const insightsView = useMemo(() => {
    return insights.slice(0, 3);
  }, [insights]);

  const handleInsightCycle = () => {
    setInsights((current) => {
      if (current.length <= 1) return current;

      current.shift();

      return [...current];
    });
  };

  return {
    insights: insightsView,
    handleInsightCycle,
  };
};

export { useInsights };

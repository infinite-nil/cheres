import { useMemo, useState } from "react";

export type Insight = {
  id: string;
  feeling: string;
  title: string;
};

const ITEMS: Insight[] = [
  {
    id: "1",
    feeling: "🤑",
    title: "Expect to make $545.12 in dividends next quarter!",
  },
  {
    id: "2",
    feeling: "📈",
    title: "BTC value increased 3.53% today. Price: $21176,90",
  },
  {
    id: "3",
    feeling: "🖼️",
    title: "2 new trending NFT's collections discovered",
  },
  {
    id: "4",
    feeling: "🚀",
    title: "This month you invested more than in the last 3 months",
  },
  {
    id: "5",
    feeling: "📉",
    title: "ETH value decreased 0.29% today. Price: $1644,69",
  },
  {
    id: "6",
    feeling: "✅",
    title: "You're all caught up. Great job!",
  },
];

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
